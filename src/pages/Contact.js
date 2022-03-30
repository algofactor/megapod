import React from 'react'
import HeroSection from '../components/Contact/HeroSection'

const Contact = ({nav, showNav, closeNav}) => {
  return (
    <>
      <HeroSection nav={nav} showNav={showNav} closeNav={closeNav}/>
    </>
  )
}

export default Contact