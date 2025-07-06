# @charmr/oauth-button  
A lightweight, **soon-to-be framework-agnostic** OAuth login button for React, designed to work seamlessly with the `@charmr/oauth-core` controller.  
 
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
              clientId="1234LMNOPXYZ.apps.googleusercontent.com"
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