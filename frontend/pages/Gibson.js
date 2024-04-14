'use client';
import React from 'react';
import { useState  , useEffect} from 'react';
import '../styles/gibson.css';


const Gibson = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState("");
    const [data, setData] = useState([]);
    const [roomStatus, setRoomStatus] = useState({});

    const roomCoords = {
    "Gibson 418": '-40,10, 66, 84',
    "Gibson 419": '67,10, 172, 84',
    "Gibson 420": '174,10, 278, 84',
    "Gibson 421": '280,10, 384, 84',
        // Add more rooms as needed
      };

    const fetchRoomStatus = () => {
      areas.forEach(area => {
        fetch('http://127.0.0.1:5000/checkroom', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ room: area.room }),
        })
          .then(response => response.json())
          .then(data => setRoomStatus(prevStatus => 
              
              ({ ...prevStatus, [area.room]: data.message })))
          .catch(error => setRoomStatus(prevStatus => ({ ...prevStatus, [area.room]: 'Error fetching room status' })));
      });
    };
 
    useEffect(fetchRoomStatus, []);
    
    function togglePopup(content) {
        setPopupContent(content);
        setShowPopup(!showPopup);
    }

    function determineColor(room) {
        const status = roomStatus[room];
        if (status === 'You have claimed this room') {
          return 'overlay overlay-claimed';
        } else if (status && status.includes('has claimed this room')) {
          return 'overlay overlay-occupied';
        } else {
          return 'overlay overlay-available';
        }
      }

    const areas = Object.keys(roomCoords).map(room => ({
      room,
      coords: roomCoords[room],
      status: roomStatus[room],
    }));

    const handleClick = () => {
      fetch('http://127.0.0.1:5000/assign', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ room: area.room }),
      })
      .then(response => response.json())
      .then(data => {
          
          fetchRoomStatus();
          console.log(data)
        // Update the color of the area based on the response
        // You'll need to replace this comment with the appropriate code for your application
      })
      .catch(error => console.error('Error:', error));
    };


    return (
      <div className="whole-container">
        <div className="image-container">
            <img src="gibson.png" alt="Gibson" useMap="#gfg_map" style={{ width: 600 }} />
            {Object.keys(roomCoords).map((room, index) => {
                const coords = roomCoords[room].split(',').map(Number);
                return (
                    <div
                        key={index}
                        className={determineColor(roomStatus[room])}
                        style={{
                            left: `${coords[0]}px`, 
                            top: `${coords[1]}px`, 
                            width: `${coords[2] - coords[0]}px`, 
                            height: `${coords[3] - coords[1]}px`,
                            position: 'absolute'
                        }}
                    >
                        <span style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                            {roomStatus[room] || 'Loading...'}
                        </span>
                    </div>
                );
            })}
        </div>
      </div>
    );
  }

export default Gibson;