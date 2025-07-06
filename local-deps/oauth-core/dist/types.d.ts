export type AccessToken = string & {
    __brand: 'AccessToken';
};
export declare const providers: readonly ["google", "github", "facebook"];
export type ProviderType = typeof providers[number];
export type OAuthLoginProps = {
    /** provider to use, e.g., 'google' */
    provider: ProviderType;
    /** google OAuth client id  */
    clientId: string;
    /** redirect URI configured in your OAuth app */
    redirectUri: string;
    /** optional custom button text */
    buttonText?: string;
    /** called w the token after successful login */
    onSuccess?: (token: OAuthSuccess) => void;
    /** called if OAuth flow fails  */
    onError?: (error: OAuthError) => void;
    className?: string;
    style?: React.CSSProperties;
};
export type OAuthSuccess = {
    token: string;
};
export type OAuthError = {
    message: string;
    code?: string;
};
