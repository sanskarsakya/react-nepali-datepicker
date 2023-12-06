import { create } from 'zustand'
import { fetchPendingRequest, fetchPersonalInformation } from '../linked-pages/personal-information/machines/fetch-machine'
import { IPersonalInformation } from '../linked-pages/personal-information/machines/types/personal-information.types'

export interface DataState<T> {
    loading: 'LOADING' | "IDLE",
    loaded: boolean,
    data: T[] | T | [] | null
}

export const initialDataState: DataState<any> = {
    loading: "IDLE",
    loaded: false,
    data: null
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
    pendingRequest: initialDataState,
    personalInformation: initialDataState,

}
export const usePersonalInformationSotre = create<PersonalInformationState>()((set, get) => ({
    ...initial,

    // ACTIONS
    fetchPersonalInformation: async () => {
        set({
            personalInformation: {
                ...get().personalInformation,
                loading: "LOADING"
            }
        })

        const response: any = await fetchPersonalInformation()

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

        const response: any = await fetchPendingRequest()

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
export const fnFetchPrsonalInformation = (state: PersonalInformationState) => state.fetchPersonalInformation;
export const fnFetchPendingRequest = (state: PersonalInformationState) => state.fetchPendingRequest;
export const fnClearStore = (state: PersonalInformationState) => state.clearStore;