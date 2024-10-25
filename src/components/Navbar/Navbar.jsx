// src/Navbar.js
import React, { useState } from 'react';
import pic from "../../assets/pic.jfif"
import './Navbar.css'; // Import the CSS for styling
import { useMyContext } from '../../contextAPI/ContextAPI';

const Navbar = () => {

   const {    SetStartMachine  } = useMyContext()

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className='image-status  '>
                <img src={pic} alt='Wifi img' className="wifi_logo  " />
                <h1 className='cs-1 roboto-regular ' >Connection Status :</h1>
                </div>
                <div className="button-container">
                    <button className="nav-button-1" onClick={()=>SetStartMachine(true)} >Start Machine</button>
                    <button className="nav-button-2">Log Out</button>
                    {/* <button className="nav-button">Button 3</button> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
