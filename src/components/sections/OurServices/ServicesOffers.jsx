import React, { useEffect,useState } from 'react'
import {
  ClipboardCheck,
  Leaf,
  BadgeCheck,
  CalendarClock,
  Sparkles,
  Shield,
  Headphones,
  Truck,
  MoveRight,
  MoveLeft,
  ServerCog,
  Icon
} from "lucide-react";


let services = [
  {
    title: "Comprehensive, Custom Services",
    description:
      "Using our products and methods, we guarantee top-quality results..",
    linkD: "Read More",
    direct: "#",
    icon: ClipboardCheck,
  },
  {
    title: "Eco-Friendly Methods",
    description:
      "Non-toxic, biodegradable solutions that keep people and pets safe while delivering a deep clean.",
    linkD: "Read More",
    direct: "#",
    icon: Leaf,
  },
  {
    title: "Insured & Vetted Team",
    description:
      "Background-checked technicians, full liability coverage, and consistent QA checks on every visit.",
    linkD: "Read More",
    direct: "#",
    icon: BadgeCheck,
  },
  {
    title: "Flexible Scheduling",
    description:
      "One-time, weekly, or monthly visits tailored to your traffic patterns and budgets.",
    linkD: "Read More",
    direct: "#",
    icon: CalendarClock,
  },
  {
    title: "Advanced Equipment",
    description:
      "State-of-the-art machines and tools that deliver deeper, faster, and more reliable results.",
    linkD: "Read More",
    direct: "#",
    icon: Sparkles,
  },
  {
    title: "Safety First",
    description:
      "Strict adherence to safety standards and protective measures at every stage of the process.",
    linkD: "Read More",
    direct: "#",
    icon: Shield,
  },
  {
    title: "24/7 Support",
    description:
      "Friendly customer service team ready to answer questions and resolve issues any time of day.",
    linkD: "Read More",
    direct: "#",
    icon: Headphones,
  },
  {
    title: "Fast Response",
    description:
      "Quick turnaround and on-time arrivals to keep your operations running smoothly.",
    linkD: "Read More",
    direct: "#",
    icon: Truck,
  },
];


const ServicesOffers = () => {
  return (
       <section className='serviceOffers'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-8 text-center mb-5'>
            <p className='fst-italic fs-5' style={{color:"#8DE0FE",letterSpacing:"2px"}}>Cleaning Plans That Meet Your Needs</p>
            <h2 className='fs-1'>
              Disinfection Services That Fit Your Premises
            </h2>
          </div>
        </div>
        
        <div className='row g-4'>
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className='col-12 col-md-6 col-lg-4'>
                <div className='serviceOffer-Container h-100'>
                  <div className='serviceOffer-Card h-100'>
                    <div className='serviceOffer-Card-icon mb-4'>
                      <Icon size={60} className='icon text-primary'/>
                    </div>
                    
                    <div className='serviceOffer-Card-body flex-grow-1'>
                      <h4 className='h5'>{item.title}</h4>
                      <p className='mt-3'>{item.description}</p>
                    </div>
                    
                    <div className='mt-auto'>
                      <a className='serviceOfferBtn' href="#">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



export default ServicesOffers