import React from 'react'
import { ShieldCheck,Bubbles,HeartHandshake } from 'lucide-react';
import bgImage from "./serviceImage/1.png"
import "./Services.css"

const HeroServices = () => {
   

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
            <div className="ourServices-content">
              <div className="ourServices-title">
                <h1 >Custom Cleaning Plans For A Clean Environment</h1>
                <p className='fs-5 fw-lighter'>
                  Our cleaning experts deliver the highest quality of clean you
                  can always count, let us help you with all of your cleaning
                  and disinfecting responsibilities now.
                </p>
              </div>
              <div className="ourServices-info">
                <button className="btn btn-primary">
                  Request And Estimate
                </button>
                <ul className="d-inline-flex list-unstyled gap-2">
                  <li> <ShieldCheck size={50}/></li>
                  <li>  <Bubbles size={50}/></li>
                  <li> <HeartHandshake size={50}/>  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
       
       
      </div>
    </section>
  );
}

export default HeroServices