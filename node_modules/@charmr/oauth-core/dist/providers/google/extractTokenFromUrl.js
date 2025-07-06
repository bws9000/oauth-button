export function extractTokenFromUrl(locationHash) {
    const hash = locationHash.startsWith('#') ? locationHash.slice(1) : locationHash;
    const params = new URLSearchParams(hash);
    return params.get('access_token');
}
