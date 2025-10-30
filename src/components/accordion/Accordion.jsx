import React, { useRef, useState } from 'react'
import "./Accordion.css"


const Accordion = () => {

  
  const accordionData = [
    {
      id: "acc-btn-1",
      title: "Which Plan Is Right For Me?",
      content: "With any financial product that you buy, it is important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the phone."
    },
    {
      id: "acc-btn-2",
      title: "How Do I Get Started?",
      content: "Getting started is easy. Simply sign up and follow the instructions to set up your account."
    },
    {
      id: "acc-btn-3",
      title: "What Are The Benefits?",
      content: "Our services offer a range of benefits including 24/7 support, competitive rates, and a user-friendly interface."
    }
  ];






 const [mode,setMode] = useState(false)
const panelButton = useRef(null)
const panel = useRef([])


const handleClick = () => {
  

    
}

  return (
     <div className='accordion' >  
      {accordionData.map((item,index) => {
         return (
           
              <div className='accordion-first' key={index} ref={panel} >
            <button
          id={item.id}
          type="button"
          onClick={handleClick}
          className={`accordion-btn ${mode ? "active" : ""}`}
          aria-expanded={mode}
          aria-controls="acc-panel"
        >
            {item.title}
        </button>
            <div  id='acc-panel' className={`panel ${mode ? "active" : ""}`}>
                <p>
                  {item.content}
                </p>
            </div>
               
        </div>
         )
      }) }

   

     </div>
  )
}

export default Accordion