'use client';
import React, { useState } from 'react';
import '../styles/createaccount.css'
import { useRouter } from 'next/navigation';


const LoginComponent = () => {

  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
    
    // Handle the login logic here
    
    router.push('/Pomona')
    //console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Create Account</h2>
      <form onSubmit={handleLogin} className="login-form">
      <label htmlFor="name" className="login-label">Name</label>
        <input
          type="name"
          id="name"
          name="name"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
          className="login-input"
        />
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
        <button type="submit" className="login-button">Create Account</button>
      </form>
    </div>
  );
};

export default LoginComponent;