import React from 'react'
import Episodes from './Episodes'
import Support from './Support'
import Upcoming from './Upcoming'

const MainHome = ({closeNav}) => {
  return (
    <div onClick={closeNav}>
        <Upcoming />
        <Support />
        <Episodes />
    </div>
  )
}

export default MainHome