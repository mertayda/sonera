import React from 'react'
import Header from "../../components/layout/Header/Header"
import Hero from '../../components/sections/Hero/Hero'
import FeaturesBar from '../../components/sections/FeaturesBar/FeaturesBar'

const HomePage = () => {
  return (
     <div>
        <Header></Header>
        <Hero></Hero>
        <FeaturesBar></FeaturesBar>
     </div>
  )
}

export default HomePage