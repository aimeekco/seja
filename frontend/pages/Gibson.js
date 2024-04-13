import React from 'react';
import gibson from '../images/gibson.png';
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
=======
function handleSubmit() {
    const navigate = useNavigate();
    navigate('/form');
}


>>>>>>> 74368463911e2b103ac1b4aa14a0c33e1d4786ca
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
            onClick = {handleSubmit}
            />
<<<<<<< HEAD
=======
            <area shape = "rect"
            coords = "144,0, 288, 100"
            alt = "Gibson 419"
            onClick = {handleSubmit}
            />
            <area shape = "rect"
            coords = "288,0, 432, 100"
            alt = "Gibson 420"
            onClick = {handleSubmit}
            />
            <area shape = "rect"
            coords = "432,0, 576, 100"
            alt = "Gibson 421"
            onClick = {handleSubmit}
            />
>>>>>>> 74368463911e2b103ac1b4aa14a0c33e1d4786ca
        </map>
        </div>
    );
}
