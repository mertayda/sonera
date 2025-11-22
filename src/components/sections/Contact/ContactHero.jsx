import React, { useState } from "react";
import { PhoneCall, MapPin, Clock4 } from "lucide-react";
import "./contact.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactHero = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [inputError, setInputError] = useState({});

  const inputValidation = (name, value) => {
    const newErr = {};

    if (name === "name") {
      if (!value.trim()) newErr.name = "Name is required";
      else newErr.name = "";
    }

    if (name === "email") {
      if (!value.trim()) newErr.email = "Email is required";
      else if (!emailRegex.test(value)) newErr.email = "Invalid email format";
      else newErr.email = "";
    }

    if (name === "phone") {
      if (!value.trim()) newErr.phone = "Phone is required";
      else newErr.phone = "";
    }

    if (name === "message") {
      if (!value.trim()) newErr.message = "Message is required";
      else newErr.message = "";
    }

    setInputError(newErr);
  };

  const handleForm = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    inputValidation(name, value);
  };

  const validation = () => {
    const newError = {};

    if (!form.name.trim()) newError.name = "Name is required";
    if (!form.email.trim()) newError.email = "Email is required";
    if (!form.phone.trim()) newError.phone = "Phone is required";
    if (!form.message.trim()) newError.message = "Message is required";

    setError(newError);

    return Object.keys(newError).length === 0;
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!validation()) return;

    console.log("Form sent:", form);
  };

  return (
    <section className="contact py-2" style={{ backgroundColor: "#f7f8fa" }}>
      <div className="contact-map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24168.40147864548!2d-73.99037275955086!3d40.68721672738766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31e5a6e8f7%3A0xb5c9a7e95135406a!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1732194822212!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row g-5 align-items-start">
          <div className="col-12 col-lg-8">
            <h2 className="fw-bold mb-3">Get in Touch</h2>
            <p className="text-muted mb-4" style={{ lineHeight: "1.7" }}>
              Fill the form and our support team will contact you soon.
            </p>

            <form className="row g-4" onSubmit={submitForm}>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${
                      inputError.name || error.name ? "is-invalid" : ""
                    }`}
                    placeholder="Your Name"
                    onChange={handleForm}
                  />
                  <label htmlFor="name">Name</label>
                </div>

                {inputError.name && (
                  <p className="text-danger small">{inputError.name}</p>
                )}
                {error.name && (
                  <p className="text-danger small">{error.name}</p>
                )}
              </div>

              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${
                      inputError.email || error.email ? "is-invalid" : ""
                    }`}
                    placeholder="Your Email"
                    onChange={handleForm}
                  />
                  <label htmlFor="email">Email</label>
                </div>

                {inputError.email && (
                  <p className="text-danger small">{inputError.email}</p>
                )}
                {error.email && (
                  <p className="text-danger small">{error.email}</p>
                )}
              </div>

              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`form-control ${
                      inputError.phone || error.phone ? "is-invalid" : ""
                    }`}
                    placeholder="Your Phone"
                    onChange={handleForm}
                  />
                  <label htmlFor="phone">Phone</label>
                </div>

                {inputError.phone && (
                  <p className="text-danger small">{inputError.phone}</p>
                )}
                {error.phone && (
                  <p className="text-danger small">{error.phone}</p>
                )}
              </div>

              <div className="col-md-6">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="service"
                    name="service"
                    onChange={handleForm}
                  >
                    <option value="">Select</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="disinfection">Disinfection</option>
                    <option value="deep">Deep Cleaning</option>
                  </select>
                  <label htmlFor="service">Select a Service</label>
                </div>
              </div>

              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className={`form-control ${
                      inputError.message || error.message ? "is-invalid" : ""
                    }`}
                    id="message"
                    name="message"
                    style={{ height: "150px" }}
                    placeholder="Write your message"
                    onChange={handleForm}
                  ></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>

                {inputError.message && (
                  <p className="text-danger small">{inputError.message}</p>
                )}
                {error.message && (
                  <p className="text-danger small">{error.message}</p>
                )}
              </div>

              <div className="col-12 mt-2">
                <button className="btn btn-primary px-4 py-2 fw-semibold">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="col-12 col-lg-4">
            <div
              className="shadow-sm p-4 rounded-4 bg-white"
              style={{
                border: "1px solid #eaeaea",
                position: "sticky",
                top: "100px",
              }}
            >
              <p className="text-primary fw-semibold mb-1">
                Cleaning Excellence
              </p>
              <h4 className="fw-bold mb-3">
                Reliable Cleaning & Disinfection Solutions
              </h4>
              <p className="mb-4 text-muted" style={{ lineHeight: "1.7" }}>
                Our dedicated team offers top-tier cleaning.
              </p>

              <ul className="list-unstyled d-flex flex-column gap-3">
                <li className="d-flex align-items-center gap-3">
                  <PhoneCall size={22} />
                  <div>
                    <span className="fw-semibold">Emergency Line</span>
                    <br />
                    <span className="text-muted">(002) 01061245741</span>
                  </div>
                </li>

                <li className="d-flex align-items-center gap-3">
                  <MapPin size={22} />
                  <div>
                    <span className="fw-semibold">Location</span>
                    <br />
                    <span className="text-muted">Brooklyn, New York, USA</span>
                  </div>
                </li>

                <li className="d-flex align-items-center gap-3">
                  <Clock4 size={22} />
                  <div>
                    <span className="fw-semibold">Working Hours</span>
                    <br />
                    <span className="text-muted">
                      Mon - Fri: 8:00 AM - 7:00 PM
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
