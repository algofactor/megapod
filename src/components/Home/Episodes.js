import React from 'react'
import EpisodeCard from './EpisodeCard'
import styled from "styled-components"
// Styles
const EpisodesContainer = styled.div`
  padding: 6rem 2rem;
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