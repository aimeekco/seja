'use client';
import React from 'react';
// import ImgMapper from 'react-img-mapper';
import { useRouter} from 'next/router';
import { useState } from 'react';
import '../styles/pomonamap.css';

const Pomona = () => {
    const router = useRouter();
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState("");
    function togglePopup(content) {
        setPopupContent(content);
        setShowPopup(!showPopup);
    }

    return (
      <div className="image-container">
        <img
          src="pomonamap.png"
          alt="Pomona"
          useMap="#gfg_map"
          style={{ width: "750px", height: "auto" }}
        />
        <div className="overlay" onClick={() => router.push('/Gibson')} />
          {showPopup && (
            <div className="pomona-popup">
              {popupContent.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
              ))}
          </div>
        )}
      </div>
  );
}
export default Pomona;