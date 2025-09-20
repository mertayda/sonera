import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import { WholeWord } from "lucide-react";

const Carousel = ({ item }) => {
  const total = item.length;


  const duplicateCards = [...item, ...item, ...item]




  const [index,setIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
 




  let startX = useRef(0)
  let sLeft = useRef(0)
  let isAuto = useRef(null)
  let wholeRef = useRef(null)
  let firstChildWidth = useRef(null)



const dragStart = (e) =>{
    setIsDragging(true)
    startX.current = e.pageX
    sLeft.current = wholeRef.current.scrollLeft
}

const dragging = (e) =>{
     e.preventDefault();
  if(!isDragging) return
  const walkWithMe = e.pageX - startX.current
    wholeRef.current.scrollLeft = sLeft.current - walkWithMe
  
}

const dragEnd = () => {
       setIsDragging(false)
}


  return (
    <div className="row  position-relative">
      <div
        className="carousel-card-container"
        onMouseDown={dragStart}
        onMouseMove={dragging}
        onMouseUp={dragEnd}
        ref={wholeRef}
      >
        {duplicateCards.map((li, i) => {
          let Icon = li.icon;
          return (
            <div
              className="carousel-card"
              key={i}
              ref={i === 0 ?  firstChildWidth : null}
            >
              <div className="carousel-counter">{li.id}</div>
              <div className="carousel-icon mb-3">
                {" "}
                <Icon style={{ color: "#FFFFFF" }} size={40}></Icon>
              </div>
              <h4 className="carousel-title">{li.title}</h4>
              <p className="carousel-text">{li.description}</p>
              <button className="carousel-btn">{li.linkText}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;