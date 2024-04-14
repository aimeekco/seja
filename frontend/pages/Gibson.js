'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { useState  , useEffect} from 'react';
import '../styles/gibson.css';


const Gibson = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState("");
    function togglePopup(content) {
        setPopupContent(content);
        setShowPopup(!showPopup);
    }

    const areas = [
        {
            coords: "40,100, 600, 200",
            alt: "Gibson 418",
            content: "Gibson 418\nModel details"
        },
        {
            coords: "144,0, 288, 100",
            alt: "Gibson 419",
            content: "Gibson 419\nModel details"
        },
        {
            coords: "288,0, 432, 100",
            alt: "Gibson 420",
            content: "Gibson 420\nModel details"
        },
        {
            coords: "432,0, 576, 100",
            alt: "Gibson 421",
            content: "Gibson 421\nModel details"
        }
    ]

    return (
        <div>
            <div className="image-container">
                <img 
                    src="gibson.png"
                    alt="Gibson" 
                    useMap="#gfg_map"
                    style={{width: 700}}
                />
                {areas.map((area, index) => {
  const coords = area.coords.split(',').map(Number);
  const style = {
    left: `${coords[0]}px`, 
    top: `${coords[1]}px`, 
    width: `${coords[2] - coords[0]}px`, 
    height: `${coords[3] - coords[1]}px`,
    backgroundColor: determineColor(area.room),
    position: 'relative', // Add this to position the status text inside the square
  };

  const handleClick = () => {
    fetch('http://127.0.0.1:5000/assign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ room: area.room }),
    })
    .then(response => response.json())
    .then(data => {
        console.log("clicked")
        fetchRoomStatus();

      // Update the color of the area based on the response
      // You'll need to replace this comment with the appropriate code for your application
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div
      key={index}
      className="overlay"
      style={style}
      onClick={handleClick}
    >
      <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
        {area.status || 'Loading...'}
      </div>
    </div>
  );
})}
            </div>
        </div>
    );
}

export default Gibson;
