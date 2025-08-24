import React from "react";
import slider1 from "../../../assets/images/slide1.jpg";
import slider2 from "../../../assets/images/slide2.jpg";
import { Play } from 'lucide-react';
import "./Hero.css";

const HeroCarousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
      
      </div>
      <div className="carousel-inner">
        <div
          className="carousel-item active position-relative"
          style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${slider1})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",

       
          
          }}
        >
          <div className="container-fluid d-flex mx-auto justify-content-center align-items-center mx-auto ">
            <div className="row d-flex justify-content-center justify-content-lg-between  position-absolute top-50 translate-middle-y px-5 gap-5 gap-md-0 gap-5">
              <div className="col-12 col-lg-8 text-center text-md-start">
                <div className="row">
                    <div className="col">
                     <div className="d-flex flex-column  justify-content-start">
                  <p className="text-white fst-italic fs-4 text-uppercase ">
                    get a customized cleaning plan that meets your needs
                  </p>
                  <h1 className="fs-1 fw-bold text-uppercase text-white">
                    providing a healthy environment for clients & employees
                  </h1>
                  <p className="text-white">
                    Our cleaning experts deliver the highest quality of clean
                    you can always count, let us help you with cleaning and
                    disinfecting now.
                  </p>
                </div>
                    </div>
                </div>
                <div className="d-inline-flex  flex-column  flex-md-row gap-2">
                  <button className="btx ">More About Us</button>
                  <button className="btn btn-secondary">Our services</button>
                </div>
              </div>

              <div className="col-12 col-lg-4 d-flex ">
                <div className="row w-100 h-100">
                  <div className="col-12 d-flex  justify-content-center justify-content-lg-end" >
                  <a className="video-btn" href="https://www.youtube.com/watch?v=kWsSGa_Mbog" >
                  <Play className="text-white wheel"></Play>
                   </a>
                </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
             <div
          className="carousel-item  position-relative"
          style={{
             backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${slider2})`,
            backgroundSize: "cover",
            backgroundPosition: "left top",
       
          
          }}
        >
          <div className="container-fluid d-flex mx-auto justify-content-center align-items-center mx-auto">
            <div className="row d-flex position-absolute top-50 translate-middle-y px-5 gap-md-0 gap-5">
              <div className="col-12 col-lg-8">
                <div className="d-flex flex-column  justify-content-start">
                  <p className="text-white fst-italic fs-4 text-uppercase ">
                   A Healthy Environment For Your Clients & Employees.
                  </p>
                  <h1 className="fs-1 fw-bold text-uppercase text-white">
                   Get A Customized Cleaning Plan That Meets Your Needs
                  </h1>
                  <p className="text-white">
                    Our cleaning experts deliver the highest quality of clean
                    you can always count, let us help you with cleaning and
                    disinfecting now.
                  </p>
                </div>
                <div className="d-flex flex-row gap-2">
                  <button className="btn btn-primary">More About Us</button>
                  <button className="btn btn-secondary">Our services</button>
                </div>
              </div>

              <div className="col-12 col-lg-4 d-flex ">
                <div className="row w-100 h-100">
                  <div className="col-12  d-flex justify-content-center justify-content-lg-end">
                  <a className="video-btn" href="https://www.youtube.com/watch?v=kWsSGa_Mbog" >
                    <Play className="text-white  "></Play>
                </a>
                </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>


        
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroCarousel;
