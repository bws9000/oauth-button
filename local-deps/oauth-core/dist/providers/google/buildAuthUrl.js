export function buildGoogleAuthUrl(clientId, redirectUri) {
    const params = new URLSearchParams({
        response_type: 'token',
        client_id: clientId,
        redirect_uri: redirectUri,
        scope: 'email profile',
    });
    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}
