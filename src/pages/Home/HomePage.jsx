import React from 'react'
import Header from "../../components/layout/Header/Header"
import Hero from '../../components/sections/Hero/Hero'
import FeaturesBar from '../../components/sections/FeaturesBar/FeaturesBar'
import About from '../../components/sections/About/About'
import Plans from '../../components/sections/Plans/Plans'

const HomePage = () => {
  return (
     <div>
        <Header></Header>
        <Hero></Hero>
        <FeaturesBar></FeaturesBar>
        <About></About>
        <Plans></Plans>
     </div>
  )
}

export default HomePage