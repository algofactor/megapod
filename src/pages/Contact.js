import React from 'react'
import ContactDetails from '../components/Contact/ContactDetails'
import HeroSection from '../components/Contact/HeroSection'

const Contact = ({nav, showNav, closeNav}) => {
  return (
    <>
      <HeroSection nav={nav} showNav={showNav} closeNav={closeNav}/>
      <ContactDetails />
    </>
  )
}

export default Contact