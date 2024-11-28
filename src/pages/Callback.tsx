import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function CallbackPage() {
  const { isAuthenticated, user, loginWithRedirect, logout, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/my-finances'); // Redirect to My Finances after successful login
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Logging you in...</h1>
    </div>
  );
}

export default CallbackPage;
