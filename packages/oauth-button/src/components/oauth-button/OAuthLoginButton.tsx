import React, { CSSProperties } from 'react';
import { useController, OAuthLoginProps as CoreOAuthLoginProps } from '@charmr/oauth-core';

export interface OAuthLoginProps extends Omit<CoreOAuthLoginProps, 'style'> {
  style?: CSSProperties;
}

export const OAuthLoginButton: React.FC<OAuthLoginProps> = ({
    provider,
    clientId,
    redirectUri,
    buttonText = `Continue with ${provider}`,
    onSuccess,
    onError,
    className,
    style
}) => {

    const { startLogin } = useController({
        provider: provider,
        clientId: clientId,
        redirectUri: redirectUri,
        onSuccess,
        onError,
    });

    return (
        <button
            className={className}
            style={style}
            onClick={startLogin}>
            {buttonText}
        </button>
    );
};
