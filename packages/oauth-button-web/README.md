# `oauth-button-web`

A lightweight, framework-agnostic OAuth login button as a custom Web Component. Easily drop it into any HTML, React, Angular, or Vue project.

---

## Features

- Works with **Google OAuth2** (more providers coming soon)
- Zero dependencies
- Built as a **native Web Component**
- Emits `oauth-success` and `oauth-error` events
- Supports storing provider info in `sessionStorage` for redirect-based flows

---

## Installation

```bash
npm install oauth-button-web
```

## Import into your app
```ts
import 'oauth-button-web';
```
---
### Or include script
```js
<script type="module" src="/path/to/oauth-button-web.js"></script>
```
---
## Usage
```ts
<my-login-button
  provider="google"
  client-id="YOUR_GOOGLE_CLIENT_ID"
  redirect-uri="http://localhost:5173/oauth/callback"
  button-text="Sign in with Google"
  store-provider // Store in sessionStorage option
  class="my-login-button-class">
</my-login-button>
```

## Listen for Error/Success
```ts
const button = document.querySelector('my-login-button');

button.addEventListener('oauth-success', (e) => {
  console.log('OAuth Success!', e.detail);
});

button.addEventListener('oauth-error', (e) => {
  console.error('OAuth Error!', e.detail);
});
```

## Redirect Callback Handling
```ts
window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('my-login-button');

  const hash = window.location.hash;
  if (hash.includes('access_token=')) {
    const params = new URLSearchParams(hash.slice(1));
    const token = params.get('access_token');
    const provider = sessionStorage.getItem('oauth_provider') || 'unknown';
    const detail = { token, provider };
    const event = new CustomEvent('oauth-success', { detail });
    button?.dispatchEvent(event);
    sessionStorage.removeItem('oauth_provider');
    history.replaceState(null, '', window.location.pathname);
  }
});
```

## Compatibility

This package has been tested with:

- **Vanilla JavaScript**
- **Vite-based projects**

It is designed for simple browser environments and assumes a modern JavaScript build tool like Vite.

> ⚠️ Frameworks like React, Angular, or Vue should work, but no official implementation guides or testing have been completed for those yet in version v0.0.x

---

### Notes on Styling
>This component does not use Shadow DOM

### Licence
>MIT

