import React, { useEffect, useMemo, useRef, useState } from "react";
import "./industry.css";
const Industry = () => {
  const [data, setData] = useState([]);
  const [index,setIndex] = useState(0)
  const [Isloading, setIsLoading] = useState();
  const wholeRef = useRef(null)
  const url = "/api/industry.json";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res) throw new Error(`${res.status}`);
        return res.json();
      })
      .then((comingData) => {
        setData(comingData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const divider = useMemo(() => {
    let out = [];
    for (let i = 0; i < data.length; i += 3) {
      out.push(data.slice(i, i + 3));
    }

    return out;
  }, [data]);


const total = divider.length

const goto = (index) => {
    setIndex(index)
    wholeRef.current.style.transform = `translateX(-${index * 100}%)`  
} 







  return (
    <section className="Industry">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>Industries We Serve</h2>
            <p>Helping Industries And All Types Of Facilities</p>
          </div>
          <div className="col-6">
            <p>
              Now more than ever, detailed disinfecting methods should be in
              place to protect the guests and employees of your facility. A
              clean & healthy environment is essential for all businesses and
              facilities.
            </p>
            <button className="btn btn-success">Request An Estimate</button>
          </div>
        </div>
        <div className="row"> 
          <div className="overflow-hidden">
                  <div className="industry-whole" ref={wholeRef}>
            {divider.map((item, index) => {
              return (
                <div key={index} className="industry-cards-container">
                  {item.map((subItem, subIndex) => {
                    return (
                      <div
                        key={subIndex}
                        className="industry-card"
                        style={{ backgroundImage: `url(${subItem.img})` }}
                      >
                        <div className="industry-title">
                          <h5>{subItem.title}</h5>
                        </div>
                        <div className="industry-info">
                          <span className="badge bg-success mb-3">
                            {subItem.hover.discount}
                          </span>
                          <h5 className="fw-semibold text-dark">
                            {subItem.hover.title}
                          </h5>
                          <p className="text-muted small">
                            {subItem.hover.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          </div>
    
        </div>
        <div className="row ">
          <div className="dot justify-content-center mt-3">
            {Array.from({ length:total }, (_, i) => {
              return <span  key={i} onClick={() => goto(i)}>  </span>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Industry;
