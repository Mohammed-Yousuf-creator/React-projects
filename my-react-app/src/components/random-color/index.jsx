import React, { useState,useEffect } from "react";
import './styles.css';

export default function RandomColor() {
    const [typeofcolor, setTypeofcolor] = useState("hex");
    const [color, setColor] = useState("#000000");
    function RandomColorUtility(length) {
        return Math.floor(Math.random()*length)
    }
    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[RandomColorUtility(hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor);
    }
    function handleCreateRandomRgbColor() {
        const r = RandomColorUtility(256);
        const g = RandomColorUtility(256);
        const b = RandomColorUtility(256);
        setColor('rgb(' + r + ', ' + g + ', ' + b + ')');
        console.log(`rgb(${r}, ${g}, ${b})`);
    }
    useEffect(() => {if (typeofcolor === 'hex') {
        handleCreateRandomHexColor();
    } else {handleCreateRandomRgbColor();}}, [typeofcolor]);
    return ( 
    <div style={{
        height: "100%",
        width: "100%",
        backgroundColor: color,
    }}>
        <button onClick={()=>setTypeofcolor('hex')}>Create HEX color</button>
        <button onClick={()=>setTypeofcolor('rgb')}>Create RGB color</button>
        <button onClick={typeofcolor === 'hex' ? handleCreateRandomHexColor:handleCreateRandomRgbColor}>Generate Random Color</button>
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'#ffffff',
            fontSize:'3rem',
            marginTop:'50px',
            flexDirection:'column',
            gap:'20px'
        }}>
            <h3>{typeofcolor === 'hex' ? 'HEX COLOR':'RGB COLOR'}</h3>
            <h1>{color}</h1>
        </div>    
    </div>
    );
}