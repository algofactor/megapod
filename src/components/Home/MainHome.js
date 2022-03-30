import React from 'react'
import Episodes from './Episodes'
import Support from '../Support'
import Upcoming from './Upcoming'
import SupportBgd from '../../img/breadcrumb-bg.jpg'

const MainHome = ({closeNav}) => {
  return (
    <div onClick={closeNav}>
        <Upcoming />
        <Support img={SupportBgd} />
        <Episodes />
    </div>
  )
}

export default MainHome