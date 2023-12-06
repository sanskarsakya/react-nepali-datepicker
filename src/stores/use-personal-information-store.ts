import { create } from 'zustand'
import { DataState } from '../shared/ts/data-state'
import { apiSimulator } from '../libs/api-simulator'
import { Mock_PerndingRequest as Mock_PendingRequest, Mock_PersonalInformation } from '../mocks'
import { IPersonalInformation } from '../types/personal-information.types'

export const initialDataState: DataState<any> = {
    loading: "IDLE",
    loaded: false,
    data: []
}

interface PersonalInformationState {
    dispatch: any,
    watch: any,
    getValues: any,
    reset: any,
    pendingRequest: DataState<any>,
    personalInformation: DataState<IPersonalInformation>,

    // ACTIONS
    fetchPersonalInformation: () => any,
    fetchPendingRequest: () => void
    clearStore: () => void
}

const initial = {
    dispatch: null,
    watch: null,
    getValues: null,
    reset: null,
    pendingRequest: {...initialDataState, data:null},
    personalInformation: {...initialDataState, data:null},

}
export const usePersonalInformationStore = create<PersonalInformationState>()((set, get) => ({
    ...initial,

    // ACTIONS
    fetchPersonalInformation: async () => {
        set({
            personalInformation: {
                ...get().personalInformation,
                loading: "LOADING"
            }
        })

        const response: any = await apiSimulator(Mock_PersonalInformation)

        set({
            personalInformation: {
                ...get().personalInformation,
                data: response.Data,
                loaded: true,
                loading: "IDLE"
            }
        })
    },
    fetchPendingRequest: async () => {
        set({
            pendingRequest: {
                ...get().pendingRequest,
                loading: "LOADING"
            }
        })

        const response: any = await apiSimulator(Mock_PendingRequest)

        set({
            pendingRequest: {
                ...get().pendingRequest,
                data: response.Data,
                loaded: true,
                loading: "IDLE"
            }
        })
    },
    clearStore: () => set({ ...initial }),
}))

// SELECTORS
export const selectPersonalInformation = (state: PersonalInformationState) => state.personalInformation;
export const selectPendingRequest = (state: PersonalInformationState) => state.pendingRequest;

// actions
export const fnFetchPersonalInformation = (state: PersonalInformationState) => state.fetchPersonalInformation;
export const fnFetchPendingRequest = (state: PersonalInformationState) => state.fetchPendingRequest;
export const fnClearStore = (state: PersonalInformationState) => state.clearStore;