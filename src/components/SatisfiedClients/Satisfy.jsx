import React, { useEffect, useRef, useState } from "react";
import img from "../../../public/images/Satisfy/1.png";
import profile from "../../../public/images/Satisfy/profile.jpg";
import "./Satisfy.css"

const data = [
  "They will be at top of my list the next time I need a housecleaning. I was extremely pleased with the service I received. It was easy efficient to set up the cleaning, the price was fair and up front, and the cleaning team did a top-notch job.",
  "They will be at top of my list the next time I need a housecleaning. I was extremely pleased with the service I received. It was easy efficient to set up the cleaning, the price was fair and up front, and the cleaning team did a top-notch job.",
  "They will be at top of my list the next time I need a housecleaning. I was extremely pleased with the service I received. It was easy efficient to set up the cleaning, the price was fair and up front, and the cleaning team did a top-notch job.",
];

const Satisfy = () => {
  const sat = useRef(null);
  const [count, setCount] = useState(0);
  const total = data.length;
  let startX = 0
  let scrollStart = 0

  useEffect(() => {
    if (sat.current) {
      sat.current.style.transform = `translateX(-${count * 100}%)`;
    }
  }, [count, total]);

  const next = () => {
    setCount((p) => (p + 1) % total);
  };

  const prev = () => {
    setCount((p) => (p - 1 + total) % total);
  };



  const pointerDown = (e) => {
    e.preventdefault()
    startX = e.pageX
    scrollStart = e.scrollLeft
  }

   const pointerMove = () => {
    
  }

   const pointerUp = () => {
    
  }




  return (
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-5">
          <img  src={img} className="img-fluid" alt="satisfied-client" />
        </div>
        <div className="col-7">
          <h3>Satisfied Users Over The Globe</h3>
          <div className="overflow-hidden">
            <div
              ref={sat}
              className="satisfiy-text d-flex "
              style={{ transition: "transform 0.3s ease" }}
            >
              {data.map((item, i) => {
                return (
                  <p
                    className="satisfy-text"
                    style={{ flex: "0 0 100%" }}
                    key={i}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="d-flex justify-content-between gap-2">
            <div className="d-flex">
              <div className="d-flex flex-row gap-2 ">
                <div  className={`thumb-img ${count >= 2 && "active " }`} onClick={ne}>
                  <img src={profile} alt="profile"   />
                </div>
                <div className="d-flex flex-column">
                  <span>John Smith</span>
                  <span>Eco Systems</span>
                </div>
              </div>
              <div className="d-flex gap-2">
                <div className={`thumb-img2 ${count <= 0 && "active"}`}>
                  <img src={profile} alt="profile" />
                </div>
                <div className="d-flex flex-column">
                  <span>John Smith</span>
                  <span>Eco Systems</span>
                </div>
              </div>
            </div>
            <div className="d-inline-flex">
              <button onClick={() => prev()}>prev</button>
              <button onClick={() => next()}>next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Satisfy;
