export function buildFacebookAuthUrl(clientId: string, redirectUri: string): string {
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'token',
    scope: 'email public_profile',
  });

  return `https://www.facebook.com/v12.0/dialog/oauth?${params.toString()}`;
}