import React, { useEffect, useRef, useState } from "react";
import "./Services.css";
import { useFetcher } from "react-router-dom";

const ServicesSectors = () => {
  const counteTrashPoint = useRef();
  const counter = useRef(0);
  const [lock,setLocked] = useState(false)

  useEffect(() => {
    const cardObserve = new IntersectionObserver((entries) => {
       entries.forEach((entry) => {
         setLocked(true)
        
            if(entry.isIntersecting){
                const  main = counteTrashPoint.current
                 if(!main) return
                 const cards = main.querySelectorAll(".sectors ")
                 cards.forEach((card) => {
                    let target = parseInt(card.dataset.target)
                    let el = card.querySelector(".counter")
                    Inc(el,target)
                 })

            
                 
            }
       },{ threshold: 0.3 })
    })
 
  if(counteTrashPoint.current){
    cardObserve.observe(counteTrashPoint.current)
  }

  return () =>{
    cardObserve.disconnect()
  }



      },[])

        const Inc = (el, target,duration=2000) => {
    let start = 0
    let increment = Math.round(target / (duration / 16))
    let ix = setInterval(() => {
      start += increment;
      if (start >= target) {
          start = target
        return clearInterval(ix);
      } 
          el.textContent = ` +${start}`;
    },16);
  };

  return (
    <div className="row flex-column" ref={counteTrashPoint}>
      <div className="col mb-3">
        <div className="row ">
          <div className="sectors col-4" data-target="150">
            <span ref={counter} className="counter">
              0
            </span>
            <h4>Medical Facilities</h4>
          </div>
          <div className="sectors col-4" data-target="250">
            <span ref={counter} className="counter">
              0
            </span>
            <h4>Educational Institutions</h4>
          </div>
          <div className="sectors col-4" data-target="800">
            <span ref={counter} className="counter">
              0
            </span>
            <h4>Corporate Offices</h4>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="sectors col-4" data-target="2550">
            <span ref={counter} className="counter">
              0
            </span>
            <h4>Hospitality</h4>
          </div>
          <div className="sectors col-4" data-target="350">
            <span ref={counter} className="counter">
              0
            </span>
            <h4>Industrial Facilities</h4>
          </div>
          <div className="sectors col-4" data-target="5550">
            <span ref={counter} className="counter">
              0
            </span>
            <h4>Retail stores</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSectors;
