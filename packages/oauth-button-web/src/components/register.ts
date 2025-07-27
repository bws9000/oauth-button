import { OAuthLoginButtonWeb } from './OAuthLoginButtonWeb';

const LOG_PREFIX = '@charmr-OAuthButtonWeb';
export function register(tag = 'oauth-login-button', opts?: { log?: boolean }) {
  try {
    if (!customElements.get(tag)) {
      customElements.define(tag, OAuthLoginButtonWeb);
      if (opts?.log) {
        console.info(`${LOG_PREFIX} Registered custom element: <${tag}>`);
      }
    } else if (opts?.log) {
      console.info(`${LOG_PREFIX} Custom element <${tag}> already registered`);
    }
  } catch (error) {
    console.error(`${LOG_PREFIX} Failed to register <${tag}>:`, error);
  }
}
