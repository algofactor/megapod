import React from 'react'
import Upcoming from './Upcoming'

const MainHome = ({closeNav}) => {
  return (
    <div onClick={closeNav}>
        <Upcoming />
    </div>
  )
}

export default MainHome