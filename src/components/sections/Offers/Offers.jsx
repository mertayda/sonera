import React from 'react'
import { BrushCleaning } from 'lucide-react';
import "./Offers.css"

const Offers = () => {
  return (
    <section className='offers'>
        <div className='container-fluid'>
            <div className='row g-0'>
                <div className='col-6'>
                    <div className='card-container'>
                      <div className='card-elements'>
                                  <div className='card'>
                          <div className='card-body'>
                              <div className='card-title'>
                        <h4>Residential</h4>
                           
                                   <BrushCleaning />
                                    <p>We provide residential house cleaning services and always focus on cleaning for health, our extensive industry experience give us a leg up when it comes to leaving your house cleaner than ever before.</p>
                            </div>
                      
                       
                           
                                <div className='row '>
                                    <div className='col-6'>
                                            <ul className='d-flex flex-column list-unstyled'>
                                <li>Window sills & ledges</li> 
                                <li>Hard surface floors</li>
                                <li>Remove cobwebs</li>
                                <li>Empty trash</li>
                               
                             </ul>
                                    </div>
                                <div className='col-6'>
                                       <ul className='d-flex  flex-column list-unstyled'>
                                 <li>Appliance exteriors</li>
                                <li>Ranges and ovens</li>
                                <li>Cabinet doors</li>
                             </ul>
                                </div>
                              
                                </div>
                                <div className='row'>
                                    <div className='d-flex align-items-center gap-5'>
                                        <button className='btn btn-success'>
                                            Purchase Now
                                        </button>
                                        <div className=''>
                                        $150 / <span>Mo</span>
                                    </div>
                                    </div>
                                    
                                </div>
                        </div>
                    </div>
                      </div>
                    </div>
                
                </div>
                <div className='col-6'>
                    <div className='card-container__2' style={{backgroundColor:"#276BBA"}}>
                                 <div className='card'>
                          <div className='card-body'>
                              <div className='card-title'>
                            <h4>Residential</h4>
                           
                                   <BrushCleaning />
                                    <p>We provide residential house cleaning services and always focus on cleaning for health, our extensive industry experience give us a leg up when it comes to leaving your house cleaner than ever before.</p>
                            </div>

                                <div className='row'>
                                    <div className='col-6'>
                                            <ul className='d-flex flex-column list-unstyled'>
                                <li>Window sills & ledges</li> 
                                <li>Hard surface floors</li>
                                <li>Remove cobwebs</li>
                                <li>Empty trash</li>
                               
                             </ul>
                                    </div>
                                <div className='col-6'>
                                       <ul className='d-flex  flex-column list-unstyled'>
                                 <li>Appliance exteriors</li>
                                <li>Ranges and ovens</li>
                                <li>Cabinet doors</li>
                             </ul>
                                </div>
                              
                                </div>
                                <div className='row'>
                                    <div className='d-flex align-items-center gap-5'>
                                        <button className='btn btn-success'>
                                            Purchase Now
                                        </button>
                                        <div className=''>
                                        $150 / <span>Mo</span>
                                    </div>
                                    </div>
                                    
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Offers