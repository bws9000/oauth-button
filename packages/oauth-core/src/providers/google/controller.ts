import { OAuthError, OAuthSuccess } from '../../types';
import { buildGoogleAuthUrl } from './buildAuthUrl';

type Args = {
    clientId: string;
    redirectUri: string;
    onSuccess?: (token: OAuthSuccess) => void;
    onError?: (err: OAuthError) => void;
};

export function createGoogleController({
    clientId,
    redirectUri,
    onSuccess,
    onError,
}: Args) {
    const startLogin = () => {
        try {
            const url = buildGoogleAuthUrl(clientId, redirectUri);
            window.location.href = url;
        } catch (err) {
            if (onError && err instanceof Error) onError(err);
        }
    };

    return { startLogin };
}
