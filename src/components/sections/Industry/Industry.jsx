import React, { useEffect, useMemo, useRef, useState } from "react";
import "./industry.css";

// datayı çek
// datayı ekran boyutuna göre chunk et
// boyuta göre kıyas yapılıcak ona göre event ateşlenicek sonraında ise kıyas yapılşıcak ve  chunk veya diğer data türü map ile loopa sokulucak


const Industry = () => {
  const [data, setData] = useState([]);
    const [top,setTop] = useState(false)
  const [width,setWidth] = useState(window.innerWidth)
  const wholeRef = useRef(null)
  
  const  scrollGoLeft = useRef(0)
  const  pageLeftX = useRef(0)

  const url = "/api/industry.json";




useEffect(() => {
    (async () => {
        try{
            const res = await fetch(url)
        if(!res.ok) throw new Error("test")
         const datax = await res.json()
        setData(datax)
        }
        catch(err){
          console.error(err)
        }
    })()
},[url])


  useEffect(() => {
      const widthSize = () => {setWidth(window.innerWidth)}
      widthSize()
      window.addEventListener("resize",widthSize)
      return () => window.removeEventListener("resize",widthSize)

  },[])


const chunk = useMemo(() => {
    let out = []
    let group = width > 768 ? 3 : 1
    for(let i = 0 ; i<data.length; i+=group){
      out.push(data.slice(i,i + group))
    }

    return out
},[data,width])

const mouseDown = (e) => {
  setTop(true)
  pageLeftX.current = e.pageX
  scrollGoLeft.current = wholeRef.current.scrollLeft

}

const mouseMove = (e) => {
  if(!top) return
  wholeRef.current.scrollLeft =  scrollGoLeft.current  - (e.pageX - pageLeftX.current)
  
}

const mouseUp = () => {
     setTop(false)
}


const goto = () => {

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
          <div className="in">
           <div className="industry-whole" ref={wholeRef} onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={mouseMove} >
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
    
        </div>
        <div className="row ">
          <div className="dot justify-content-center mt-3">
            {Array.from({ length:chunk.length }, (_, i) => {
              return <span  key={i} onClick={() => goto()} >  </span>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Industry;
