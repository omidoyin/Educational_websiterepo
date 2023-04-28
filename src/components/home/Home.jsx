import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import Habout from '../home/Habout'
import Test from './testimonial/Test'



function Home() {
  return (
    <div>
        <Hero/>
        <AboutCard/>
        <Habout/>
        <Test/>
       
    </div>
  )
}

export default Home