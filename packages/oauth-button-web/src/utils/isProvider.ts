import { providers, ProviderType } from '@charmr/oauth-core';

/**
 * validates dynamic input as a known provider (e.g. 'google').
 * narrows to ProviderType if true...
 */
export function isProvider(val: unknown): val is ProviderType {
  return typeof val === 'string' && providers.includes(val as ProviderType);
}