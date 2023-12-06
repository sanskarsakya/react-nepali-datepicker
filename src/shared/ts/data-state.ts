
export const STATUS_LOADING = 'LOADING'
export const STATUS_IDLE = 'IDLE'

export interface DataState<T> {
    loading:  typeof STATUS_LOADING| typeof STATUS_IDLE;
    loaded: boolean;
    data: T[] | T | [] | null;
}
