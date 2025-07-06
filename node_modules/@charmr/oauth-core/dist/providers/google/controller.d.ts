import { OAuthError, OAuthSuccess } from '../../types';
type Args = {
    clientId: string;
    redirectUri: string;
    onSuccess?: (token: OAuthSuccess) => void;
    onError?: (err: OAuthError) => void;
};
export declare function createGoogleController({ clientId, redirectUri, onSuccess, onError, }: Args): {
    startLogin: () => void;
};
export {};
