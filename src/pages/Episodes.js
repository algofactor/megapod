import React from 'react'
import HeroSection from '../components/Episodes/HeroSection'
import Upcoming from '../components/Home/Upcoming'

const Episodes = ({nav, showNav, closeNav}) => {
  return (
    <>
      <HeroSection nav={nav} showNav={showNav} closeNav={closeNav}/>
      <Upcoming />
    </>
  )
}

export default Episodes