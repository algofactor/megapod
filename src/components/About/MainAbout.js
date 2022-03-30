import React from 'react'
import Support from '../Support'
import AboutDesc from './AboutDesc'
import SupportBgd from '../../img/call-about-bg.jpg'
import Guests from './Guests'

const MainAbout = ({closeNav}) => {
  return (
    <div onClick={closeNav}>
      <AboutDesc />
      <Support img={SupportBgd} />
      <Guests />
    </div>
  )
}

export default MainAbout