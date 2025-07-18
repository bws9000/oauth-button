export type AccessToken = string & { __brand: 'AccessToken' };
export const providers = ['google', 'github', 'facebook'] as const;
export type ProviderType = typeof providers[number];


export type OAuthLoginProps = {
  provider: ProviderType;
  clientId: string;
  redirectUri: string;
  buttonText?: string;
  onSuccess?: (token: OAuthSuccess) => void;
  onError?: (error: OAuthError) => void;
  className?:string;
  style?: React.CSSProperties;
};

export type OAuthSuccess = {
  token: string;
};

export type OAuthError = {
  message: string;
  code?: string;
};
