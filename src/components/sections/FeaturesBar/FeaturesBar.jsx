import React from "react";
import { MoveRight } from "lucide-react";
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
          <div className="row justify-content-center">
            {features.map((item,index) => {
                const TruereserVation = Boolean(item.reservation)
                 return (
                  <div  key={index} className={TruereserVation ? "feature-card-big" : " feature-card"}>
                    <h5 className="fw-ligh text-primary">{item.title}</h5>
                    <p className="fw-ligh">{item.text}</p>
                     {!TruereserVation  &&  <a  className="badge text-bg-primary" href={item.link}>{item.direct}</a>}

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
