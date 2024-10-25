import React from 'react'
import Dropdown from '../DropDown/DropDown'
import { useState } from 'react';
import "./BelowTrip3.css"
import pic from "../../assets/pic.jfif"

const BelowTrip3 = () => {


    const [number, setNumber] = useState('');

    const handleInputChange = (event) => {
        setNumber(event.target.value);
    };

    const qns  = ["Vehicle No" , "Vehicle Type", "Sanitary Inspectors" , "Total No.of Trips" , "Total No.of Streets" , "Total Weight" ]



  return (
    <>
    {/* this container has 3 divisions 1 - input section 2 - edit section 3 - image section */}
<div className="body-container-below-trip">


{/* <p>You entered: {number}</p> */}


<div className='input-section-below-trip3' >
<div className='space-between' >
<label htmlFor="number-input" className='lable' > Waste Category  </label>
<Dropdown/>
</div>

<div className='space-between' >
<label htmlFor="number-input" className='lable' > Waste Type  </label>
<Dropdown/>
</div>

<div className='space-between' >
<label htmlFor="number-input" className='lable' > Weight Kg  </label>
<Dropdown/>
</div>

</div>

{/* edit section started */}

<div className='edit-section-below-trip3' >
<img src={pic} alt='delete_icon' />
<img src={pic} alt='up_icon' />
<img src={pic} alt='view_icon' />
</div>

{/* image section started */}
<div className='image-section-below-trip3' >
    <img src={pic} />
</div>

</div>
    </>
  )
}

export default BelowTrip3