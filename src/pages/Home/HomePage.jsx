import React from 'react'
import Header from "../../components/layout/Header/Header"
import Hero from '../../components/sections/Home/Hero/Hero'
import FeaturesBar from '../../components/sections/Home/FeaturesBar/FeaturesBar'
import About from '../../components/sections/Home/About/About'
import Plans from '../../components/sections/Home/Plans/Plans'
import Offers from '../../components/sections/Home/Offers/Offers'
import Process from '../../components/sections/Home/Process/Process'
import Industry from '../../components/sections/Home/Industry/Industry'
import Estimate from '../../components/sections/Home/Estimate/Estimate'
import Articles from '../../components/sections/Home/Articles/Articles'


const HomePage = () => {
  return (
     <div>
      
        <Hero></Hero>
        <FeaturesBar></FeaturesBar>
        <About></About>
        <Plans></Plans>
        <Offers></Offers>
        <Process></Process>
        <Industry></Industry>
        <Estimate></Estimate>
        <Articles></Articles>
       
        
     </div>
  )
}

export default HomePage