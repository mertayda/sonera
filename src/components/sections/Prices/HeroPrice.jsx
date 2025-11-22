import React from 'react'
import bgImage from "./PricesImages/5.jpg"
import "./Price.css"

const HeroPrice = () => {
  return (
     <section
      className="services d-flex align-items-center justify-content-center text-white position-relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "600px",
        position:"relative"
      }}
    >
      <div style={{
        position:"absolute",
           top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      zIndex: 1,

      }}></div>
      <div className="container" style={{zIndex:2}}>
        <div className="row">
          <div className="col-12 col-md-7">
         
                   <h1 className='price-title'>
                    our pricing
                </h1>
                <p className='price-text fs-5 fw-lighter'>Plans Meets Your Needs</p>
               
             
           
        
          </div>
        </div>
       
       
      </div>
    </section>
  )
}

export default HeroPrice