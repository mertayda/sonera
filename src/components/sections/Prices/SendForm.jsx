import React, { useState } from "react";
import "./Price.css";
import { CheckCircle } from "lucide-react";

const SendForm = () => {
  const [error, setError] = useState({});
  const [inputError, setInputError] = useState({});
  const [form, setForm] = useState({
    virus: "",
    cleanType: "",
    facility: "",
    fName: "",
    rooms: "",
    hallways: "",
    staircases: "",
    supplies: "",
  });

  const handleFormat = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    InputValidation(name, value);
  };

  const InputValidation = (name, value) => {
    if (name === "fName") {
      if (value.trim().length < 2) {
        return setInputError({
          fName: "There should be at least 4 Character",
        });
      } else {
        return setInputError({
          fName: "",
        });
      }
    }
  };

  const validation = () => {
    const newArray = {};

    if (!form.virus || form.virus.trim() === "")
      newArray.virus = "Services is empty";

    if (!form.cleanType || form.cleanType.trim() === "")
      newArray.cleanType = "Cleaning type is empty";

    if (!form.facility || form.facility.trim() === "")
      newArray.facility = "Facility type is required";

    if (!form.fName || form.fName.trim() === "")
      newArray.fName = "Facility name is required";

    if (!form.supplies || form.supplies.trim() === "")
      newArray.supplies = "Supplies selection is required";

    if (!form.rooms) {
      newArray.rooms = "Rooms is required";
    } else if (Number(form.rooms) < 1 || Number(form.rooms) > 5) {
      newArray.rooms = "Pick a valid rooms number (1–5)";
    }

    if (!form.hallways) {
      newArray.hallways = "Hallways is required";
    } else if (Number(form.hallways) < 1 || Number(form.hallways) > 8) {
      newArray.hallways = "Pick a valid hallways number (1–8)";
    }

    if (!form.staircases) {
      newArray.staircases = "Staircases is required";
    } else if (Number(form.staircases) < 1 || Number(form.staircases) > 10) {
      newArray.staircases = "Pick a valid staircases number (1–10)";
    }

    setError(newArray);

    return Object.keys(newArray).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validation()) return;

    console.log("FORM OK:", form);
  };

  return (
    <section className="sendform">
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-12 col-lg-7 bg-white shadow-sm p-5 rounded-2">
            <h3 className="form-title mb-3 fs-4">Request An Estimate</h3>
            <p className="form-text">
              For a cleaning that meets your highest standards, you need a
              dedicated team of trained specialists with all supplies needed to
              thoroughly clean your home.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                {/* VIRUS / SERVICE */}
                <div className="col-md-6">
                  <label className="form-label" htmlFor="virus">
                    Choose your service
                  </label>
                  <select
                    className="form-select "
                    name="virus"
                    id="virus"
                    value={form.virus}
                    onChange={handleFormat}
                  >
                    <option value="">Please choose</option>
                    <option value="Virus Cleaning">Virus Cleaning</option>
                    <option value="Room Cleaning">Room Cleaning</option>
                  </select>
                  {error.virus && (
                    <p className="text-danger small mt-1">{error.virus}</p>
                  )}
                </div>

                {/* CLEAN TYPE */}
                <div className="col-md-6">
                  <label className="form-label" htmlFor="cleanType">
                    Indicate type of cleaning
                  </label>
                  <select
                    className="form-select "
                    name="cleanType"
                    id="cleanType"
                    value={form.cleanType}
                    onChange={handleFormat}
                  >
                    <option value="">Please choose</option>
                    <option value="Weekly Regular">Weekly Regular</option>
                    <option value="Monthly Regular">Monthly Regular</option>
                  </select>
                  {error.cleanType && (
                    <p className="text-danger small mt-1">{error.cleanType}</p>
                  )}
                </div>

                {/* FACILITY */}
                <div className="col-md-6">
                  <label className="form-label" htmlFor="facility">
                    Facility type
                  </label>
                  <select
                    className="form-select "
                    name="facility"
                    id="facility"
                    value={form.facility}
                    onChange={handleFormat}
                  >
                    <option value="">Please choose</option>
                    <option value="Educational">Educational</option>
                    <option value="Govermental">Govermental</option>
                  </select>
                  {error.facility && (
                    <p className="text-danger small mt-1">{error.facility}</p>
                  )}
                </div>

                {/* FACILITY NAME */}
                <div className="col-md-6">
                  <label className="form-label" htmlFor="fName">
                    Facility Name
                  </label>
                  <input
                    name="fName"
                    id="fName"
                    type="text"
                    className="form-control"
                    placeholder="7oof"
                    value={form.fName}
                    onChange={handleFormat}
                  />
                  {inputError.fName && <p>{inputError.fName}</p>}
                  {error.fName && (
                    <p className="text-danger small mt-1">{error.fName}</p>
                  )}
                </div>

                {/* ROOMS */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="rooms">
                    Room(s)?
                  </label>
                  <input
                    id="rooms"
                    type="number"
                    className="form-control"
                    name="rooms"
                    value={form.rooms}
                    onChange={handleFormat}
                  />
                  {error.rooms && (
                    <p className="text-danger small mt-1">{error.rooms}</p>
                  )}
                </div>

                {/* HALLWAYS */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="hallways">
                    Hallway(s)?
                  </label>
                  <input
                    id="hallways"
                    type="number"
                    name="hallways"
                    className="form-control"
                    value={form.hallways}
                    onChange={handleFormat}
                  />
                  {error.hallways && (
                    <p className="text-danger small mt-1">{error.hallways}</p>
                  )}
                </div>

                {/* STAIRCASES */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="staircases">
                    Staircase(s)?
                  </label>
                  <input
                    id="staircases"
                    type="number"
                    name="staircases"
                    className="form-control"
                    value={form.staircases}
                    onChange={handleFormat}
                  />
                  {error.staircases && (
                    <p className="text-danger small mt-1">{error.staircases}</p>
                  )}
                </div>

                {/* SUPPLIES */}
                <div className="col-12">
                  <label className="form-label d-block">
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
                        onChange={handleFormat}
                      />
                      <label className="form-check-label" htmlFor="suppliesYes">
                        Yes
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="supplies"
                        id="suppliesNo"
                        value="no"
                        checked={form.supplies === "no"}
                        onChange={handleFormat}
                      />
                      <label className="form-check-label" htmlFor="suppliesNo">
                        No
                      </label>
                    </div>
                  </div>
                  {error.supplies && (
                    <p className="text-danger small mt-1">{error.supplies}</p>
                  )}
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary w-100 py-2">
                    Submit Request
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-12 col-lg-5 d-flex align-items-center p-4 p-lg-5 rounded  ">
                   <div className="info-card bg-white rounded-3 shadow-sm p-4 ">
      <h4 className="fw-bold text-dark mb-3">
        Professional Cleaning You Can Trust
      </h4>

      <p className=" text-muted">
        We use industry-leading cleaning techniques and certified
        professionals to ensure your environment remains spotless,
        sanitized and safe.
      </p>

      <ul className="list-unstyled mt-3">
        <li className="d-flex align-items-center mb-2">
          <CheckCircle size={20} className="text-success me-2" />
          Reliable & Trained Staff
        </li>

        <li className="d-flex align-items-center mb-2">
          <CheckCircle size={20} className="text-success me-2" />
          Eco-Friendly Products
        </li>

        <li className="d-flex align-items-center mb-2">
          <CheckCircle size={20} className="text-success me-2" />
          Affordable Pricing
        </li>

        <li className="d-flex align-items-center">
          <CheckCircle size={20} className="text-success me-2" />
          Fast & Flexible Scheduling
        </li>
      </ul>

      <button className="btn btn-success btn-lg w-100 mt-4 rounded-pill">
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
