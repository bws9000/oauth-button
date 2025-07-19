import { useController, OAuthSuccess, OAuthError } from '@charmr/oauth-core';
import { isProvider } from '../utils/isProvider';

export class OAuthLoginButtonWeb extends HTMLElement {
    static get observedAttributes() {
        return ['provider', 'client-id', 'redirect-uri', 'button-text'];
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
        this.attachEvents();
        this.appendChild(this.button);
    }

    connectedCallback() {
        this.updateController();
        this.render();
    }

    attributeChangedCallback() {
        this.updateController();
        this.render();
    }

    private attachEvents() {
        this.button.addEventListener('click', () => {
            this.startLogin();
        });
    }

    private updateController() {
        const provider = this.getAttribute('provider');
        if (isProvider(provider)) {
            const clientId = this.getAttribute('client-id') || '';
            const redirectUri = this.getAttribute('redirect-uri') || '';

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
        const buttonText = this.getAttribute('button-text') || `Continue with ${this.getAttribute('provider') || 'OAuth'}`;
        this.button.textContent = buttonText;
        this.button.className = this.className || '';
        this.button.style.cssText = this.getAttribute('style') || '';
    }
}