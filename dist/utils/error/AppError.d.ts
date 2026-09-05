export declare class AppError extends Error {
    type: string;
    summary?: string;
    details?: any;
    cause?: Error;
    constructor({ type, summary, message, details, cause, }: {
        type: string;
        summary?: string;
        message: string;
        details?: any;
        cause?: Error;
    });
}
