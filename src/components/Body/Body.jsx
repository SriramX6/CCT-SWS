// src/Body.js
import React, { useState } from 'react';
import './Body.css'
import Dropdown from '../DropDown/DropDown';
import Trips from '../Trips/Trips';
import BelowTrip3 from '../BelowTrip3/BelowTrip3';
import { useMyContext } from '../../contextAPI/ContextAPI';

const Body = () => {
    const [number, setNumber] = useState('');

    const {startMachine} = useMyContext()

    const handleInputChange = (event) => {
        setNumber(event.target.value);
    };

    const qns  = ["Vehicle No" , "Vehicle Type", "Sanitary Inspectors" , "Total No.of Trips" , "Total No.of Streets" , "Total Weight" ]

    return (

       <>
        <div className='main-container'>
         { startMachine && <React.Fragment>

        <div className="body-container">

             {/* this is for accepting input */}
            <label className='V-no' htmlFor="number-input">Vehicle Number:</label>
            <input
                className='input'
                type="text"
                id="number-input"
                value={number}
                onChange={handleInputChange}
                placeholder="Enter vehicle number"
            />
            {/* <p>You entered: {number}</p> */}

            <div style={{display : "flex" , flexWrap : "wrap" , gap:"5%", padding : "5%"  }}>
            <div className='space-between' >
            <label htmlFor="number-input" className='lable' > Ward  </label>
            <Dropdown/>
            </div>

            <div className='space-between' >
            <label htmlFor="number-input" className='lable' > Street Covered  </label>
            <Dropdown/>
            </div>

            <div className='space-between' >
            <label htmlFor="number-input" className='lable' > Designated Locations  </label>
            <Dropdown/>
            </div>

            <div className='space-between' >
            <label htmlFor="number-input" className='lable' > Work Nature  </label>
            <Dropdown/>
            </div>
            </div>

        </div>

        <div className="body-container2">
        <div className="list-trips"> Trips </div>
    {qns.map((ind, val) => (
        <div key={val}>
            <li className='list-trips'>
                <div className="li-content">
                    <span className="left-content">{ind}</span>
                    <span className="right-content">{val}</span>
                </div>
            </li>
        </div>
    ))}
</div>
        </React.Fragment>}
        

        </div>

       { startMachine &&  <Trips/>}
        
        </>
        
        
    );
};

export default Body;
