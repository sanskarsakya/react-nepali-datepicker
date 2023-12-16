import { create } from 'zustand'
import { fetchDistricts } from '../../../../../mocks/api-simulator'
import { Dropdown } from '../dropdown'

interface StoreState {
    items: Dropdown[],

    // ACTIONS
    fetch: (country: string) => any,
    clear: () => void
}

export const useDistrictStore = create<StoreState>()((set) => ({
    items: [],

    // ACTIONS
    fetch: async (country: string) => {
        console.log("fetch")
        const items: any = await fetchDistricts(country)
        set({ items })
    },
    clear: () => set({ items:[] }),
}))

// SELECTORS
export const selectItems = (state: StoreState) => state.items;

// ACTIONS
export const fetch = (state: StoreState) => state.fetch;
export const clear = (state: StoreState) => state.clear;
