'use client';
import React, { useState } from 'react';
import '../styles/createaccount.css';
import { useRouter } from 'next/router';

const LoginComponent = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [classYear, setClassYear] = useState('');
  const [registrationTime, setRegistrationTime] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
  const handleClassYearChange = (event) => setClassYear(event.target.value);
  const handleRegistrationTimeChange = (event) => setRegistrationTime(event.target.value);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    const postData = { name, email, password, classYear, registrationTime };
    
    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      const data = await response.json();
      console.log(data);
      router.push('/Pomona');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Create Account</h2>
      <div className="form-container">
        <div className="form-section">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          <label htmlFor="password">New Password</label>
          <input type="password" id="password" name="password" placeholder="New Password" value={password} onChange={handlePasswordChange} />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <div className="form-section">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" value={name} onChange={handleNameChange} />
          <label htmlFor="classYear">Class Year</label>
          <select id="classYear" name="classYear" value={classYear} onChange={handleClassYearChange}>
            <option value="">Select Year</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
          </select>
          <label htmlFor="registrationTime">Registration Time</label>
          <input type="time" id="registrationTime" name="registrationTime" value={registrationTime} onChange={handleRegistrationTimeChange} />
        </div>
      </div>
      <button type="submit" onClick={handleLogin}>Create Account</button>
    </div>
  );
};

export default LoginComponent;
