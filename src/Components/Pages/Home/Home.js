import React from 'react'
import Products from '../Products/Products'
import Reviews from '../Review/Reviews'

import Banner from './Banner'
import BonasSection from './BonasSection'
import HeroBack from './HeroBack'
import Services from './Services'



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <BonasSection></BonasSection>
      <HeroBack></HeroBack>
    <Products></Products>

      <Reviews></Reviews>
   
   
   
   
    </div>

  )
}

export default Home