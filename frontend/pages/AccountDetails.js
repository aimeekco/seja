'use client'
import { useEffect, useState } from 'react';


function AccountDetails() {
      const [userName, setUserName] = useState(null);
      const [userTime, setUserTime] = useState(null);
      const [userRoom, setUserRoom] = useState(null);
      const [error, setError] = useState(null);
  
      const fetchName = async () => {
          try {
              const response = await fetch('http://127.0.0.1:5000/name', {
                  method: 'POST',
                  credentials: 'include',
                  headers: {
                      'Content-Type': 'application/json',
                  },
              });
              if (!response.ok) {
                  throw new Error('Failed to fetch name');
              }
              const data = await response.json();
              setUserName(data.message);
          } catch (error) {
              console.error('Error:', error);
              setError(error.message);
          }
      };
  
      const fetchTime = async () => {
          try {
              const response = await fetch('http://127.0.0.1:5000/time', {
                  method: 'POST',
  credentials: 'include',
                  headers: {
                      'Content-Type': 'application/json',
                  },
              });
              if (!response.ok) {
                  throw new Error('Failed to fetch time');
              }
              const data = await response.json();
              setUserTime(data.message);
          } catch (error) {
              console.error('Error:', error);
              setError(error.message);
          }
      };
  
      const fetchRoom = async () => {
          try {
              const response = await fetch('http://127.0.0.1:5000/room', {
                  method: 'POST',
  credentials: 'include',
                  headers: {
                      'Content-Type': 'application/json',
                  },
              });
              if (!response.ok) {
                  throw new Error('Failed to fetch room');
              }
              const data = await response.json();
              setUserRoom(data.message);
          } catch (error) {
              console.error('Error:', error);
              setError(error.message);
          }
      };
  
      useEffect(() => {
          fetchName();
          fetchTime();
          fetchRoom();
      }, []);
  
      if (error) {
          return <div>Error: {error}</div>;
      } 
      else {
          return (
              <div>
                  <h1>Hello, {userName}</h1>
                  <p>Your room draw time is: {userTime}</p>
                  <p>{userRoom ? `You have selected room: ${userRoom}` : "You haven't selected a room yet."}</p>
              </div>
          );
      }
  }
  
  export default AccountDetails;