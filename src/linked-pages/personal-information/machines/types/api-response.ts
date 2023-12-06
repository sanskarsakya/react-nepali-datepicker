
export interface ApiResponse<T> {
    Data: T;
    MessageType: string;
    Message: any[];
    Status: boolean;
}
