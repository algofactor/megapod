import React from 'react'
import HeroSection from './HeroSection'

const MainHome = ({closeNav}) => {
  return (
    <div onClick={closeNav}>
        <HeroSection />
    </div>
  )
}

export default MainHome