import React from 'react'
import Support from './Support'
import Upcoming from './Upcoming'

const MainHome = ({closeNav}) => {
  return (
    <div onClick={closeNav}>
        <Upcoming />
        <Support />
    </div>
  )
}

export default MainHome