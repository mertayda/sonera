import React, { useEffect, useRef, useState } from "react";
import img from "../../../../public/images/Satisfy/1.png";
import profile from "../../../../public/images/Satisfy/profile.jpg";
import "./Price.css"

const data = [
  "They will be at top of my list the next time I need a housecleaning. I was extremely pleased with the service I received. It was easy efficient to set up the cleaning, the price was fair and up front, and the cleaning team did a top-notch job.",
  "They will be at top of my list the next time I need a housecleaning. I was extremely pleased with the service I received. It was easy efficient to set up the cleaning, the price was fair and up front, and the cleaning team did a top-notch job.",
  "They will be at top of my list the next time I need a housecleaning. I was extremely pleased with the service I received. It was easy efficient to set up the cleaning, the price was fair and up front, and the cleaning team did a top-notch job.",
];

const Satisfy = () => {
  const sat = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [tranfer,setTransfer] = useState(0)
  const [xle,setXle] = useState(0)
  
  
  const startX = useRef(0)
  const slideWith = useRef(0)
  const total = data.length




 const next = () => {
    setCurrentIndex((p) => (p + 1) % total)
 }


 const prev = () => {
    setCurrentIndex((p) => (p  - 1 + total) % total)
 }


useEffect(() => {
      const update = () => {
           if(sat.current && sat.current.parentElement){
                slideWith.current = sat.current.parentElement.offsetWidth;
          setXle(-currentIndex * slideWith.current)
        
      }
      }
        update()
      window.addEventListener("resize",update)

      return () => window.removeEventListener("resize",update)
},[])



  useEffect(() => {
    if (!slideWith.current) return;
    const base = -currentIndex * slideWith.current;
    setXle(base + tranfer);
  }, [currentIndex, tranfer]);


  

const pointerDown = (e) => {
  e.preventDefault()
  startX.current= e.clientX 
  setIsDragging(true)
  setTransfer(0)
  sat.current.classList.add("active")

 

}



const pointerMove = (e) => {
  if(!isDragging) return
  const diff = e.pageX  - startX.current
  setTransfer(diff)

 
}

const pointerUp = (e) => {
         if(!isDragging) return
    if(tranfer < -50 && currentIndex < total - 1){
       setCurrentIndex((p) => p + 1)
    } else if (tranfer > 50 &&  currentIndex > 0){
         setCurrentIndex((p) => p - 1)
    }
          setTransfer(0)
      sat.current.classList.remove("active")
      setIsDragging(false)
    
}





  return (
    <section className="Satisfy">
               <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-5">
          <img  src={img} className="img-fluid" alt="satisfied-client" />
        </div>
        <div className="col-7" onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerUp} onPointerLeave={pointerUp}>
          <h3 className="satisfy-title">Satisfied Users Over The Globe</h3>
          <div className="overflow-hidden mb-4">
            <div
              ref={sat}
              className="satisfiy-text d-flex "
              style={{ transform: `translateX(${xle}px)`,
                transition: isDragging ? "none" : "transform 0.3s ease" }}
            >
              {data.map((item, i) => {
                return (
                  <p
                    className="satisfy-text-content"
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
                <div  className={`thumb-img ${currentIndex >= 2 && "active " }`}>
                  <img src={profile} alt="profile"   />
                </div>
                <div className="d-flex flex-column">
                  <span>John Smith</span>
                  <span>Eco Systems</span>
                </div>
              </div>
              <div className="d-flex gap-2">
                <div className={`thumb-img2 ${currentIndex <= 0 && "active"}`}>
                  <img src={profile} alt="profile" />
                </div>
                <div className="d-flex flex-column">
                  <span>John Smith</span>
                  <span>Eco Systems</span>
                </div>
              </div>
            </div>
            <div className="d-inline-flex gap-2">
              <button className="btn btn-success align-self-start"  onClick={() => prev()}>Prev</button>
              <button className="btn btn-success align-self-start" onClick={() => next()}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
       </section>
  
  );
};

export default Satisfy;
