'use client';
import React from 'react';
import { useState } from 'react';
import '../styles/gibson.css'


const Gibson = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState("");
    function togglePopup(content) {
        setPopupContent(content);
        setShowPopup(!showPopup);
    }

    return (
        <div>
        <img>
            src= "gibson.png"
            alt="Gibson" 
            usemap="#gfg_map"
            style={{width: 400, height: 400}}
        </img>
        <map name="gfg_map">
            <area shape = "rect"
            coords = "0,0, 144, 100"
            alt = "Gibson 418"
            onClick = {popup}
            />
            <area shape = "rect"
            coords = "144,0, 288, 100"
            alt = "Gibson 419"
            onClick = {popup}
            />
            <area shape = "rect"
            coords = "288,0, 432, 100"
            alt = "Gibson 420"
            onClick = {popup}
            />
            <area shape = "rect"
            coords = "432,0, 576, 100"
            alt = "Gibson 421"
            onClick = {popup}
            />
        </map>
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
