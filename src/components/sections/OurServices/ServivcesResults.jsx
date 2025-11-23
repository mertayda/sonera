import React, { useEffect, useRef, useState } from "react";
import { CircleStar, BadgeCheck, MoveRight, Wheat } from "lucide-react";
import { Pie, PieChart, Cell } from "recharts";
import Accordion from "../../accordion/Accordion";
import { Clock, Sparkles, Zap } from "lucide-react";
import ServicesSectors from "./ServicesSectors";
import image from "../../../../public/images/slide1.jpg";

const data = [
  { name: "Design", value: 400 },
  { name: "Development", value: 300 },
  { name: "Marketing", value: 200 },
  { name: "Operations", value: 100 },
];

const cleaningBenefits = [
  {
    icon: Clock,
    title: "Clean 25% Faster, Spotlessly",
    text: "Profess Grade Disinfectant Profess Grade Disinfectant Profess Grade Disinfectant Profess Grade Disinfectant",
  },
  {
    icon: Sparkles,
    title: "Hospital-Grade Clean, Less Effort",
    text: "Achieve a pristine, germ-free space in less time using our professional-strength disinfectant trusted by healthcare facilities nationwide.",
  },
  {
    icon: Zap,
    title: "Power Clean in 20% Less Time",
    text: "Deliver a flawless, hygienic finish faster with our premium disinfectant engineered for speed and unmatched cleanliness.",
  },
];

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const categories = [
  "Commercial Disinfection",
  "Commercial Cleaning",
  "Project Based Cleaning",
  "Disinfection Cleaning",
  "Industrial Deep Cleaning",
];

const sectorChartData = categories.map((name, index) => ({
  name,
  value: (index + 1) * 100, // test değer, istersen değişiriz
}));

const accordionData = [
  {
    title: "Which Plan Is Right For Me?",
    p: "With any financial product that you buy, it is important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the phone.",
  },
  {
    title: "How Do I Get Started?",
    p: "Getting started is easy. Simply sign up and follow the instructions to set up your account.",
  },
  {
    title: "What Are The Benefits?",
    p: "Our services offer a range of benefits including 24/7 support, competitive rates, and a user-friendly interface.",
  },
];

