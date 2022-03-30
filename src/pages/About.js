import React from 'react'
import HeroSection from '../components/About/HeroSection'

const About = ({nav, showNav, closeNav}) => {
  return (
    <>
      <HeroSection nav={nav} showNav={showNav} closeNav={closeNav}/>
      <HeroSection />
    </>
  )
}

export default About