import React, { useEffect, useMemo, useState } from "react";
import "./industry.css";
const Industry = () => {
  const [data, setData] = useState([]);
  const [Isloading, setIsLoading] = useState();
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
    let out= []
      for(let i = 0; i<data.length; i+=3 ){
          out.push(data.slice(i,i+3))
      }

      return out
  },[data])

  

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
            <button className="btn btn-primary">Request An Estimate</button>
          </div>
        </div>
        <div className="row ">
            <div className="industry-container">
                   {divider.map((item, index) => {
                       return(
                        <div key={index} className="industry-card-container"> 
                          <div className="industry-cards">
                            {item.map((subItem,subIndex) => {
                              return (
                                 <div  className="industry-card"  style={{backgroundImage:`url(${subItem.img})`}}  key={subIndex} > 
                                   <h1>{subItem.title}</h1>
                                   </div>
                              )
                            })}

                          </div>
                        
                        </div>
                           
                       )
              
            })}

              <div className="industry-dots">
                  {Array.from({length : divider.total},(_,i) => {
                       return(
                        <button className="badge"></button>
                       )
                  })}
              </div>
            </div>
       
         
         
        </div>
      </div>
    </section>
  );
};
export default Industry;