const ServivcesResults = () => {
  const [drag, setDrag] = useState(false);
  const [auto, setAuto] = useState(true);
  const whyUsCards = useRef(0);
  const whyUs = useRef(null);
  const pageLeft = useRef(0);
  const scrollSlide = useRef(0);

  const firstClone = cleaningBenefits.slice(-2).reverse();
  const lastClone = cleaningBenefits.slice(0, 2);

  const allClean = [...firstClone, ...cleaningBenefits, ...lastClone];

  useEffect(() => {
    if (!whyUs.current || !auto) return;
    const firstChildWith = whyUs.current.children[0]?.offsetWidth;

    const tick = setInterval(() => {
      const maxScroll = whyUs.current.scrollWidth - whyUs.current.offsetWidth;
      if (Math.ceil(whyUs.current.scrollLeft) >= maxScroll - 1) {
        whyUs.current?.classList.add("active");

        whyUs.current.scrollLeft = 0;
        requestAnimationFrame(() => {
          whyUs.current?.classList.remove("active");
        });
      } else {
        whyUs.current.scrollLeft += firstChildWith;
      }
    }, 3000);

    return () => clearInterval(tick);
  }, [auto]);

  const infiniteSlide = () => {
    if (!whyUs.current || !drag) return;
    const chWidth = whyUs.current?.offsetWidth;

    if (whyUs.current.scrollLeft <= 1) {
      whyUs.current.classList.add("dragging");
      whyUs.current.scrollLeft = whyUs.current.scrollWidth - 2 * chWidth;
      requestAnimationFrame(() => whyUs.current.classList.remove("dragging"));
    } else if (
      Math.ceil(whyUs.current.scrollLeft) >=
      whyUs.current.scrollWidth - chWidth - 1
    ) {
      whyUs.current.classList.add("dragging");
      whyUs.current.scrollLeft = 0;
      requestAnimationFrame(() => whyUs.current.classList.remove("dragging"));
    }
  };

  const pointerDown = (e) => {
    e.preventDefault();
    setAuto(false);
    setDrag(true);
    pageLeft.current = e.pageX;
    whyUs.current.classList.add("dragging");
    scrollSlide.current = whyUs.current.scrollLeft;
  };

  const pointerMove = (e) => {
    if (!drag) return;
    whyUs.current.scrollLeft =
      scrollSlide.current - (e.pageX - pageLeft.current);
  };

  const pointerUp = () => {
    setDrag(false);
    setAuto(true);
    requestAnimationFrame(() => {
      if (!whyUs.current) return;
      whyUs.current.classList.remove("dragging");
    });
  };

  const pointerLeave = () => {
    if (drag) pointerUp();
  };

  return (
    <section className="servicesResults">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="row">
              <div className="col">
                <div className="commercial-container">
                  <div className="commercial-body">
                    <h3>services we offer</h3>
                    <ul className="commercial-list  list-unstyled ">
                      {categories.map((category, i) => {
                        return (
                          <li
                            key={i}
                            className="d-flex justify-content-between gap-3 w-100"
                          >
                            {category}{" "}
                            <span className="">
                              <MoveRight size={20}></MoveRight>
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <div className="hot-offer">
                  <h5>Cleaning Excellence!</h5>
                  <span className="text-white">Expanded Disinfection Services Fits All needs!</span>
                  <span>
                    The processes and systems we put in place provide high
                    quality service with a focus on safety.
                  </span>
                  <button className="btn btn-info">Explore Our Offers</button>
                  <span>01061245741</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="row ">
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
            <div className="commercialResults shadow-sm">
              <div className="commercialResults-body">
                <div className="row justify-content-center rounded-1 p-5">
                  <div className="col-12 col-md-3">
                    {" "}
                    <CircleStar className="icon-color" size={100} />{" "}
                  </div>
                  <div className="col-12 col-md-9">
                    <h3 className="commercial-title">Commercial</h3>
                    <p className="commercial-text text-muted">
                      Providing commercial cleaning services which will help you
                      protect your customers and employees, we care about clean
                      and it shows in our work, our people, and also in our
                      commitment to delivering on our word, every day.
                    </p>
                    <ul className="row list-unstyled commercial-provide-serivices">
                      <li className="col-12 col-md-6 mb-2">
                        <BadgeCheck className="commercial-badge" />
                        <span className="ms-2 fw-light fs-6">
                          Office Buildings
                        </span>
                      </li>
                      <li className="col-12 col-md-6 mb-2">
                        <BadgeCheck className="commercial-badge" />
                        <span className="ms-2 fw-light fs-6">
                          Manufacturing Facilities
                        </span>
                      </li>
                      <li className="col-12 col-md-6 mb-2">
                        <BadgeCheck className="commercial-badge" />
                        <span className="ms-2 fw-light fs-6">
                          Educational Facilities
                        </span>
                      </li>
                      <li className="col-12 col-md-6 mb-2">
                        <BadgeCheck className="commercial-badge" />
                        <span className="ms-2 fw-light fs-6">
                          Medical Facilities
                        </span>
                      </li>
                      <li className="col-12 col-md-6 mb-2">
                        <BadgeCheck className="commercial-badge" />
                        <span className="ms-2 fw-light fs-6">
                          Government Buildings
                        </span>
                      </li>
                      <li className="col-12 col-md-6 mb-2">
                        <BadgeCheck className="commercial-badge" />
                        <span className="ms-2 fw-light fs-6">
                          Financial Institutions
                        </span>
                      </li>
                      <li className="col-12 col-md-6">
                        <BadgeCheck className="commercial-badge" />
                        <span className="ms-2 fw-light fs-6">
                          Religious Buildings
                        </span>
                      </li>
                    </ul>
                    <div>
                      <button className="btn btn-success">Purchase Now</button>
                      <span className="ms-2 fs-1">650$/</span> <span>Mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <h3>Stats and Charts</h3>
              <div className="col-12 col-lg-5">
                <div className="row">
                  <div className="col">
                    <p>
                      When an employee or patient tests COVID positive, you
                      should temporarily shut your doors. Our team can help you
                      quickly open up again as our network of local businesses
                      ensures fast response times and excellent care from a team
                      that is equipped with the advanced tools and technology in
                      adherence to CDC guidelines to get your facility safely
                      open again
                    </p>
                    <p>
                      Switching from after-hours to a daytime cleaning program
                      can reduce your cleaning costs as well as energy expenses.
                      Since no cleaning staff is required on-site after hours,
                      there's no need for running lights or building
                      heating/cooling, and your doors stay locked at the end of
                      the day.
                    </p>
                    <p>
                      To keep your business running uninterrupted, we offer cost
                      effective daytime janitorial cleaning services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7  d-flex flex-column align-items-center">
                <PieChart
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    maxHeight: "70vh",
                    aspectRatio: 1,
                  }}
                >
                  <Pie data={sectorChartData} nameKey="name">
                    {sectorChartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>

                {/* LEGEND */}
                <div className="chart-legend mt-3 row">
                  {sectorChartData.map((entry, index) => (
                    <div key={index} className="d-flex justify-content-center align-items-center  legend-item col-12 col-md-8 col-lg-5">
                   
                      <span className="legend-label">{entry.name}</span>
                         <span
                        className="legend-color"
                        style={{
                          backgroundColor: colors[index % colors.length],
                        }}
                      ></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>How it works?!</h3>
                <img
                  src={image}
                  alt="how-it-works"
                  className="img-fluid rounded-3 shadow-sm"
                />
                <p className="mt-3">
                  We know each business facility is unique. That's why we offer
                  a wide range of cleaning services and plans with scheduling
                  and timing options that suit a variety of businesses. No
                  matter how ordinary or exceptional the task, from carpet
                  cleaning to air duct cleaning and other specialty services.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>why us!</h3>
                <p>
                  Keep your business open, safely. A primary driver of workplace
                  contamination is the fact that people can spread germs long
                  before showing any symptoms. Routine cleaning and disinfecting
                  are the only way to keep your environment safe from unexpected
                  outbreaks or hygiene risks.
                </p>
              </div>
            </div>
            <div className="row overflow-hidden">
              <div
                className="whyUs"
                ref={whyUs}
                onScroll={infiniteSlide}
                onPointerDown={pointerDown}
                onPointerMove={pointerMove}
                onPointerUp={pointerUp}
                onPointerLeave={pointerLeave}
              >
                {allClean.map((item, index) => {
                  let Icon = item.icon;
                  return (
                    <div className=" whyUs-Card " ref={whyUsCards} key={index}>
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                      <Icon size={30} className="whyUs-Icon"></Icon>
                    </div>
                  );
                })}
              </div>
            </div>
          
            <div className="row">
              <div className="col">
                <h3>Industry We Serve</h3>
                <ServicesSectors></ServicesSectors>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServivcesResults;
