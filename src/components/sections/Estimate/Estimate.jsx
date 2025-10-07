import React, { useEffect, useRef } from "react";
import "./estimate.css";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const Estimate = () => {
  const testimonials = [
    {
      name: "Jessica M.",
      text: "They know my house and what I like done, I could not be happier with my home when they have finished.",
    },
    {
      name: "Michael R.",
      text: "They completely understood my vision and delivered beyond my expectations—my home has never looked better!",
    },
    {
      name: "Amanda L.",
      text: "From start to finish, they paid attention to every detail I care about; I’m absolutely thrilled with the results!",
    },
    {
      name: "David K.",
      text: "They know exactly how I like things done, and every time they finish, my house feels even more like home!",
    },
  ];

  const [auto, setAuto] = useState(true);
  const [index, setIndex] = useState(0);
  const testimonial = useRef(null);
  const total = testimonials.length;

  const goTo = () => {
    stopt();
    setIndex((p) => (p + 1) % total);
  };

  const backTo = () => {
    stopt();
    setIndex((p) => (p - 1 + total) % total);
  };

  useEffect(() => {
    testimonial.current.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  useEffect(() => {
    if (!auto) return;

    let ix = setInterval(() => {
      setIndex((p) => (p + 1) % total);
    }, 2000);

    return () => clearInterval(ix);
  }, [auto]);

  const stopt = () => {
    setAuto(false);
    let id = setTimeout(() => {
      setAuto(true);
    }, 3000);

    return () => clearTimeout(id);
  };

  return (
    <div className="estimate">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col">
                <p>We Always Strive for Excellence</p>
                <h2>Your Clients & Employees Deserve A Clean Environment!!</h2>
                <p>
                  We continuously invest in our processes, our employees and our
                  relationship with every business we serve.{" "}
                </p>
                <div>
                  <button className="btn btn-primary">Our products</button>
                </div>
                <div className="testimonial-container">
                  <div className="d-flex testimonial" ref={testimonial}>
                    {testimonials.map((item, index) => {
                      return (
                        <div key={index} className="testimonial-cards card">
                          <p>{item.text}</p>
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button onClick={() => goTo()}>
                  <ChevronRight />{" "}
                </button>
                <button onClick={() => backTo()}>
                  {" "}
                  <ChevronLeft />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 estimate-form">
            <h2>Request An Estimate</h2>
            <p>
              For a cleaning that meets your highest standards, you need a
              dedicated team of trained specialists with all supplies needed to
              thoroughly clean your home.
            </p>
            <form >
              <div className="row">
                <div className="col-6">
                  <label htmlFor="service-select" className="form-label">
                    Choose your service
                  </label>
                  <select
                    id="service-select"
                    className="form-select"
                    aria-label="Choose your service"
                  >
                    <option value="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </div>

                <div className="col-6">
                  <label htmlFor="example-select" className="form-label">
                    Select an option
                  </label>
                  <select
                    id="example-select"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
                  <div className="row">
                <div className="col-6">
                  <label htmlFor="service-select" className="form-label">
                    Choose your service
                  </label>
                  <select
                    id="service-select"
                    className="form-select"
                    aria-label="Choose your service"
                  >
                    <option value="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </div>

                <div className="col-6">
                    <label htmlFor="Facility-name" className="form-label">Facility name</label>
                    <input className="form-control" type="text"  placeholder="test" aria-label="Facility-name"></input> 
                </div>
              </div>
              <div className="row">
                    <div className="col-4">
                         <label htmlFor="room"  className="form-label"  >Room(s)?</label>
                        <input type="number"  id="room" className="form-control"/>
                    </div>
                   <div className="col-4">
                         <label htmlFor="room"  className="form-label"  >Room(s)?</label>
                        <input type="number"  id="room" className="form-control"/>
                    </div>
                      <div className="col-4">
                         <label htmlFor="room"  className="form-label"  >Room(s)?</label>
                        <input type="number"  id="room" className="form-control"/>
                    </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimate;
