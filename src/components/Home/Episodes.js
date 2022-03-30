import React from 'react'
import EpisodeCard from './EpisodeCard'
import styled from "styled-components"
import {screens} from '../../data/Screens'

// Styles
const EpisodesContainer = styled.div`
  padding: 8rem 3rem 11rem 3rem ;
  @media ${screens.tabletS} {
    padding: 8rem 1rem 11rem 1rem;
  }
`
const Header = styled.p`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #353535;
  margin-bottom: 2rem;
`
const EpisodesCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  @media ${screens.laptopS}{
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${screens.tabletS} {
    grid-template-columns: 1fr;
  }
`

const Episodes = () => {
  return (
    <EpisodesContainer>
      <Header>Latest Episodes</Header>
      <EpisodesCards>
        <EpisodeCard />
      </EpisodesCards>
    </EpisodesContainer>
  )
}

export default Episodes