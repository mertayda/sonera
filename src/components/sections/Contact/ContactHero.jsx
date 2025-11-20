import React from "react";
import { PhoneCall, MapPin, Clock4 } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <h3>get in touch</h3>
            <p>
              We take great pride in everything that we do, control over
              products allows us to ensure our customers receive the best
              quality service.
            </p>
            <form action="">
              <div className="row">
                <div className="col-6">
                   <div>
                    <input type="text" placeholder="name" />
                   </div>
                </div>
                 <div className="col-6">
                  <input type="email" />
                 </div>
                   <div className="col-6">
                  <input type="phone" />
                 </div>
                   <div className="col-6">
                      <select name="" id="" placeholder="Select Your Services">
                         <option value="">Select Your Services </option>
                          <option value="">Services 1 </option>
                                 <option value="">Services 2 </option>
                      </select>
                 </div>
              </div>


            </form>
          </div>
          <div className="col-3">
            <div>
              <p>Cleaning Excellence!</p>
              <h3>Expanded Disinfection Services Fits All needs!</h3>
              <p>
                The processes and systems we put in place provide high quality
                service with a focus on safety.
              </p>
            </div>
            <div>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center gap-2">
                  <PhoneCall size={18} className="flex-shrink-0" />
                  <span>Emergency Line: (002) 01061245741</span>
                </li>

                <li className="d-flex align-items-center gap-2">
                  <MapPin size={18} className="flex-shrink-0" />
                  <span>Location: Brooklyn, New York, USA</span>
                </li>

                <li className="d-flex align-items-center gap-2">
                  <Clock4 size={18} className="flex-shrink-0" />
                  <span>Mon - Fri: 8:00 am - 7:00 pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
