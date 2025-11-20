import React from 'react'
import HeroPrice from '../../components/sections/Prices/HeroPrice'
import PriceMods from '../../components/sections/Prices/PriceMods'
import Industry from '../../components/sections/Home/Industry/Industry'
import Satisfy from '../../components/sections/Prices/Satisfy'
import FrequentlyQuestion from '../../components/sections/Prices/FrequentlyQuestion'
import SendForm from '../../components/sections/Prices/SendForm'

const Prices = () => {
  return (
    <div>
        <HeroPrice></HeroPrice>
        <PriceMods></PriceMods>
        <Industry></Industry>
        <Satisfy></Satisfy>
        <FrequentlyQuestion></FrequentlyQuestion>
        <SendForm></SendForm>
    
        
    </div>
  )
}

export default Prices