import React, { useRef, useState } from 'react'
import "./Accordion.css"

 

const Accordion = () => {

 const [mode,setMode] = useState(false)
const panelButton = useRef(null)
const panel = useRef(null)

const handleClick = () => {
  const x = panel.current
   let twist = !mode
   setMode(!mode)
   
    twist ? x.style.maxHeight = `${x.scrollHeight}px` : x.style.maxHeight = "0px"
 


}

  return (
     <div className='accordion' >
        <div className='accordion-first' >
                <button
          id="acc-btn-1"
          type="button"
          onClick={handleClick}
          className={`accordion-btn ${open ? "active" : ""}`}
          aria-expanded={open}
          aria-controls="acc-panel-1"
        >
          Which Plan Is Right For Me?
        </button>
            <div ref={panel} className={`panel ${!mode ? "active" : ""}`}>
                <p>
                    With any financial product that you buy, it is important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or o
                </p>
            </div>
               
        </div>

     </div>
  )
}

export default Accordion