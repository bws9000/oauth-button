import { buildGoogleAuthUrl } from './buildAuthUrl';
export function createGoogleController({ clientId, redirectUri, onSuccess, onError, }) {
    const startLogin = () => {
        try {
            const url = buildGoogleAuthUrl(clientId, redirectUri);
            window.location.href = url;
        }
        catch (err) {
            if (onError && err instanceof Error)
                onError(err);
        }
    };
    return { startLogin };
}
