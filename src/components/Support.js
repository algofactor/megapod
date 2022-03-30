import React from 'react'
import styled from 'styled-components'
import { screens } from '../data/Screens'
import { ButtonSmall } from './ButtonSmall'

// Styles
const SupportContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 1rem;
    background-image: url(${props => props.supportBg});
    background-position: center;
    background-size: cover;
    color: #fff;
`
const SupportHeader = styled.p`
    font-size: 3rem;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 1rem;
    @media ${screens.tablet} {
        font-size: 2rem;
    }
`
const SupportDesc = styled.p`
    font-size: 1.3rem;
    margin-bottom: 2rem;
    text-align: center;
    @media ${screens.tablet} {
        font-size: 1rem;
    }
`

const Support = ({img}) => {
  return (
    <SupportContainer supportBg={img}>
        <SupportHeader>Support the show</SupportHeader>
        <SupportDesc>Enjoy listening to our podcast? Consider making a donation!</SupportDesc>
        <ButtonSmall>Make a donation</ButtonSmall>
    </SupportContainer>
  )
}

export default Support