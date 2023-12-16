import { create } from 'zustand'
import { Dropdown } from '../dropdown'
import { fetchProvinces } from '../../../../../mocks/api-simulator'

interface StoreState {
    item: {
        [key: string]: Dropdown[]
    },

    // ACTIONS
    fetch: (country: string, key:string) => any,
    clear: () => void
}

export const useProvinceStore = create<StoreState>()((set, get) => ({
    item: {},

    // ACTIONS
    fetch: async (country: string, identifier: string = "default") => {
        console.log("fetch")
        const items: any = await fetchProvinces(country)
        set({
            item: {
                ...get().item ,
                [identifier]: items
            }
        })
    },
    clear: (identifier: string = "default") => set({
        item: {
            [identifier]: []
        }
    }),
}))

// SELECTORS
export const selectItems = (state: StoreState) => (identifier: string = "default") => state.item[identifier]

// ACTIONS
export const fetch = (state: StoreState) => state.fetch;
export const clear = (state: StoreState) => state.clear;
