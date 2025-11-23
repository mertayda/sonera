import React, { useEffect, useRef, useState, useCallback } from "react";
import "./estimate.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Estimate = () => {
  // --- Carousel Data ---
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

  // --- Form State ---
  const [formData, setData] = useState({
    service: "clean",
    typeLoop: "weekly",
    facilityType: "educational",
    facilityName: "",
    room: 0,
    hallway: 0,
    staircase: 0,
    hasSupplies: "yes", // Changed from 'yes' boolean to string for radio grouping
  });

  const [status, setStatus] = useState({ type: "", message: "" }); // Unified status (error/success)
  const [isLoading, setIsLoading] = useState(false);

  // --- Form Handlers ---
  const handleUpdate = (e) => {
    const { name, value, type } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
    // Clear errors when user types
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    // Basic Validation
    if (!formData.facilityName.trim()) {
      setStatus({ type: "error", message: "Please enter a facility name." });
      return;
    }

    // Numeric Validation (Ensure they aren't negative)
    if (formData.room < 0 || formData.hallway < 0 || formData.staircase < 0) {
      setStatus({ type: "error", message: "Room counts cannot be negative." });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) throw new Error("Server error");

      await response.json(); // Wait for parsing
      setStatus({ type: "success", message: "Estimate request sent successfully!" });
      
      // Optional: Reset form
      // setData({ ...initialState }); 

    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "Failed to send request. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };


  const [auto, setAuto] = useState(true);
  const [index, setIndex] = useState(0);
  const testimonialRef = useRef(null);
  const total = testimonials.length;
  const timeoutRef = useRef(null); // 

  const resetAutoScroll = useCallback(() => {
    setAuto(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setAuto(true);
    }, 4000); //
  }, []);

  const goTo = () => {
    resetAutoScroll();
    setIndex((prev) => (prev + 1) % total);
  };

  const backTo = () => {
    resetAutoScroll();
    setIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (testimonialRef.current) {
      testimonialRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);


  useEffect(() => {
    let intervalId;
    if (auto) {
      intervalId = setInterval(() => {
        setIndex((prev) => (prev + 1) % total);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [auto, total]);


  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="estimate">
      <div className="container">
        <div className="row gy-5">
          
       
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <div className="text-content mb-4">
              <p className="text-white fst-italic mb-2">We Always Strive for Excellence</p>
              <h2 className="text-white display-5 fw-bold mb-3">
                Your Clients & Employees Deserve A Clean Environment!
              </h2>
              <p className="text-white opacity-75 mb-4">
                We continuously invest in our processes, our employees, and our
                relationship with every business we serve.
              </p>
              <button className="btn btn-primary bg-button px-4 py-2 rounded-pill">
                Our products
              </button>
            </div>

            <div className="testimonial-section mt-auto">
              <div className="testimonial-container">
                <div className="testimonial-track" ref={testimonialRef}>
                  {testimonials.map((item, i) => (
                    <div key={i} className="testimonial-card">
                      <p>"{item.text}"</p>
                      <span>— {item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="d-flex gap-2 mt-3">
                <button className="nav-btn prev" onClick={backTo} aria-label="Previous">
                  <ChevronLeft size={20} />
                </button>
                <button className="nav-btn next" onClick={goTo} aria-label="Next">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

  
          <div className="col-12 col-lg-6">
            <div className="estimate-form-card">
              <h2 className="estimate-header">Request An Estimate</h2>
              <p className="estimate-info">
                For a cleaning that meets your highest standards, you need a
                dedicated team of trained specialists.
              </p>

              {status.message && (
                <div className={`alert ${status.type === "error" ? "alert-danger" : "alert-success"}`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="service-select" className="form-label">Service</label>
                    <select
                      name="service"
                      id="service-select"
                      value={formData.service}
                      className="form-select"
                      onChange={handleUpdate}
                    >
                      <option value="clean">Standard Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="sanitization">Sanitization</option>
                    </select>
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="frequency-select" className="form-label">Frequency</label>
                    <select
                      id="frequency-select"
                      name="typeLoop"
                      value={formData.typeLoop}
                      onChange={handleUpdate}
                      className="form-select"
                    >
                      <option value="weekly">Weekly Regular</option>
                      <option value="biweekly">Bi-Weekly</option>
                      <option value="monthly">Monthly Regular</option>
                    </select>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="facilityType" className="form-label">Facility Type</label>
                    <select
                      id="facilityType"
                      name="facilityType"
                      value={formData.facilityType}
                      onChange={handleUpdate}
                      className="form-select"
                    >
                      <option value="educational">Educational</option>
                      <option value="government">Government</option>
                      <option value="commercial">Commercial</option>
                      <option value="residential">Residential</option>
                    </select>
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="facilityName" className="form-label">Facility Name</label>
                    <input
                      id="facilityName"
                      name="facilityName"
                      value={formData.facilityName}
                      onChange={handleUpdate}
                      className="form-control"
                      type="text"
                      placeholder="e.g. Main Office"
                    />
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-4">
                    <label htmlFor="room" className="form-label">Rooms</label>
                    <input
                      type="number"
                      name="room"
                      value={formData.room}
                      onChange={handleUpdate}
                      id="room"
                      min="0"
                      className="form-control"
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="hallway" className="form-label">Hallways</label>
                    <input
                      type="number"
                      id="hallway"
                      name="hallway"
                      value={formData.hallway}
                      onChange={handleUpdate}
                      min="0"
                      className="form-control"
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="staircase" className="form-label">Stairs</label>
                    <input
                      type="number"
                      name="staircase"
                      value={formData.staircase}
                      onChange={handleUpdate}
                      id="staircase"
                      min="0"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <h5 className="send-request-header">Do you have cleaning supplies?</h5>
                  <div className="d-flex gap-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="hasSupplies"
                        value="yes"
                        id="suppliesYes"
                        checked={formData.hasSupplies === "yes"}
                        onChange={handleUpdate}
                      />
                      <label className="form-check-label" htmlFor="suppliesYes">Yes</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="hasSupplies"
                        value="no"
                        id="suppliesNo"
                        checked={formData.hasSupplies === "no"}
                        onChange={handleUpdate}
                      />
                      <label className="form-check-label" htmlFor="suppliesNo">No</label>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary bg-button w-100 py-2 fw-bold"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Request"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimate;