import React from "react";
import signature from "../../../assets/images/signature.png";
import reservation from "../../../assets/images/reservation.jpg";
import "./About.css";
const About = () => {
  return (
    <section className="about-section p-5">
      <div className="container">
        <div className="row flex-column mb-5">
          <p className="col-12 fs-5  about-p fst-italic">We are Committed to Cleaning Excellence!</p>
          <h2 className="col-12 fs-1 w-75">
            Our Cleaning Experts Deliver The Clean You Can Count On
          </h2>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-4">
            <div className="d-flex flex-column align-items-start">
              <p className="fw-lighter lh-">
                With more than 35 years getting to know every kind of client,
                from homeowners to managers to healthcare decision-makers. Our
                relentless passion for service means we continuously invest in
                improving our processes. Sanera is a leading provider of
                cleaning services in both the residential and commercial
                markets, operating through an network.
              </p>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <button className="btn btn-primary w-auto align-self-start">Contact Us</button>
             
                  <div className=" position-relative">
                 
                          <img className=" position-absolute"  src={signature} alt="" />
                 
                         <h5 className="fw-light">Michael Paul</h5>
                    <p className="fst-italic text-secondary">Founder</p>
                 
                 
                   
                  </div>
             
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="about-img">
              <img
                src={reservation}
                className="img-fluid rounded-1 position-relative"
                alt=""
              />

              <div className="about-banner">
                <h5 className="">Offers</h5>
                <p className="fw-light">We will protect your community</p>
                <p className="about-info">
                  <span className="fs-2">$20</span>
                  <span>/Hour</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
