import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import Habout from '../home/Habout'
import Test from './testimonial/Test'
import Hblog from './Hblog'
import Hprice from './testimonial/Hprice'



function Home() {
  return (
    <div>
        <Hero/>
        <AboutCard/>
        <Habout/>
        <Test/>
        <Hblog/>
        <Hprice/>
       
    </div>
  )
}

export default Home