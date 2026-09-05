export interface ApiResponse<T> {
    data: T;
    pagination?: {
        total: number;
        page: number;
        pageSize: number;
    };
    error?: string | null;
}
export interface SuccessResponse {
    success: boolean;
    message?: string;
}
