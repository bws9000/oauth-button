# @charmr/oauth-button  
A lightweight, OAuth login button for React, designed to work seamlessly with the `@charmr/oauth-core` controller.

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
## License  
MIT
