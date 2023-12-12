import { create } from 'zustand'
import { apiSimulator } from '../libs/api-simulator'
import { initialDataState, usePersonalInformationStore } from './use-personal-information-store'
import * as _ from "lodash"

interface FormState {
    selectedId: number,
    isOpen: boolean,
    dispatch: any,
    watch: any,
    getValues: any,
    reset: any,

    // ACTIONS
    open: ({ selectedId }: { selectedId?: number }) => any,
    close: () => any,
    watchChange: ({ name, value }: {
        name: string,
        value: string
    }) => any,
    mount: (data: {
        watch: any
        reset: any
        getValues: any
    }) => any,
    submit: () => any,
    clearStore: () => void
}

const initial = {
    selectedId: -1,
    isOpen: false,
    dispatch: null,
    watch: null,
    getValues: null,
    reset: null,

    nationality: { ...initialDataState, data: [] },
}
export const useHealthFormStore = create<FormState>()((set, get) => ({
    ...initial,

    // ACTIONS
    mount: async ({ watch, reset, getValues }) => {

        set({
            watch, reset, getValues
        })
        // fetchAndSetNationalities(set, get)

        // if selectedId 
        // if pending request family present
        // find matching pending request
        // sync to form value
        if (get().selectedId !== -1) {
            const pendingRequest = usePersonalInformationStore.getState().pendingRequest.data;
            const healthPendingRequest = pendingRequest?.["Health"]?.NewData
            reset({
                ...getValues(),
                ...healthPendingRequest
            })
        }


    },
    open: (params) => {
        set({ selectedId: params?.selectedId, isOpen: true })
    },
    close: () => {
        set({ isOpen: false, selectedId: -1 })
    },
    watchChange: ({ name, value }) => {
        console.log(name, value)
    },
    submit: () => {
        const formValues = get()?.getValues();
        apiSimulator("done")
        console.log(formValues)
        set({ isOpen: false })
    },
    clearStore: () => set({ ...initial }),
}))

// SELECTORS
export const selectIsOpen = (state: FormState) => state.isOpen;

// ACTIONS
export const fnWatchChange = (state: FormState) => state.watchChange;
export const fnMount = (state: FormState) => state.mount;
export const fnClearStore = (state: FormState) => state.clearStore;
export const fnOpen = (state: FormState) => state.open;
export const fnClose = (state: FormState) => state.close;
export const fnSubmit = (state: FormState) => state.submit;

