import { create } from 'zustand'
import { apiSimulator } from '../libs/api-simulator'
import { DataState, STATUS_IDLE, STATUS_LOADING } from '../shared/ts/data-state'
import { initialDataState, usePersonalInformationStore } from './use-personal-information-store'

interface FormState {
    isOpen   : boolean,
    dispatch : any,
    watch    : any,
    getValues: any,
    reset    : any,
    detail   : DataState<any>,

    countries: DataState<any>
    provinces: DataState<any>
    districts: DataState<any>

      // ACTIONS
    open       : () => any,
    close      : () => any,
    watchChange: ({ name, value }: {
        name : string,
        value: string
    }) => any,
    mount: (data: {
        watch    : any
        reset    : any
        getValues: any
    }) => any,
    submit     : () => any,
    fetchDetail: () => void
    clearStore : () => void
}

const initial = {
    isOpen   : false,
    dispatch : null,
    watch    : null,
    getValues: null,
    detail   : initialDataState,
    reset    : null,

    countries: initialDataState,
    provinces: initialDataState,
    districts: initialDataState,

}
export const useFormStore = create<FormState>()((set, get) => ({
    ...initial,

      // ACTIONS
    mount: async ({ watch, reset, getValues }) => {

        set({
            watch, reset, getValues
        })

        const pendingRequest = usePersonalInformationStore.getState().pendingRequest.data;

        reset({
            ...getValues(),
            ...pendingRequest?.["CurrentAddress"].NewData
        })
        fetchAndSetCountries(set, get)
        fetchAndSetProvinces(set, get)
        fetchAndSetDistricts(set, get)
    },
    open: () => {
        set({ isOpen: true })
    },
    close: () => {
        set({ isOpen: false })
    },

    watchChange: ({ name, value }) => {
        if (name === "IsSameAddress") {
            const currentFormValues = get()?.getValues();
            const gv                = (value: any) => {
                return {
                    PermanentAddress : value ? currentFormValues.Address : "",
                    PermanentCountry : value ? currentFormValues.Country : null,
                    PermanentProvince: value ? currentFormValues.Province: null,
                    PermanentDistrict: value ? currentFormValues.District: null,
                    PermanentLocality: value ? currentFormValues.Locality: "",
                    PermanentHouseNo : value ? currentFormValues.HouseNo : "",
                    PermanentStreet  : value ? currentFormValues.Street  : "",
                    PermanentState   : value ? currentFormValues.State   : "",
                    PermanentZipCode : value ? currentFormValues.ZipCode : "",
                    PermanentZone    : value ? currentFormValues.Zone    : "",
                }
            }

            get().reset({
                ...currentFormValues,
                ...gv(value)
            })
        }
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
export const selectDetail    = (state: FormState) => state.detail;
export const selectIsOpen    = (state: FormState) => state.isOpen;
export const selectCountries = (state: FormState) => state.countries;
export const selectProvinces = (state: FormState) => state.provinces;
export const selectDistricts = (state: FormState) => state.districts;

  // ACTIONS
export const fnWatchChange = (state: FormState) => state.watchChange;
export const fnMount       = (state: FormState) => state.mount;
export const fnFetchDetail = (state: FormState) => state.fetchDetail;
export const fnClearStore  = (state: FormState) => state.clearStore;
export const fnOpen        = (state: FormState) => state.open;
export const fnClose       = (state: FormState) => state.close;
export const fnSubmit      = (state: FormState) => state.submit;

async function fetchAndSetDistricts(set: (partial: FormState | Partial<FormState> | ((state: FormState) => FormState | Partial<FormState>), replace?: boolean | undefined) => void, get: () => FormState) {
    console.log("districts")
    set({
        districts: {
            ...get().districts,
            loading: STATUS_LOADING
        }
    })
    const response = await apiSimulator([{ label: "Kathmandu", value: 3 }])
    set({
        districts: {
            data   : response,
            loaded : true,
            loading: STATUS_IDLE
        }
    })
}

async function fetchAndSetProvinces(set: (partial: FormState | Partial<FormState> | ((state: FormState) => FormState | Partial<FormState>), replace?: boolean | undefined) => void, get: () => FormState) {
    console.log("provinces")
    set({
        provinces: {
            ...get().provinces,
            loading: STATUS_LOADING
        }
    })
    const response = await apiSimulator([{ label: "Province 3", value: 3 }])
    set({
        provinces: {
            data   : response,
            loaded : true,
            loading: STATUS_IDLE
        }
    })
}

async function fetchAndSetCountries(set: (partial: FormState | Partial<FormState> | ((state: FormState) => FormState | Partial<FormState>), replace?: boolean | undefined) => void, get: () => FormState) {
    console.log("countries")
    set({
        countries: {
            ...get().countries,
            loading: STATUS_LOADING
        }
    })
    const response = await apiSimulator([{ label: "Nepal", value: 1 }])
    set({
        countries: {
            data   : response,
            loaded : true,
            loading: STATUS_IDLE
        }
    })
}
