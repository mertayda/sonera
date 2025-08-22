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
            {features.map((item, index) => (
              <div
                className= {item.reservation ? "feature-card-big" : "feature-card"} 
                 key={index}
                  style={
                  item.reservation && {
                    backgroundImage: `linear-gradient(rgba(80, 152, 180, 0.85), rgba(80, 152, 180, 0.85)), url(${item.reservation})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                 

                  }
                }
              >
                {item.badge && <img src={item.badge} className="position-absolute top-0 end-0 "></img>}
                <h5>{item.title}</h5>
                <p>{item.text}</p>
                <a className="badge text-bg-success" href={item.link}>
                  {" "}
                  <MoveRight></MoveRight> {item.direct}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
