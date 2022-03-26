import React from 'react'
import MainHome from '../components/Home/MainHome'
import Navbar from '../components/Navbar'

const Home = ({nav, showNav, closeNav}) => {
  return (
    <>
        <Navbar nav={nav} showNav={showNav} closeNav={closeNav} />
        <MainHome closeNav={closeNav} />
    </>
  )
}

export default Home