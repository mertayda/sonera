import React from 'react'
import { Instagram,Facebook, PhoneCall, Phone } from 'lucide-react';
import "./footer.css"

const Footer = () => {
  return (
    <footer>  
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6  col-lg-3'>
                    <div className='footer-widget'>
                    <div className='footer-widget-title'>
                        <h3>
                            quick contact
                        </h3>
                    </div>
                    <div className='footer-widget-content'>
                        <p>If you have any questions or need help, feel free to contact with our team.</p>
                        <ul>
                            <li className='phone'> <a href="#"> <Phone/>+5555555</a> </li>
                            <li className='address'><a href="#">2307 Beverley Rd Brooklyn, New York 11226 United States.</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className='col-12 col-md-6  col-lg-2'>
                    <div className='footer-widget'>
                            <div className='footer-widget-title'>
                        <h3>
                            Company
                        </h3>
                    </div>
                    <div className='footer-widget-content'>
                        <ul>
                            <li> <a href="">      About Us</a>
                          
                            </li>
                            <li> <a href="" >   Leadership Team</a>
                              
                            </li>
                            <li> <a href="">  Contacts</a>
                               
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                     <div className='col-12 col-md-6 col-lg-2'>
                    <div className='footer-widget'>
                            <div className='footer-widget-title'>
                        <h3>
                          Services
                        </h3>
                    </div>
                    <div className='footer-widget-content'>
                        <ul>
                            <li> <a href="">  Commercial Cleaning</a>
                            
                            </li>
                            <li> <a href="">  Disinfection Cleaning</a>
                            
                            </li>
                            <li> <a href="">Janitorial Services</a>
                                
                            </li>
                            <li> <a href="">Comprehensive Cleaning</a>
                                
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                        <div className='col-12 col-md-6   col-lg-2'>
                    <div className='footer-widget'>
                            <div className='footer-widget-title'>
                        <h3>
                          Support
                        </h3>
                    </div>
                    <div className='footer-widget-content'>
                        <ul>
                            <li> <a href="">  Become a Franchise</a>
                            
                            </li>
                            <li> <a href="">  Terms & Conditions</a>
                           
                            </li>
                            <li> <a href="">   Cleaning Tips</a>
                            
                            </li>
                            <li> <a href="">  Products</a>
                              
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className='col-12 col-md-6  col-lg-3'>
                    <div className='widget-content'>
                        <a href=""> Request An Estimate</a>
                        <ul>
                            <li>
                                <a href="">    <Instagram /> </a>
                            </li>
                            <li>
                                <a href="">    <Facebook /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer