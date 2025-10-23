import React from "react";
import { Sparkles } from "lucide-react";
import "./Offers.css";

const offerData = [
  {
    title: "Residential",
    description: "We provide residential house cleaning services and always focus on cleaning for health, our extensive industry experience give us a leg up when it comes to leaving your house cleaner than ever before.",
    features: [
      "Window sills & ledges",
      "Hard surface floors",
      "Remove cobwebs",
      "Empty trash",
      "Appliance exteriors",
      "Ranges and ovens",
      "Cabinet doors",
    ],
    price: "$150",
    period: "Mo",
  },
  {
    title: "Commercial",
    description: "Providing commercial cleaning services which will help you protect your customers and employees, we care about clean and it shows in our work, our people, and in our delivering on our word, every day",
    features: [
      "Government build",
      "Financial Institutions",
      "Religious Building",
      "Office Buildings",
      "Manufactur Facilities",
      "Educational Facilities",
      "Medical Facilities",
    ],
    price: "$650",
    period: "Mo",
  },
];

const Offers = () => {
  return (
    <section className="offers">
      <div className="container">
        <div className="row g-0 h-100">
          <div className="col-12 col-lg-6 d-flex">
            <div className="card-container">
              <div className="card-elements h-100">
                <div className="card h-100">
                  {offerData.slice(0, 1).map((item, i) => {
                    return (
                      <div className="card-body d-flex flex-column h-100" key={i}>
                        <div className="card-title">
                          <div className="d-flex justify-content-between offer-title " >
                            <h4>{item.title}</h4>
                            <Sparkles size={40} style={{ color: "#9ECC42" }} />
                          </div>
                          <p   className="offer-description">{item.description}</p>
                        </div>

                        <div className="d-flex justify-content-start flex-grow-1">
                          <ul className="row offer-features list-unstyled justify-content-start">
                            {item.features.map((list, j) => {
                              return (
                                <li key={j} className="col-12">
                                  <span className='feature-bullet'>✓</span> {list}
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        <div className="row offer-price mt-auto">
                          <div className="d-flex flex-md-row flex-column justify-content-between">
                            <button className="btn btn-success align-self-start">
                              Purchase Now
                            </button>
                            <div className="fs-2 price-tag">
                              {item.price} / <span>{item.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex">
            <div className="card-container__2 h-100">
              <div className="card-elements h-100">
                <div className="card h-100">
                  {offerData.slice(1, 2).map((item2, k) => {
                    return (
                      <div key={k} className="card-body d-flex flex-column h-100">
                        <div className="card-title">
                          <div className="d-flex justify-content-between offer-title">
                            <Sparkles size={40} style={{ color: "#276BBA" }} />
                            <h4>{item2.title}</h4>
                          </div>
                          <p  style={{textAlign:"end"}} className="offer-description">
                            {item2.description}
                          </p>
                        </div>

                        <div className="d-flex justify-content-end flex-grow-1">
                          <ul className="row offer-features list-unstyled right-aligned">
                            {item2.features.map((li, k) => {
                              return (
                                <li className="offer-feature-item justify-content-end " key={k}>
                                {li}     <span className='feature-bullet blue ms-2 '>✓</span>  
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        <div className="row offer-price mt-auto">
                          <div className="d-flex flex-column flex-md-row align-items-end  justify-content-between">
                            <div className="fs-2">
                              {item2.price} / <span>{item2.period}</span>
                            </div>
                            <button className="btn btn-primary ">
                              Purchase Now
                            </button>
                            
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;