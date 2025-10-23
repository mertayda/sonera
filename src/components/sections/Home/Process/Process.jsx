import React from 'react'
import Carousel from '../../../carousel/Carousel'
import { CalendarClock, Shield, Sparkles, ClipboardCheck } from "lucide-react";
import "./Process.css"

const features = [
  {
    id: "01",
    title: "Online Scheduling In Few Clicks",
    description: "Book your cleaning or disinfection appointment online within minutes, hassle-free.",
    linkText: "Explore more",
    link: "#",
    icon: CalendarClock,
  },
  {
    id: "02",
    title: "Fast Disinfection Process",
    description: "We carry out the disinfection in just a couple of hours depending on house size and amount.",
    linkText: "Explore more",
    link: "#",
    icon: Sparkles,
  },
  {
    id: "03",
    title: "Safe & Certified Methods",
    description: "We use eco-friendly and certified solutions to ensure a safe and effective disinfection.",
    linkText: "Explore more",
    link: "#",
    icon: Shield,
  },
  {
    id: "04",
    title: "Trusted & Experienced Team",
    description: "Our vetted professionals guarantee reliable service and top-quality standards.",
    linkText: "Explore more",
    link: "#",
    icon: ClipboardCheck,
  },
];


const Process = () => {
  return (
    <section className='process'>
    <div className='container'>
        <div className='row '>
            <div className='col d-flex flex-column align-items-center'>
                <h2 className='process-title fs-5 fst-italic'>See How It Works!</h2>
                <p className='fs-1'>Easy Steps For A Clean And Healthy Environment</p>
            </div>
        </div>
          <Carousel item={features}></Carousel>
    </div>
    </section>
  )
}

export default Process