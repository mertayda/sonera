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
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <div className="ourServices-content">
              <div className="ourServices-title">
                <h1>Custom Cleaning Plans For A Clean Environment</h1>
                <p>
                  Our cleaning experts deliver the highest quality of clean you
                  can always count, let us help you with all of your cleaning
                  and disinfecting responsibilities now.
                </p>
              </div>
              <div className="ourServices-info">
                <button className="btn btn-primary">
                  Request And Estimate
                </button>
                <ul className="d-inline-flex list-unstyled">
                  <li> <ShieldCheck size={45}/></li>
                  <li>  <Bubbles size={45}/></li>
                  <li> <HeartHandshake size={45}/>  </li>
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