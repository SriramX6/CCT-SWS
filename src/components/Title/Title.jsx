import pic from "../../assets/pic.jfif"
import React from 'react'
import './Title.css'

const Title = () => {
  return (
    <div className="titlebar">
            <img src={pic} alt="Logo Left" className="logo" />
            <h1 className="title roboto-medium ">SMART WEIGHING SYSTEM</h1>
            <img src={pic} alt="Logo Right" className="logo" />
    </div>
  )
}

export default Title