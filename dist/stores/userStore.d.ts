declare const useUserStore: import('pinia').StoreDefinition<"userStore", Pick<{
    isSignedIn: import('vue').Ref<boolean, boolean>;
    updateAuth: (doesSessionExist: boolean) => void;
}, "isSignedIn">, Pick<{
    isSignedIn: import('vue').Ref<boolean, boolean>;
    updateAuth: (doesSessionExist: boolean) => void;
}, never>, Pick<{
    isSignedIn: import('vue').Ref<boolean, boolean>;
    updateAuth: (doesSessionExist: boolean) => void;
}, "updateAuth">>;
export { useUserStore };
