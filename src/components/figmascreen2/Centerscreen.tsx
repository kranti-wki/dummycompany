import React from 'react'
import "./CenterScreen.css"
import centerimg  from "../../assets/figmaimages/Frame (1).png"

const Centerscreen:React.FC = () => {
  return (
    <>
    <div className='center-screen-container'>
      <div className='center-screen'>
        <div className='centerimg'>
            <img src={centerimg} alt="" />
        </div>
        <div className='centertxt'>
            <h1>Welcome to global chat</h1>
            <p>This is the start of the #global chat channel.</p>
        </div>
     </div>
    </div>
     
    </>
  )
}

export default Centerscreen