export type AccessToken = string & {
    __brand: 'AccessToken';
};
export declare const providers: readonly ["google", "github", "facebook"];
export type ProviderType = typeof providers[number];
export type OAuthLoginProps = {
    /** Provider to use, e.g., 'google' */
    provider: ProviderType;
    /** Google OAuth Client ID */
    clientId: string;
    /** Redirect URI configured in your OAuth app */
    redirectUri: string;
    /** Optional custom button text */
    buttonText?: string;
    /** Called with the token after successful login */
    onSuccess?: (token: OAuthSuccess) => void;
    /** Called if OAuth flow fails */
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
