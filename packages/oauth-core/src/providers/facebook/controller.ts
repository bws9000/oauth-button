import { OAuthError, OAuthSuccess } from '../../types';
import { buildFacebookAuthUrl } from './buildAuthUrl';

type Args = {
  clientId: string;
  redirectUri: string;
  onSuccess?: (token: OAuthSuccess) => void;
  onError?: (err: OAuthError) => void;
};

export function createFacebookController({
  clientId,
  redirectUri,
  onError,
}: Args) {
  const startLogin = () => {
    try {
      const url = buildFacebookAuthUrl(clientId, redirectUri);
      window.location.href = url;
    } catch (err) {
      if (onError && err instanceof Error) onError({ message: err.message });
    }
  };

  return { startLogin };
}