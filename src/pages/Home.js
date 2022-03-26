import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import MainHome from '../components/Home/MainHome'

const Home = ({nav, showNav, closeNav}) => {
  return (
    <>
        <HeroSection nav={nav} showNav={showNav} closeNav={closeNav} />
        <MainHome closeNav={closeNav} />
    </>
  )
}

export default Home