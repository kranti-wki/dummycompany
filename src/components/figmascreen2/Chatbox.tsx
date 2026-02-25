import React from 'react'
import "./Chatbox.css"
import vector from "../../assets/figmaimages/Vector.png"
import smile from "../../assets/figmaimages/smile (1).png"
import send from "../../assets/figmaimages/send.png"
const Chatbox:React.FC = () => {
  return (
    <>
    

     <div className='chatboxsection'>
        <div className='emojicontainer'>
         <div className='chatemoje'>
            <img src={vector} alt="" />
            <img src={smile} alt=""  />
        </div>
        <div className='textinput'>
            <input type="text" placeholder='Type message' />
        </div>
        </div>
        <div className='sendbutton'>
            <button><img src={send} alt="" /></button>
        </div>
     </div>
     

    </>
  )
}

export default Chatbox