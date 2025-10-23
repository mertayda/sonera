import React, { useEffect,useState } from 'react'
import { Minus } from 'lucide-react';
import "./article.css"




const Articles = () => {
    const [data,setData] = useState([])
    const url = "/api/Articles.json"
    useEffect(() => {
         (async () => {
            try{
                 const response = await fetch(url)
            if(!response.ok) throw new Error("error")
            const datax = await response.json()
            setData(datax)
            }
            catch(error){
                console.error("error")
            }
         })()
    },[url])
     
  return (
     <section className='articles'>
        <div className='container'>
            <div className='row text-center mb-4'>
                <p className='article-info fs-5 fst-italic'>  Recent Articles</p>
                <h2 className='article-title'>Home Cleaning Tips</h2>
                
            </div>
            <div className='row'>
               {data.map((item,index) => {
                   return(
                     <div key={index}  className='col-12 col-md-6 col-lg-3 mb-3'> 
                            <div className='article-card'>
                                  <img src={item.image} alt=""  className='img-fluid'/>
                        <div className='article-card-body'>
                            <div className='article-card-author'>
                                <p className=''>{item.author}</p>
                              
                            </div>
                              <div className='article-card-title'>
                                    <h3>{item.title}</h3>
                                    <p>{item.p}</p>
                                     <button className='article-btn'>Read More<Minus></Minus> </button>
                                </div>
                        </div>
                        
                            </div>
                    </div>
                   )
               })}
                   
            </div>
        </div>
     </section>
  )
}

export default Articles