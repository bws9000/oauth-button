import { OAuthError } from '../../types';
import { buildGitHubAuthUrl } from './buildAuthUrl';

type Args = {
  clientId: string;
  redirectUri: string;
  onSuccess?: (token: any) => void;
  onError?: (err: OAuthError) => void;
};

export function createGitHubController({
  clientId,
  redirectUri,
  onError,
}: Args) {
  const startLogin = () => {
    try {
      const url = buildGitHubAuthUrl(clientId, redirectUri);
      window.location.href = url;
    } catch (err) {
      if (onError && err instanceof Error) onError({ message: err.message });
    }
  };

  return { startLogin };
}
