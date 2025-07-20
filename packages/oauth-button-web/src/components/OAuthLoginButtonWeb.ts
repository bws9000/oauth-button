import { useController, OAuthSuccess, OAuthError } from '@charmr/oauth-core';
import { isProvider } from '../utils/isProvider';

export class OAuthLoginButtonWeb extends HTMLElement {

    static get observedAttributes() {
        return ['provider', 'client-id', 'redirect-uri', 'button-text', 'store-provider'];
    }

    private button: HTMLButtonElement;
    private startLogin: () => void = () => { };

    private getProps() {
        return {
            provider: this.getAttribute('provider'),
            clientId: this.getAttribute('client-id') || '',
            redirectUri: this.getAttribute('redirect-uri') || '',
            buttonText: this.getAttribute('button-text'),
            inlineStyle: this.getAttribute('style'),
        };
    }

    constructor() {
        super();
        this.button = document.createElement('button');
        this.appendChild(this.button);
    }

    connectedCallback() {
        this.attachEvents();
        this.updateController();
        this.render();
    }

    attributeChangedCallback() {
        this.updateController();
        this.render();
    }

    private attachEvents() {
        this.button.addEventListener('click', () => {
            const provider = this.getAttribute('provider');
            const shouldStore = this.hasAttribute('store-provider');

            if (provider && shouldStore) {
                this.rememberProvider(provider);
            }

            this.startLogin();
        });
    }

    private rememberProvider(provider: string) {
        sessionStorage.setItem('oauth_provider', provider);
    }


    private updateController() {
        const { provider, clientId, redirectUri } = this.getProps();

        if (isProvider(provider)) {
            const { startLogin } = useController({
                provider,
                clientId,
                redirectUri,
                onSuccess: (res: OAuthSuccess) => {
                    this.dispatchEvent(new CustomEvent('oauth-success', { detail: res }));
                },
                onError: (err: OAuthError) => {
                    this.dispatchEvent(new CustomEvent('oauth-error', { detail: err }));
                },
            });
            this.startLogin = startLogin;
        } else {
            console.error(`OAuthLoginButtonWeb: "${provider}" is not a valid provider`);
        }
    }

    private render() {
        const { provider, buttonText, inlineStyle } = this.getProps();
        this.button.textContent = buttonText || `Continue with ${provider || 'OAuth'}`;
        this.button.className = this.className || '';
        this.button.style.cssText = `${inlineStyle || ''}; width: 100%; height: 100%; display: block;`;
    }
}