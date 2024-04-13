//import React from 'react';
import ImgMapper from 'react-img-mapper';
import { useRouter } from 'next/router';

export default function Pomona() {
  const router = useRouter();
  const map = {
    name: "my-map",
    areas: [
      { 
        name: "Area 1", 
        shape: "rect", 
        coords: [0,0,100,100], 
        onClick: () => router.push('/Gibson') 
      },
      { 
        name: "Area 2", 
        shape: "rect", 
        coords: [100,100,200,200], 
        onClick: () => router.push('/page2') 
      },
      // Add more areas as needed
    ]
  };
  const pomonaImage = '/pomonamap.jpeg';

  return (
    <div>
      <ImgMapper src={pomonaImage} map={map} />
    </div>
  );
}