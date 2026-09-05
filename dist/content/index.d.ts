import { default as messages } from './messages.json';
export { messages };
declare const _default: {
    messages: {
        error: {
            somethingWentWrong: {
                summary: string;
                detail: string;
            };
        };
        email: {
            requestChange: {
                success: {
                    summary: string;
                    detail: string;
                };
                error: {
                    sameEmail: {
                        summary: string;
                        detail: string;
                    };
                };
            };
            updateEmail: {
                success: {
                    summary: string;
                    detail: string;
                };
                error: {
                    invalidToken: {
                        summary: string;
                        detail: string;
                    };
                };
            };
        };
        account: {
            delete: {
                error: {
                    summary: string;
                    detail: string;
                };
                success: {
                    summary: string;
                    detail: string;
                };
            };
        };
        captcha: {
            verification: {
                error: {
                    summary: string;
                    detail: string;
                };
            };
        };
    };
};
export default _default;
