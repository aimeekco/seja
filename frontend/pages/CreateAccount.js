'use client';
import React, { useState } from 'react';
import '../styles/createaccount.css'
import Navbar from './Navbar';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <h2 className="login-title">Create Account</h2>
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email" className="login-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="login-input"
          />
          <label htmlFor="password" className="login-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;