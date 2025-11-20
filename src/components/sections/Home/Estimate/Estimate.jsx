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

  // form
  const [formData, setData] = useState({
    service: "clean",
    typeLoop: "weekly",
    facilityType: "educational",
    facilityName: "",
    room: "",
    hallway: "",
    staircase: "",
    yes: true,
  });
  const [error, setError] = useState("");
  const [anotherError, setAnotherError] = useState("");

  const handleUpdate = (e) => {
    const { name, value, type, number } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === number ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const service = String(formData.service || "").trim();
    const typeLoop = String(formData.typeLoop || "").trim();
    const facilityType = String(formData.facilityType || "").trim();
    const yes = String(formData.yes || "").trim();

    if (!service || !typeLoop || !facilityType || !yes) {
      setAnotherError("test");
      return;
    }
    if (
      formData.room.length < 5 ||
      formData.hallway.length < 5 ||
      formData.staircase < 5
    ) {
      setError("Please fill the forms as according to rules");
      return;
    }

    sendData(formData)
      .then(() => {
        console.log("its send");
      })
      .catch((error) => {
        console.error(error, "error");
      });
  };

  const sendData = async (data) => {
    try {
      const sendData = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!sendData.ok) throw new Error("cant post");
      const res = await sendData.json();
      console.log(res, "success");
    } catch (error) {
      console.error(error, "status error");
    }
  };

  // carousel

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
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col">
                <p className="text-white fst-italic">We Always Strive for Excellence</p>
                <h2 className="text-white fs-1 w-75">Your Clients & Employees Deserve A Clean Environment!!</h2>
                <p className="text-white w-75">
                  We continuously invest in our processes, our employees and our
                  relationship with every business we serve.{" "}
                </p>
                <div>
                  <button className="btn btn-primary bg-button">Our products</button>
                </div>
                <div className="testimonial-container">
                  <div className="d-flex testimonial" ref={testimonial}>
                    {testimonials.map((item, index) => {
                      return (
                        <div key={index} className="testimonial-cards">
                          <p className="">{item.text}</p>
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="d-flex gap-1">
                   <button className="prev"  onClick={() => backTo()}>
                       <ChevronLeft />
                </button>
                <button className="next" onClick={() => goTo()}>
                           <ChevronRight />
                </button> 
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 estimate-form">
            <h2 className="estimate-header">Request An Estimate</h2>
            <p className="estimate-info">
              For a cleaning that meets your highest standards, you need a
              dedicated team of trained specialists with all supplies needed to
              thoroughly clean your home.
            </p>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <label htmlFor="service-select" className="form-label">
                    Choose your service
                  </label>
                  <select
                    name="service"
                    id="service-select"
                    value={formData.service}
                    className="form-select"
                    aria-label="Choose your service"
                    onChange={handleUpdate}
                  >
                    <option value="clean">Clean</option>
                    <option value="clean1">Clean1</option>
                    <option value="clean2">Clean2</option>
                  </select>
                  {anotherError && <p className="error">{anotherError} </p>}
                </div>

                <div className="col-12 col-lg-6">
                  <label htmlFor="example-select" className="form-label">
                    Indicate type of cleaning
                  </label>
                  <select
                    id="example-select"
                    name="typeLoop"
                    value={formData.typeLoop}
                    onChange={handleUpdate}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="weekly">Weekly Regular</option>
                    <option value="monthly">Monthly Regular</option>
                  </select>
                  {error && <p className="error">{error} </p>}
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <label htmlFor="FacilityType" className="form-label">
                    Facility type
                  </label>
                  <select
                    id="facilityType"
                    name="facilityType"
                    value={formData.facilityType}
                    onChange={handleUpdate}
                    className="form-select"
                    aria-label="Choose your service"
                  >
                    <option value="educational">Educational</option>
                    <option value="govermental">Govermental</option>
                  </select>
                  {error && <p className="error">{error}</p>}
                </div>

                <div className="col-12 col-md-6">
                  <label htmlFor="Facility-name" className="form-label">
                    Facility name
                  </label>
                  <input
                    id="Facility-name"
                    name="facilityName"
                    value={formData.facilityName}
                    onChange={handleUpdate}
                    className="form-control"
                    type="text"
                    placeholder="test"
                    aria-label="Facility-name"
                  ></input>
                  {error && <p className="error">{error}</p>}
                </div>
              </div>
              <div className="row">
                <div className="col-12  col-lg-4">
                  <label htmlFor="room" className="form-label">
                    Room(s)?
                  </label>
                  <input
                    type="number"
                    name="room"
                    value={formData.room}
                    onChange={handleUpdate}
                    id="room"
                    className="form-control"
                  />
                  {error && <p className="error">{error}</p>}
                </div>
                <div className="col-12  col-lg-4">
                  <label htmlFor="hallway" className="form-label">
                    Hallway(s)??
                  </label>
                  <input
                    type="number"
                    id="hallway"
                    name="hallway"
                    value={formData.hallway}
                    onChange={handleUpdate}
                    className="form-control"
                  />
                  {error && <p className="error">{error}</p>}
                </div>
                <div className="col-12  col-lg-4">
                  <label htmlFor="staircase" className="form-label">
                    Staircase(s)?
                  </label>
                  <input
                    type="number"
                    name="staircase"
                    value={formData.staircase}
                    onChange={handleUpdate}
                    id="staircase"
                    className="form-control"
                  />
                  {error && <p className="error">{error}</p>}
                </div>
              </div>
              <div className="row">
                <h5 className="send-request-header">
                  Do you have all the necessary cleaning supplies?
                </h5>
                <div className="col-12 col-md-4 col-lg-2">
                  <div clasName="form-check ">
                    <input
                      className="form-check-input"
                      name="yes"
                      value={formData.yes}
                      type="radio"
                      id="checkChecked"
                      onChange={handleUpdate}
                      required
                    />

                    <label className="form-check-label" htmlFor="checkChecked">
                      Yes
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="yes"
                      value={formData.yes}
                      id="checkChecked1"
                      onChange={handleUpdate}
                      required
                    />
                    <label className="form-check-label" htmlFor="checkChecked1">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button type="submit" className="btn btn-primary bg-button">
                    Send
                  </button>
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
