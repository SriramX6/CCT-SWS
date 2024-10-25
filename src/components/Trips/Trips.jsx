import React from 'react'
import  { useState } from 'react';
import pic from "../../assets/pic.jfif"
import "./Trips.css"
import BelowTrip3 from '../BelowTrip3/BelowTrip3';


const Trips = () => {

    
    const [selectedOption, setSelectedOption] = useState('');
    const [showOptions, setShowOptions] = useState({
        "trip1" : false,
        "trip2" : false,
        "trip3" : false
    });


    const toggleTrip = (selectedTrip) => {
        setShowOptions((prevState) => {
            const updatedState = {};
            Object.keys(prevState).forEach(trip => {
                updatedState[trip] = trip === selectedTrip ? !prevState[trip] : prevState[trip] ;
            });
            return updatedState;
        });
    };

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']; // List of options

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowOptions(false); // Hide the dropdown after selection
    };

    const removeSelectedOption = () => {
        setSelectedOption(''); // Clear the selected option
    };

    const qns  = ["Waste Type" , "Waste Category", "Street Covered" , "Total Weight"  ]


    // this trip function contains all the trip related code blocks

  return (
    <div className='trip-container' >
        <h4 className='roboto-regular' style={{marginLeft:"5%" , color : "#08A99A"  }}>
           Trips 
        </h4>
          <div className="dropdown-container" style={{marginLeft:"5%" , width  :"95%" , marginTop : "0"}}>
        {/* <label htmlFor="number-input" className='ward' > Ward  </label> */}
           
            <div
                className={`dropdown-display-trips ${selectedOption ? 'selected' : ''}`}
                onClick={() => toggleTrip("trip1") }
            >
                {selectedOption ? (
                    <>
                        <span>{selectedOption}</span>
                        <button className="remove-btn" onClick={removeSelectedOption}>X</button>
                    </>
                ) : (
                    <span>Trip 1</span>
                )}
                 {/* The "V" for the dropdown arrow */}
                 <span className="dropdown-arrow">
                 {showOptions.trip1 ? '▲' : '▼'} 
                 </span>
            </div>
             
             {showOptions.trip1 && qns.map((ind, val) => (
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

        {/* trip 2 starting */}

        <div className="dropdown-container" style={{marginLeft:"5%" , width  :"95%" , marginTop : "0"}}>
        {/* <label htmlFor="number-input" className='ward' > Ward  </label> */}
           
            <div
                className={`dropdown-display-trips ${selectedOption ? 'selected' : ''}`}
                onClick={() => toggleTrip("trip2") }
            >
                {selectedOption ? (
                    <>
                        <span>{selectedOption}</span>
                        <button className="remove-btn" onClick={removeSelectedOption}>X</button>
                    </>
                ) : (
                    <span>Trip 2</span>
                )}
                 {/* The "V" for the dropdown arrow */}
                 <span className="dropdown-arrow">
                 {showOptions.trip2 ? '▲' : '▼'} 
                 </span>
            </div>
             
             {showOptions.trip2 && qns.map((ind, val) => (
        <div key={val}>
            <li className='list-trips'>
                <div className="li-content">
                    <span className="left-content">{ind}</span>
                    <span className="right-content">{val}</span>
                </div>
            </li>
        </div>
    ))}

{/* this container for trip 3 alone */}
   

    <div className='trip3-container'>
    <div className='header-container-trip3'>
        <span className='trip-3'>Trip 3</span>
        <span className='image-title-trip3'>Image Title</span>
    </div>
    <div className='flex-trip3'>
        <div className='capture-weight-btn'>Capture Weight</div>
        <div className='image-container-trip3'>
           
            <img className='right-side-images' src={pic} />
            <img className='right-side-images' src={pic} />
            <img className='right-side-images' src={pic} />
            <img className='right-side-images' src={pic} />
        </div>
    </div>
</div>
 
        </div>

        <BelowTrip3/>
       <BelowTrip3/>
        <div style={{marginLeft : "40%" , height : "9rem"}} >
        <div className='save-btn'>Save</div>
        </div>


    </div>
  )
}

export default Trips