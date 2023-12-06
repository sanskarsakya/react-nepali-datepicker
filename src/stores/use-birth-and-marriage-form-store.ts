import { create } from 'zustand'
import { apiSimulator } from '../libs/api-simulator'
import { usePersonalInformationStore } from './use-personal-information-store'

interface FormState {
    isOpen: boolean,
    dispatch: any,
    watch: any,
    getValues: any,
    reset: any,

    // ACTIONS
    open: () => any,
    close: () => any,
    mount: (data: {
        watch: any
        reset: any
        getValues: any
    }) => any,
    fetchDetail: () => void
    watchChange: ({ name, value }: {
        name: string,
        value: string
    }) => any,
    submit: () => any,
    clearStore: () => void
}

const initial = {
    isOpen: false,
    dispatch: null,
    watch: null,
    getValues: null,
    reset: null,

}
export const useBirthAndMarriageFormStore = create<FormState>()((set, get) => ({
    ...initial,

    // ACTIONS
    mount: async ({ watch, reset, getValues }) => {

        set({
            watch, reset, getValues
        })

        const pendingRequest = usePersonalInformationStore.getState().pendingRequest.data;

        console.log(pendingRequest)
        reset({
            ...getValues(),
            ...pendingRequest?.["PersonalInformation"]?.NewData
        })
    },
    open: () => {
        set({ isOpen: true })
    },
    close: () => {
        set({ isOpen: false })
    },

    watchChange: ({ name, value }) => {
        console.log(name, value)
    },

    fetchDetail: async () => {

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
export const fnOpen = (state: FormState) => state.open;
export const fnClose = (state: FormState) => state.close;
export const fnMount = (state: FormState) => state.mount;
export const fnFetchDetail = (state: FormState) => state.fetchDetail;
export const fnWatchChange = (state: FormState) => state.watchChange;
export const fnSubmit = (state: FormState) => state.submit;
export const fnClearStore = (state: FormState) => state.clearStore;
