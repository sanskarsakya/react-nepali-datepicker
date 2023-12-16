import { create } from 'zustand'
import { fetchCountries } from '../../../../../mocks/api-simulator'
import { Dropdown } from '../dropdown'

interface StoreState {
    item: {
        [key: string]: Dropdown[]
    },

    // ACTIONS
    fetch: (key: string) => any,
    clear: () => void
}

export const useCountryStore = create<StoreState>()((set, get) => ({
    item: {},

    // ACTIONS
    fetch: async (key: string = "default") => {
        const items: any = await fetchCountries()
        set({
            item: {
                ...get().item ,
                [key]: items
            }
        })
    },
    clear: (key: string = "default") => set({
        item: {
            [key]: []
        }
    }),
}))

// SELECTORS
export const selectItems = (state: StoreState) => (key: string = "default") => state.item[key]
// ACTIONS
export const fetch = (state: StoreState) => state.fetch;
export const clear = (state: StoreState) => state.clear;
