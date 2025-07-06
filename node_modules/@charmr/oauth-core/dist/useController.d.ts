import { ProviderType, OAuthError, OAuthSuccess } from './types';
type UseControllerProps = {
    provider: ProviderType;
    clientId: string;
    redirectUri: string;
    onSuccess?: (token: OAuthSuccess) => void;
    onError?: (err: OAuthError) => void;
};
export declare function useController(props: UseControllerProps): {
    startLogin: () => void;
};
export {};
