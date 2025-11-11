import React, { useRef, useState } from 'react'
import "./Accordion.css"


const Accordion = ({data}) => {

 const [mode,setMode] = useState(null)

   const toggle = (i) => {
      setMode((a) => a === i ? null :i)
   }





  return (
     <div className='accordion' >  
      {data.map((item,i) => {
          const isOpen = mode === i
         
            
         return (
           <div className='' key={i}> 
              <div className='accordion-first'   >
            <button
          id={item.id}
          type="button"
          onClick={() => toggle(i)}
          className={` accordion-btn ${isOpen ? "active" : null}`}
          
        
        
       
        >
            {item.title}
        </button>
            <div  className= {`acc-panel ${isOpen ? "active" : null}`} >
                <p>
                  {item.content}
                </p>
            </div>
        </div>
        
               
        </div>
         )
      }) }

   

     </div>
  )
}

export default Accordion