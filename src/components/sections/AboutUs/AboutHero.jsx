import React from 'react'
import bgImage from "./aboutImages/9.jpg"
import "./about.css"

const AboutHero = () => {
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
        backgroundColor: "rgba(0, 0, 0, 0.35)",
        zIndex: 1,
      }}></div>

      <div className="container" style={{zIndex:2}}>
        <div className="row">
          <div className="col-12 col-md-7">
            <div className="About-content">

              <div className="About-title mb-4">
                <h1 className="">Professional Cleaning Services Tailored to Your Space</h1>
                <p className='fs-5 fw-lighter' style={{lineHeight:"1.8"}}>
                  Discover a new standard of cleanliness with our fully customized cleaning solutions. Whether it's your
                  home, office, or commercial environment, our trained specialists deliver thorough, consistent, and
                  quality-driven cleaning that creates healthier spaces and long-lasting comfort.
                </p>
              </div>

              <div className="mt-4">
                <button className="btn btn-primary  fw-semibold">
                 Reguest and Estimate
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero;