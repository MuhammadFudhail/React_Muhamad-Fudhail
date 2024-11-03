import React, { useState } from 'react';
import CreateProduct from './CreateProduct';
import './Styles.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Default admin credentials
    if (email === 'admin' && password === '12345') {
      setIsLoggedIn(true);
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  //ketika sudah login
  if (isLoggedIn) {
    return <CreateProduct />;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter email" 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter password" 
          />
        </div>
        <div className="button-container">
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;
