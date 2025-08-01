export function extractGitHubCodeFromUrl(locationSearch: string): string | null {
  const params = new URLSearchParams(locationSearch);
  return params.get('code');
}