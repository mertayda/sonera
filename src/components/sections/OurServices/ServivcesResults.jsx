import React from "react";
import { CircleStar, BadgeCheck, MoveRight } from "lucide-react";
import { Pie, PieChart, Cell } from "recharts";
import Accordion from "../../accordion/Accordion";

const data = [
  { name: "Design", value: 400 },
  { name: "Development", value: 300 },
  { name: "Marketing", value: 200 },
  { name: "Operations", value: 100 },
];

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ServivcesResults = () => {
  return (
    <section className="servicesResults">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="row">
              <div className="col">
                <div className="commercial-container">
                  <div className="commercial-body">
                    <h3>services we offer</h3>
                    <ul className="  commercial-list  list-unstyled">
                      <li className="">
                        Commercial Disinfection
                        <span>
                          <MoveRight></MoveRight>
                        </span>
                      </li>
                      <li className="">
                        Commercial Disinfection
                        <span>
                          <MoveRight></MoveRight>
                        </span>
                      </li>
                      <li className="">
                        Commercial Disinfection
                        <span>
                          <MoveRight></MoveRight>
                        </span>
                      </li>
                      <li className="">
                        Commercial Disinfection
                        <span>
                          <MoveRight></MoveRight>
                        </span>
                      </li>
                      <li className="">
                        Commercial Disinfection
                        <span>
                          <MoveRight></MoveRight>
                        </span>
                      </li>
                      <li className="">
                        Commercial Disinfection
                        <span>
                          <MoveRight></MoveRight>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <div>
              <h3>Overview</h3>
              <p>
                With more than 35 years getting to know every kind of client,
                from homeowners to facility & property managers to healthcare
                decision-makers. Our relentless passion for excellence and
                customer service means we invest in continuously improving our
                processes. Sanera is a leading provider of cleaning and
                restoration services in both the residential and commercial
                markets, operating through an extensive service network.
              </p>
              <p>
                Business owners and property managers are key to keeping
                patrons, guests, patients and visitors safe. They are
                responsible for taking every step to ensure the health and
                safety of their communities. Whether a large retail shop,we have
                the disinfection know-how to customize a cleaning plan for your
                needs.
              </p>
            </div>
            <div className="commercialResults">
              <div className="commercialResults-body">
                <div className="row justify-content-center rounded-1 p-5">
                  <div className="col-3">
                    {" "}
                    <CircleStar className="icon-color" size={100} />{" "}
                  </div>
                  <div className="col-12 col-md-7">
                    <h3 className="commercial-title">Commercial</h3>
                    <p className="commercial-text">
                      Providing commercial cleaning services which will help you
                      protect your customers and employees, we care about clean
                      and it shows in our work, our people, and also in our
                      commitment to delivering on our word, every day.
                    </p>
                    <ul className="row list-unstyled commercial-provide-serivices">
                      <li className="col-12 col-md-6 mb-2">
                        {" "}
                        <BadgeCheck className="commercial-badge" />
                        <span>Office Buildings</span>
                      </li>
                      <li className="col-12 col-md-6 mb-2">
                        {" "}
                        <BadgeCheck className="commercial-badge" />
                        <span>Office Buildings</span>
                      </li>
                      <li className="col-12 col-md-6 mb-2">
                        {" "}
                        <BadgeCheck className="commercial-badge" />
                        <span>Office Buildings</span>
                      </li>
                      <li className="col-12 col-md-6 mb-2">
                        {" "}
                        <BadgeCheck className="commercial-badge" />
                        <span>Office Buildings</span>
                      </li>
                      <li className="col-12 col-md-6 mb-2">
                        {" "}
                        <BadgeCheck className="commercial-badge" />
                        <span>Office Buildings</span>
                      </li>
                      <li className="col-12 col-md-6 mb-2">
                        {" "}
                        <BadgeCheck className="commercial-badge" />
                        <span>Office Buildings</span>
                      </li>

                      <li className="col-12 col-md-6">
                        {" "}
                        <BadgeCheck className="commercial-badge" />
                        <span>Office Buildings</span>
                      </li>
                    </ul>
                    <div>
                      <button className="btn btn-success">Purchase Now</button>
                      <span>650$/</span> <span>Mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <h3>Stats and Charts</h3>
              <div className="col-12 col-md-6">
                 <div className="row">
                    <div className="col">
                      <p>
                        When an employee or patient tests COVID positive, you should temporarily shut your doors. Our team can help you quickly open up again as our network of local businesses ensures fast response times and excellent care from a team that is equipped with the advanced tools and technology in adherence to CDC guidelines to get your facility safely open again
                      </p>
                      <p>
                        Switching from after-hours to a daytime cleaning program can reduce your cleaning costs as well as energy expenses. Since no cleaning staff is required on-site after hours, there's no need for running lights or building heating/cooling, and your doors stay locked at the end of the day.
                      </p>
                      <p>
                        To keep your business running uninterrupted, we offer cost effective daytime janitorial cleaning services.
                      </p>
                    </div>
                 </div>
              </div>
              <div className="col-12 col-md-6">
                <PieChart
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    maxHeight: "70vh",
                    aspectRatio: 1,
                  }}
                  responsive
                >
                  <defs>
                    <pattern
                      id="pattern-checkers"
                      x="0"
                      y="0"
                      width="10"
                      height="10"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        className="checker"
                        x="0"
                        width="5"
                        height="5"
                        y="0"
                      />
                      <rect
                        className="checker"
                        x="10"
                        width="5"
                        height="5"
                        y="10"
                      />
                    </pattern>
                  </defs>
                  <Pie data={data} label>
                    {data.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                  </Pie>
                </PieChart>{" "}
              </div>
            </div>
            <div className="row">
                  <div className="col">
                    <h2>how it works?!</h2>
                      <p>
                        We know each business facility is unique. That's why we offer a wide range of cleaning services and plans with scheduling and timing options that suit a variety of businesses. No matter how ordinary or exceptional the task, from carpet cleaning to air duct cleaning and other specialty services.
                      </p>

                  </div>
            </div>
            <div className="row">
              <div className="col">
                  <h3>why us!</h3>
                  <p>
                    Keep your business open, safely. A primary driver of workplace contamination is the fact that people can spread germs long before showing any symptoms. Routine cleaning and disinfecting are the only way to keep your environment safe from unexpected outbreaks or hygiene risks.
                  </p>
              </div>
            </div>
            <div className="row">
               <div className="col">
                <h3>Key Benefits</h3>
                <Accordion></Accordion>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServivcesResults;
