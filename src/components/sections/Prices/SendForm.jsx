import React, { useState } from "react";
import "./Price.css";
import { CheckCircle, AlertCircle } from "lucide-react";

const SendForm = () => {
  const [form, setForm] = useState({
    service: "",
    cleanType: "",
    facility: "",
    fName: "",
    rooms: "",
    hallways: "",
    staircases: "",
    supplies: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));


    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };


  const validate = () => {
    const newErrors = {};

    if (!form.service) newErrors.service = "Service selection is required";
    if (!form.cleanType) newErrors.cleanType = "Cleaning type is required";
    if (!form.facility) newErrors.facility = "Facility type is required";
    

    if (!form.fName || form.fName.trim().length < 4) {
      newErrors.fName = "Facility name must be at least 4 characters";
    }

    if (!form.supplies) newErrors.supplies = "Please specify supply availability";


    if (!form.rooms) {
      newErrors.rooms = "Required";
    } else if (Number(form.rooms) < 1 || Number(form.rooms) > 5) {
      newErrors.rooms = "1-5 only";
    }

    if (!form.hallways) {
      newErrors.hallways = "Required";
    } else if (Number(form.hallways) < 1 || Number(form.hallways) > 8) {
      newErrors.hallways = "1-8 only";
    }

    if (!form.staircases) {
      newErrors.staircases = "Required";
    } else if (Number(form.staircases) < 1 || Number(form.staircases) > 10) {
      newErrors.staircases = "1-10 only";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("FORM SUBMITTED SUCCESS:", form);
      alert("Estimate Request Sent!");
 
    } else {
        console.log("Validation Failed");
    }
  };

  return (
    <section className="sendform">
      <div className="container my-5">
        <div className="row g-5 align-items-stretch">
          

          <div className="col-12 col-lg-7">
            <div className="estimate-card h-100">
              <h3 className="form-title">Request An Estimate</h3>
              <p className="form-text">
                For a cleaning that meets your highest standards, you need a
                dedicated team of trained specialists with all supplies needed.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  
    
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="service">
                      Choose your service
                    </label>
                    <select
                      className={`form-select ${errors.service ? "is-invalid" : ""}`}
                      name="service"
                      id="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Please choose</option>
                      <option value="Virus Cleaning">Virus Cleaning</option>
                      <option value="Room Cleaning">Room Cleaning</option>
                    </select>
                    {errors.service && <div className="invalid-feedback">{errors.service}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="cleanType">
                      Indicate type of cleaning
                    </label>
                    <select
                      className={`form-select ${errors.cleanType ? "is-invalid" : ""}`}
                      name="cleanType"
                      id="cleanType"
                      value={form.cleanType}
                      onChange={handleChange}
                    >
                      <option value="">Please choose</option>
                      <option value="Weekly Regular">Weekly Regular</option>
                      <option value="Monthly Regular">Monthly Regular</option>
                    </select>
                    {errors.cleanType && <div className="invalid-feedback">{errors.cleanType}</div>}
                  </div>

   
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="facility">
                      Facility type
                    </label>
                    <select
                      className={`form-select ${errors.facility ? "is-invalid" : ""}`}
                      name="facility"
                      id="facility"
                      value={form.facility}
                      onChange={handleChange}
                    >
                      <option value="">Please choose</option>
                      <option value="Educational">Educational</option>
                      <option value="Govermental">Govermental</option>
                    </select>
                    {errors.facility && <div className="invalid-feedback">{errors.facility}</div>}
                  </div>

 
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="fName">
                      Facility Name
                    </label>
                    <input
                      name="fName"
                      id="fName"
                      type="text"
                      className={`form-control ${errors.fName ? "is-invalid" : ""}`}
                      placeholder="e.g. Central High"
                      value={form.fName}
                      onChange={handleChange}
                    />
                    {errors.fName && <div className="invalid-feedback">{errors.fName}</div>}
                  </div>

 
                  <div className="col-md-4">
                    <label className="form-label" htmlFor="rooms">Room(s)</label>
                    <input
                      id="rooms"
                      type="number"
                      className={`form-control ${errors.rooms ? "is-invalid" : ""}`}
                      name="rooms"
                      value={form.rooms}
                      onChange={handleChange}
                    />
                    {errors.rooms && <div className="invalid-feedback">{errors.rooms}</div>}
                  </div>

                  <div className="col-md-4">
                    <label className="form-label" htmlFor="hallways">Hallway(s)</label>
                    <input
                      id="hallways"
                      type="number"
                      name="hallways"
                      className={`form-control ${errors.hallways ? "is-invalid" : ""}`}
                      value={form.hallways}
                      onChange={handleChange}
                    />
                    {errors.hallways && <div className="invalid-feedback">{errors.hallways}</div>}
                  </div>

                  <div className="col-md-4">
                    <label className="form-label" htmlFor="staircases">Staircase(s)</label>
                    <input
                      id="staircases"
                      type="number"
                      name="staircases"
                      className={`form-control ${errors.staircases ? "is-invalid" : ""}`}
                      value={form.staircases}
                      onChange={handleChange}
                    />
                    {errors.staircases && <div className="invalid-feedback">{errors.staircases}</div>}
                  </div>

   
                  <div className="col-12 mt-4">
                    <label className="form-label d-block mb-2">
                      Do you have all the necessary cleaning supplies?
                    </label>
                    <div className="d-flex gap-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="supplies"
                          id="suppliesYes"
                          value="yes"
                          checked={form.supplies === "yes"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="suppliesYes">Yes</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="supplies"
                          id="suppliesNo"
                          value="no"
                          checked={form.supplies === "no"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="suppliesNo">No</label>
                      </div>
                    </div>
                    {errors.supplies && <p className="text-danger small mt-1">{errors.supplies}</p>}
                  </div>

                  <div className="col-12 mt-4">
                    <button type="submit" className="submit-btn btn w-100 py-3 text-white">
                      Submit Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>


          <div className="col-12 col-lg-5 d-flex align-items-center">
            <div className="info-card w-100">
              <h4 className="fw-bold mb-3">
                Professional Cleaning You Can Trust
              </h4>
              <p>
                We use industry-leading cleaning techniques and certified
                professionals to ensure your environment remains spotless,
                sanitized and safe.
              </p>

              <ul className="list-unstyled mt-4">
                <li className="d-flex align-items-start mb-3">
                  <CheckCircle size={20} className="text-success flex-shrink-0 me-3 mt-1" />
                  <span>Reliable & Trained Staff</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <CheckCircle size={20} className="text-success flex-shrink-0 me-3 mt-1" />
                  <span>Eco-Friendly Products</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <CheckCircle size={20} className="text-success flex-shrink-0 me-3 mt-1" />
                  <span>Affordable Pricing</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <CheckCircle size={20} className="text-success flex-shrink-0 me-3 mt-1" />
                  <span>Fast & Flexible Scheduling</span>
                </li>
              </ul>

              <button className="btn btn-success btn-lg w-100 mt-4 rounded-pill shadow-sm">
                Explore More Services
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SendForm;