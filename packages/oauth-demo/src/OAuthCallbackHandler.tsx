import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type OAuthCallbackHandlerProps = {
    onSuccess: (token: string) => void;
    onError?: (error: Error) => void;
};

export const OAuthCallbackHandler: React.FC<OAuthCallbackHandlerProps> = ({
    onSuccess,
    onError,
}) => {
    const location = useLocation();
    useEffect(() => {
        try {
            const hashParams = new URLSearchParams(location.hash.replace(/^#/, ''));
            const token = hashParams.get('access_token');
            if (token) {
                onSuccess(token);
            } else {
                throw new Error('Access token not found in URL');
            }
        } catch (err) {
            if (onError && err instanceof Error) {
                onError(err);
            }
        }
    }, [location, onSuccess, onError]);
    return <p>Logging you in...</p>;
};
