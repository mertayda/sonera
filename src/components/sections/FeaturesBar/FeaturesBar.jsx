import React from "react";
import { Move, MoveRight } from "lucide-react";
import badge from "../../../assets/images/badge.png";
import reservation from "../../../assets/images/reservation.jpg";
import "./FeatureBar.css"

const FeaturesBar = () => {
  const features = [
    {
      title: "Save Time & Money",
      text: "Outsourcing the cleaning services can help reduce cleaning time by 37%",
      direct: "Read More",
      link: "#",
    },
    {
      title: "Increase Productivity",
      text: "Cleaner environments improve employee productivity by up to 15%",
      direct: "Read More",
      link: "#",
    },
    {
      title: "Professional Quality",
      text: "Expert teams deliver consistent and high-quality cleaning results",
      direct: "Read More",
      link: "#",
    },
    {
      title: "Eco-Friendly Solutions",
      text: "We use safe and sustainable cleaning products for your workplace",
      direct: "Read More",
      link: "#",
      badge: badge,
      reservation: reservation,
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="feature-section">
          <div className="row flex-column flex-md-row  align-items-stretch h-100">
            {features.map((item,index) => {
                const TruereserVation = Boolean(item.reservation)
                 return (
                  <div  key={index} className={TruereserVation ? "feature-card-big" : " feature-card"}>
                    <h5 className="text-primary">{item.title}</h5>
                    <p className="">{item.text}</p>
                     {!TruereserVation  &&  <a  className="d-flex justify-content-center align-items-center  align-strecth  badge text-bg-primary   mt-auto  d-inline-flex gap-2" href={item.link}>
                      <MoveRight size={20}></MoveRight>
                      {item.direct}
                          
                      </a>}
                    {TruereserVation && <img className="position-absolute top-0 end-0" src={item.badge}></img>}
                </div>
                 )
            })}


          
        
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
