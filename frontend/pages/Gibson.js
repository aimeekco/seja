import React from 'react';
import gibson from '../images/gibson.png';

const Gibson = () => {
    return (
        <div>
        <img>
            src= "gibson.png"
            alt="usemap" 
            usemap="#gfg_map"
            style={{width: 400, height: 400}}
        </img>
        <map name="gfg_map">
            <area shape = "rect"
            coords = "0,0, 144, 100"
            alt = "Gibson 418"
            
            />
        </map>
        </div>
    );
    }