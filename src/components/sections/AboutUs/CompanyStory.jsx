import React from "react";
import "./about.css"

const CompanyStory = () => {
  return (
    <section className="company-story py-5">
      <div className="container">
        <div className="row align-items-center g-5">
         
          <div className="col-12 col-lg-6">
            <span className="company-story-badge">About Our Company</span>
            <h2 className="company-story-title mt-3">
              We Keep Your Spaces{" "}
              <span className="company-story-highlight">Clean, Safe, and Fresh</span>
            </h2>
            <p className="company-story-text mt-3">
              We are a dedicated cleaning company focused on delivering reliable, high-quality
              cleaning solutions for homes, offices, and commercial spaces. Our professional team
              combines modern equipment with proven methods to create environments that feel
              organized, healthy, and welcoming every single day.
            </p>
            <p className="company-story-text">
              From routine maintenance cleaning to deep disinfection services, we customize our
              approach based on your needs, schedule, and expectations—so you can focus on what
              truly matters while we take care of the rest.
            </p>

            <ul className="company-story-list mt-3">
              <li>Trained and trusted cleaning professionals</li>
              <li>Eco-friendly products safe for families and staff</li>
              <li>Flexible plans for homes, offices, and facilities</li>
              <li>Detail-oriented approach with consistent results</li>
            </ul>
          </div>

    
          <div className="col-12 col-lg-6">
            <div className="row g-3 company-story-cards">
              <div className="col-12 col-sm-6">
                <div className="company-story-card">
                  <h3 className="company-story-card-number">10+</h3>
                  <p className="company-story-card-label">Years of Experience</p>
                  <p className="company-story-card-text">
                    A decade of hands-on cleaning expertise across different industries and spaces.
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="company-story-card">
                  <h3 className="company-story-card-number">500+</h3>
                  <p className="company-story-card-label">Satisfied Clients</p>
                  <p className="company-story-card-text">
                    Long-term partnerships built on trust, reliability, and consistent results.
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="company-story-card">
                  <h3 className="company-story-card-number">24/7</h3>
                  <p className="company-story-card-label">Flexible Scheduling</p>
                  <p className="company-story-card-text">
                    Cleaning programs designed around your operating hours and lifestyle.
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="company-story-card">
                  <h3 className="company-story-card-number">100%</h3>
                  <p className="company-story-card-label">Commitment</p>
                  <p className="company-story-card-text">
                    Every project is treated with care, attention, and a quality-first mindset.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
