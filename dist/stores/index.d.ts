import { useUserStore } from '../stores/userStore';
export { useUserStore };
declare const _default: {
    useUserStore: import('../../node_modules/pinia/dist/pinia').StoreDefinition<"userStore", Pick<{
        isSignedIn: import('vue').Ref<boolean, boolean>;
        updateAuth: (doesSessionExist: boolean) => void;
    }, "isSignedIn">, Pick<{
        isSignedIn: import('vue').Ref<boolean, boolean>;
        updateAuth: (doesSessionExist: boolean) => void;
    }, never>, Pick<{
        isSignedIn: import('vue').Ref<boolean, boolean>;
        updateAuth: (doesSessionExist: boolean) => void;
    }, "updateAuth">>;
};
export default _default;
