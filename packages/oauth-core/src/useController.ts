import { createFacebookController } from './providers/facebook/controller';
import { createGitHubController } from './providers/github/controller';
import { createGoogleController } from './providers/google/controller';
import { ProviderType, OAuthError,OAuthSuccess } from './types';

type UseControllerProps = {
  provider: ProviderType;
  clientId: string;
  redirectUri: string;
  onSuccess?: (token: OAuthSuccess) => void;
  onError?: (err: OAuthError) => void;
};

export function useController(props: UseControllerProps) {
  switch (props.provider) {
    case 'google':
      return createGoogleController(props);
    case 'facebook':
      return createFacebookController(props);
    case 'github':
      return createGitHubController(props);
    default:
      throw new Error(`Unsupported provider: ${props.provider}`);
  }
}