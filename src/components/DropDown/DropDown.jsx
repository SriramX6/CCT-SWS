// src/Dropdown.js
import React, { useState } from 'react';
import './Dropdown.css'; // Import the CSS for styling

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']; // List of options

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowOptions(false); // Hide the dropdown after selection
    };

    const removeSelectedOption = () => {
        setSelectedOption(''); // Clear the selected option
    };

    return (
        <>
        <div className='flex'>
        <div className="dropdown-container">
        {/* <label htmlFor="number-input" className='ward' > Ward  </label> */}
           
            <div
                className={`dropdown-display ${selectedOption ? 'selected' : ''}`}
                onClick={() => setShowOptions(!showOptions)}
            >
                {selectedOption ? (
                    <>
                        <span>{selectedOption}</span>
                        <button className="remove-btn" onClick={removeSelectedOption}>X</button>
                    </>
                ) : (
                    <span>Select an option</span>
                )}
                 {/* The "V" for the dropdown arrow */}
                 <span className="dropdown-arrow">▼</span>
            </div>

            {showOptions && (
                <ul className="dropdown-options">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="dropdown-option"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </div>
        </>
    );
};

export default Dropdown;
