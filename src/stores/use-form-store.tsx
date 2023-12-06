import { create } from 'zustand'
import { DataState, initialDataState, usePersonalInformationSotre } from './use-personal-information-store'

interface FormState {
    isOpen: boolean,
    dispatch: any,
    watch: any,
    getValues: any,
    reset: any,
    detail: DataState<any>,

    // ACTIONS
    open: () => any,
    close: () => any,
    mount: (data: any) => any,
    submit: () => any,
    fetchDetail: () => void
    clearStore: () => void
}

const initial = {
    isOpen: false,
    dispatch: null,
    watch: null,
    getValues: null,
    detail: initialDataState,
    reset: null,

}
export const useFormStore = create<FormState>()((set,) => ({
    ...initial,

    // ACTIONS
    mount: ({ watch, reset, getValues }) => {
        set({
            watch, reset, getValues
        })
        const pendingRequest = usePersonalInformationSotre.getState().pendingRequest.data;
        reset({
            ...getValues(),
            ...pendingRequest?.["CurrentAddress"].NewData
        })
    },
    open: () => {
        set({ isOpen: true })
    },
    close: () => {
        set({ isOpen: false })
    },
    submit: () => {
        set({ isOpen: false })
    },
    fetchDetail: async () => {
        // set({
        //     pendingRequest: {
        //         ...get().pendingRequest,
        //         loading: "LOADING"
        //     }
        // })

        // const response: any = await fetchPendingRequest()

        // set({
        //     pendingRequest: {
        //         ...get().pendingRequest,
        //         data: response.Data,
        //         loaded: true,
        //         loading: "IDLE"
        //     }
        // })
    },
    clearStore: () => set({ ...initial }),
}))

// SELECTORS
export const selectDetail = (state: FormState) => state.detail;
export const selectIsOpen = (state: FormState) => state.isOpen;

// actions
export const fnMount = (state: FormState) => state.mount;
export const fnFetchDetail = (state: FormState) => state.fetchDetail;
export const fnClearStore = (state: FormState) => state.clearStore;
export const fnOpen = (state: FormState) => state.open;
export const fnClose = (state: FormState) => state.close;
export const fnSubmit = (state: FormState) => state.submit;