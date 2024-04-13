import React from 'react';
import ImgMapper from 'react-img-mapper';
import pomonaImage from '/pomonamap.jpeg';

export default function Pomona() {
  const map = {
    name: "my-map",
    areas: [
      { name: "Area 1", shape: "rect", coords: [0,0,100,100], href: "/page1" },
      { name: "Area 2", shape: "rect", coords: [100,100,200,200], href: "/page2" },
      // Add more areas as needed
    ]
  };

  return (
    <div>
      <ImgMapper src={pomonaImage} map={map} />
    </div>
  );
}