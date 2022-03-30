import React from 'react'
import HeroSection from '../components/About/HeroSection'
import MainAbout from '../components/About/MainAbout'

const About = ({nav, showNav, closeNav}) => {
  return (
    <>
      <HeroSection nav={nav} showNav={showNav} closeNav={closeNav}/>
      <MainAbout closeNav={closeNav} />
    </>
  )
}

export default About