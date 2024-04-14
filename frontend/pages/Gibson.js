'use client';
import React from 'react';
import { useState  , useEffect} from 'react';
import '../styles/gibson.css';


const Gibson = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState("");
    const [data, setData] = useState([]);

    const roomCoords = {
        "Gibson 418" : '40,100, 600, 200',
        "Gibson 419" : '144,0, 288, 100',
        "Gibson 420" : '288,0, 432, 100',
        "Gibson 421" : '432,0, 576, 100',
        // Add more rooms as needed
      };

    useEffect(() => {
        areas.forEach(area => {
          fetch('http://127.0.0.1:5000/checkroom', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ room: area.room }),
          })
            .then(response => response.json())
            .then(data => setRoomStatus(prevStatus => ({ ...prevStatus, [area.room]: data.message })));
        });
      }, []);
    
    function togglePopup(content) {
        setPopupContent(content);
        setShowPopup(!showPopup);
    }

    function determineColor(room) {
        const status = roomStatus[room];
        if (status === 'You have claimed this room') {
          return 'blue';
        } else if (status.includes('has claimed this room')) {
          return 'red';
        } else {
          return 'green';
        }
      }

    const areas = data.map(item => ({
        coords: item.coords,
        alt: item.alt,
        content: item.content,
        color: determineColor(item),  // determineColor is a function that returns a color based on the item
      }));

    

    // const areas = [
    //     {
    //         coords: "40,100, 600, 200",
    //         alt: "Gibson 418",
    //         content: "Gibson 418\nModel details"
    //     },
    //     {
    //         coords: "144,0, 288, 100",
    //         alt: "Gibson 419",
    //         content: "Gibson 419\nModel details"
    //     },
    //     {
    //         coords: "288,0, 432, 100",
    //         alt: "Gibson 420",
    //         content: "Gibson 420\nModel details"
    //     },
    //     {
    //         coords: "432,0, 576, 100",
    //         alt: "Gibson 421",
    //         content: "Gibson 421\nModel details"
    //     }
    // ]

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
                        height: `${coords[3] - coords[1]}px`
                    };
                    return (
                        <div
                            key={index}
                            className="overlay"
                            style={style}
                            onClick={() => togglePopup(area.content)}
                        />
                    );
                })}
            </div>
            {showPopup && (
                <div className="gibson-popup">
                    {popupContent.split('\n').map((line, index) => (
                        <div key = {index}>{line}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Gibson;
