import React, { useEffect, useMemo, useRef, useState } from "react";
import "./industry.css";

const Industry = () => {
  const [data, setData] = useState([]);
  const [top, setTop] = useState(false);
  const [index,setIndex] = useState(0)
  const [width, setWidth] = useState(window.innerWidth);
  const wholeRef = useRef();
  const scrollGoLeft = useRef(0);
  const pageLeftX = useRef(0)
  const url = "/api/industry.json";



  // fetching api from local
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("test");
        const datax = await res.json();
        setData(datax);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [url]);

  useEffect(() => {
    const widthSize = () => {
      setWidth(window.innerWidth);
    };
    widthSize();
    window.addEventListener("resize", widthSize);
    return () => window.removeEventListener("resize", widthSize);
  }, []);

  const chunk = useMemo(() => {
    let out = [];
    let group = width > 768 ? 3 : 1;
    for (let i = 0; i < data.length; i += group) {
      out.push(data.slice(i, i + group));
    }

    return out;
  }, [data, width]);

  const goTo = (i) => {

    setIndex(i) 

  }
  

 useEffect(() => {
      const firstWidth = wholeRef.current.children[0]?.offsetWidth
     const w = wholeRef.current.scrollWidth - wholeRef.current.offsetWidth
      if(wholeRef.current.scrollLeft >= w){
      wholeRef.current.scrollLeft = 0
  }  else{

    wholeRef.current.scrollLeft = index * firstWidth
  } 
 },[index])




  const mouseDown = (e) => {
    e.preventDefault()
    setTop(true);
    wholeRef.current.classList.add("auto")
    pageLeftX.current = e.pageX;
    scrollGoLeft.current = wholeRef.current.scrollLeft;
      
  };

  const mouseMove = (e) => {
    if (!top) return;
    wholeRef.current.scrollLeft =
      scrollGoLeft.current - (e.pageX - pageLeftX.current);
  };

  const mouseUp = () => {
    setTop(false);
    wholeRef.current.classList.remove("auto")
  };

  const touchStart = (e) => {
    setTop(true)
      wholeRef.current.classList.add("auto")
    pageLeftX.current = e.touches[0].pageX
    scrollGoLeft.current = wholeRef.current.scrollLeft;
  };

  const touchMove = (e) => {
     if(!top) return
      wholeRef.current.scrollLeft =
      scrollGoLeft.current - (e.touches[0].pageX - pageLeftX.current);
  };

  const touchEnd = () => {
    setTop(false)
    wholeRef.current.classList.remove("auto")
  };





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
          <div
            className="industry-whole"
            ref={wholeRef}
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
            onMouseMove={mouseMove}
            onTouchStart={touchStart}
            onTouchMove={touchMove}
            onTouchEnd={touchEnd}
          >
            {chunk.map((item, index) => {
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
        <div className="row ">
          <div className="dot justify-content-center mt-3">
            {Array.from({ length: chunk.length }, (_, i) => {
              return (
                <span className={ index === i ?  "active"  : ""}  key={i} onClick={() => goTo(i)}     >
                  {" "}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Industry;
