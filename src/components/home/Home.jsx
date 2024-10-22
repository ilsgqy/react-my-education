import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HCourse from './HCourse'
import Test from './testimonal/Test'
import Hblog from './Hblog'
import Hprice from './Hprice'

const Home = () => {
  return (
    <>
      <Hero/>
      <AboutCard/>
      <HCourse/>
      <Test/>
      <Hblog/>
      <Hprice />
    </>
  )
}

export default Home
