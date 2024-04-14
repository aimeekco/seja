'use client';
import '../styles/gibson.css';
import React, { useState, useEffect} from 'react'; // Add this line


const Gibson = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState("");
    const [data, setData] = useState([]);
    const [roomStatus, setRoomStatus] = useState({});
const [clickedRoom, setClickedRoom] = useState(null);



    const roomCoords = {
    "Gibson 418": '-40,10, 66, 84',
    "Gibson 419": '67,10, 172, 84',
    "Gibson 420": '174,10, 278, 84',
    "Gibson 421": '280,10, 384, 84',
    "Gibson 417": '-40,84, 23, 160',
    "Gibson 415": '-40,161, 23, 240',
    "Gibson 412": '-40,286, 23, 372',
    "Gibson 416": '53,172, 172, 240',
    "Gibson 403": '172,172, 289, 240',
    "Gibson 414": '53,266, 125, 364',
    "Gibson 413": '53,364, 125, 463',
    "Gibson 411": '125,398, 185, 463',
    "Gibson 410": '23,493, 162, 552',
    "Gibson 409": '238,493, 321, 580',
    "Gibson 408": '186,398, 289, 463',
    "Gibson 407": '322,338, 384, 413',
    "Gibson 406": '215,298, 289, 398',
    "Gibson 405": '215,240, 289, 298',
    "Gibson 404": '322,220, 384, 337',
    "Gibson 402": '362,115, 433, 219',
    "Gibson 401": '434,115, 502, 219',
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
          .then(data => {
            setRoomStatus(prevStatus => {
              const updatedStatus = { ...prevStatus, [area.room]: data.message };
              return updatedStatus;
          });
        })
        .catch(error => {
          console.error('Error fetching room status:', error);
          setRoomStatus(prevStatus => ({ ...prevStatus, [area.room]: 'Error fetching room status' }));
        });
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

    const handleClick = (room) => {
      fetch('http://127.0.0.1:5000/assign', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ room: room }),
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
                        onClick={() => {
                            handleClick(room);
                            setClickedRoom(room);
                        }} // Add this line

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