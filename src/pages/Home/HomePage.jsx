import React from 'react'
import Header from "../../components/layout/Header/Header"
import Hero from '../../components/sections/Hero/Hero'
import FeaturesBar from '../../components/sections/FeaturesBar/FeaturesBar'
import About from '../../components/sections/About/About'
import Plans from '../../components/sections/Plans/Plans'
import Offers from '../../components/sections/Offers/Offers'
import Process from '../../components/sections/Process/Process'
import Industry from '../../components/sections/Industry/Industry'
import Estimate from '../../components/sections/Estimate/Estimate'
import Articles from '../../components/sections/Articles/Articles'


const HomePage = () => {
  return (
     <div>
        <Header></Header>
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