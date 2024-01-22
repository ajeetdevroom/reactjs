// LoginComponent.js
import React, { useState } from 'react';
import { authenticate } from './authService';

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const isAuthenticated = await authenticate(username, password);
    if (isAuthenticated) {
      // Redirect or perform actions upon successful login
    }
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
