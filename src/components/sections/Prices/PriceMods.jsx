import React from 'react'

import { CircleCheckBig } from 'lucide-react';
const data = [
  {
    title: "Residential",
    text: "Our extensive industry experience give us a leg up when it comes to cleaner, and healthier, than ever before",
    test: [
      "Clean and disinfect breakroom",
      "Empty trash and replace liner",
      "Mop all hard-surface floors",
      "Vacuum and Disinfect floors"
    ],
    purchase: "Purchase Now",
    price: "150"
  },
  {
    title: "Commercial",
    text: "Providing commercial cleaning services which help you protect your customers and employees about clean..",
    test: [
      "Dust and disinfect work surfaces",
      "Clean glass doors and windows",
      "Sanitize restrooms and common areas",
      "Floor polishing and carpet vacuuming"
    ],
    purchase: "Purchase Now",
    price: "250"
  },
  {
    title: "Janitorial",
    text: "If you are tired of replacing your service company due to their complacency or lack of follow-through..",
    test: [
      "Daily sweeping and mopping",
      "Trash collection and disposal",
      "Restroom deep cleaning",
      "Surface disinfection and odor control"
    ],
    purchase: "Purchase Now",
    price: "200"
  }
];



const PriceCard = ({ item }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex">
      <div className="price-card-container w-100">
        <div className="price-card card h-100 d-flex flex-column">
          <div className="card-body d-flex flex-column">
            <h5 className="priceCard-title">{item.title}</h5>
            <p className="priceCard-text">{item.text}</p>

            <ul className="price-list list-unstyled d-flex flex-column" role="list">
              {item.test?.map((t, index) => (
                <li key={index} className="price-list-item">
                  <CircleCheckBig className="price-icon" aria-hidden="true" />
                  <span className="price-list-text">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <button type="button" className="btn btn-primary w-100">
                {item.purchase}
              </button>

              <div className="d-flex align-items-end gap-2 mt-3">
                <span className="price-info">{item.price}</span>
                <span className="price-date">/ Mo.</span>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};



const PriceMods = () => {
  return (
    <div className='priceMods'>
    <div className="container">
      <div className="row align-items-stretch">
        {data.map((item, i) => (
          <PriceCard key={i} item={item} />
        ))}
      </div>
    </div>
    </div>
  );
};
 
  


export default PriceMods