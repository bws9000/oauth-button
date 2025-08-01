export function extractGoogleTokenFromUrl(locationHash: string): string | null {
  const hash = locationHash.startsWith('#') ? locationHash.slice(1) : locationHash;
  const params = new URLSearchParams(hash);
  return params.get('access_token');
}
