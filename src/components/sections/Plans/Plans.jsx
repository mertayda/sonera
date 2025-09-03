import React, { useEffect, useMemo, useState } from "react";
import "./Plan.css";


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
  ServerCog
} from "lucide-react";

export const services = [
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


const Plans = () => {

const [index,setIndex] = useState(0)

  
const divider =  useMemo(() => {
    let out = []
   for(let i = 0; i<services.length;i+=4){
      out.push( services.slice(i,i+4)) 
   }

   return out;
}, [services])
  
let total = divider.length



let goTo = (p) => {
  setIndex(p)
 
}

let next = () => {
   setIndex((prev) => (prev + 1) % total)
}



useEffect(() => {
  const timer =  setTimeout(() => {
      next()
    }, 2000)
    
      return () => clearTimeout(timer);

},[index,total])





  return (
    <section className="services">
      <div className="container">
        <div className="row mb-5 ">
          <div className="col-12  text-center">
              <p className="services-title  fs-5 fst-italic">
                Cleaning Plans That Meets Your Needs
              </p>
              <h3 className="fs-1">
                Specialist Disinfection That Fits Your Premises
              </h3>
         </div>
       </div>
        <div className="row">
          <div className="carousel-container">
            <div className="slides-container" style={{transform : `translateX(-${index  * 100}% )`}} >
               {divider.map((item, i) => (
                  <div className="slide-width" key={i}>
                      <div className="simpleSlide-Container">
                      {item.map((x,sub) => {
                         let Icon = x.icon
                         return( 
                          <div className="simpleSlide" key={sub}> 
                            <div className="simpleSlide-body">
                                <div className="mb-3">
                                <Icon  size={40}></Icon>
                              </div>
                              <h5 className="">{x.title}</h5>
                              <p>{x.description}</p>
                              <button className="simpleBtn btn btn-success  mt-auto  w-100">{x.linkD}</button>
                            </div>
                            

                          </div>
                         )
                      })}
                  </div>
                  </div>
               )
                 
               )}
            </div>
             
          </div>
        </div>
        <div className="row   mt-3">
          <div className="col-12 d-flex justify-content-center gap-2">
             <div className="dot">
             {Array.from({length:total}, ((_,i) => {
               return <span className={`${index === i ? "active" : ""}`}   onClick={() => goTo(i)} key={i}></span>
             }))}
             </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Plans;
