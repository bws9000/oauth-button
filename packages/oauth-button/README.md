# @charmr/oauth-button  
A lightweight, OAuth login button for React, designed to work seamlessly with the `@charmr/oauth-core` controller. Supports Google, Facebook (implicit flow), and GitHub (authorization code flow)

[![npm version](https://img.shields.io/npm/v/@charmr/oauth-button.svg)](https://www.npmjs.com/package/@charmr/oauth-button)
 
## Install  
```bash  
npm install @charmr/oauth-button  
```  
## Usage  
```tsx 
import { OAuthLoginButton, OAuthError, OAuthSuccess } from '@charmr/oauth-button';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <OAuthLoginButton
              provider="google"
              clientId=""
              redirectUri="http://localhost:5173/oauth/callback"
              onSuccess={(token: OAuthError) => console.log('Token:', token)}
              onError={(err: OAuthSuccess) => console.error('Error:', err)}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
```

## Examples

### GitHub, Facebook, and Google

> 🔹 **GitHub** uses the **authorization code flow**, which requires a backend to exchange the `code` for an access token.  
> 🔹 **Facebook** and **Google** use the **implicit flow**, where the access token is returned directly in the URL hash — no backend required.

- [App.tsx Example](https://github.com/charmrcom/oauth-button/blob/main/packages/oauth-demo/src/App.tsx)
- [OAuthCallbackHandler.tsx](https://github.com/charmrcom/oauth-button/blob/main/packages/oauth-demo/src/OAuthCallbackHandler.tsx)


## License  
MIT
