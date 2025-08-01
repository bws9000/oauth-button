import { Routes, Route } from 'react-router-dom';
import { OAuthLoginButton } from '@charmr/oauth-button';
import { extractGitHubCodeFromUrl } from '@charmr/oauth-core';
import type { OAuthSuccess, OAuthError } from '@charmr/oauth-core';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//github example
//gitHub callback handler
function OAuthCallbackHandler({
  onSuccess,
  onError,
}: {
  onSuccess: (token: OAuthSuccess) => void;
  onError: (error: OAuthError) => void;
}) {
  const location = useLocation();

  useEffect(() => {
    const code = extractGitHubCodeFromUrl(location.search);
    if (!code) {
      onError({ message: 'No code found in GitHub redirect' });
      return;
    }
    //!this code cannot be exchanged for a token without a backend.
    //!here we just simulate the flow.
    console.log('gitHub OAuth code:', code);
    onSuccess({ token: `CODE:${code}` }); //simulated token
  }, [location]);

  return <p>Completing GitHub login...</p>;
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <OAuthLoginButton
            provider="github"
            clientId="Ov23liAiWuOrZ9qx43bR"
            redirectUri="http://localhost:5173/oauth/callback"
            onSuccess={(token: OAuthSuccess) => console.log('Token:', token)}
            onError={(err: OAuthError) => console.error('Error:', err)}
            className="bg-gray-800 text-white px-4 py-2 rounded"
            style={{ fontWeight: 'bold' }}
          />
        }
      />
      <Route
        path="/oauth/callback"
        element={
          <OAuthCallbackHandler
            onSuccess={(token) => console.log('GitHub success (code only):', token)}
            onError={(error) => console.error('GitHub error:', error)}
          />
        }
      />
    </Routes>
  );
}

/*

facebook and google example:

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <OAuthLoginButton
          provider="facebook"
          clientId="6d1d336b711126aaeeabab2c7a4748a4"
          redirectUri="http://localhost:5173/oauth/callback"
          onSuccess={(token: OAuthSuccess) => console.log('Token:', token)}
          onError={(err: OAuthError) => console.error('Error:', err)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          style={{ fontWeight: 'bold' }}
        />
      } />
      <Route path="/oauth/callback" element={
        <OAuthCallbackHandler
          onSuccess={(token: any) => {
            console.log('Success from callback:', token);
          }}
          onError={(error: any) => {
            console.error('OAuth error:', error);
          }}
        />
      } />
    </Routes>
  );
}
*/