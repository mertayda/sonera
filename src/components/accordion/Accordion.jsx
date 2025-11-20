import React, { useEffect, useRef, useState } from "react";
import "./Accordion.css";
import { Dice1 } from "lucide-react";

const Accordion = ({ data }) => {
const [open,setOpen] = useState(null)
 const panel = useRef([])
 const inner = useRef([])

 const toggle = (i) => {
    setOpen((p) => p === i ? null : i )
 }



useEffect(() => {
   panel.current.forEach((a,index) => {

      const el = inner.current[index]
        if(open === index){
         
        a.style.maxHeight = `${el.scrollHeight  + 5}`  + "px"
        } else {
            a.style.maxHeight = "0"
        }
   })
},[open])


  return (
   
    <div className="row accordion">
      {data.map((item, i) => {
          const x = i

        return (
          <div className="col-12 col-md-6" key={i}>
            <div className="accordion-first">
              <button 
               
                id={item.id}
                type="button"
                onClick={() => toggle(i)}
              className={`accordion-btn ${open === i ? "active" : ""}`}
              
              >
                {item.title}
              </button>
              <div className={`acc-panel ${open === i  ? "active" : ""}`} ref={it => panel.current[i] = it}>
                <p  ref={it => (inner.current[i] = it) }>{item.p}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
   
  );
};

export default Accordion;
