import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SupportBgd from '../../img/breadcrumb-bg.jpg'
import { screens } from '../../data/Screens'

// Styles
const SupportContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 1rem;
    background-image: url(${SupportBgd});
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
const SupportBtn = styled(Link)`
    text-decoration: none;
    text-transform: capitalize;
	color: #fff;
	background-color: #6763fd;
	border-radius: 7px;
	font-size: 90%;
	font-weight: 700;
	padding: 1rem 1.5rem;
	width: 120px;
	display: flex;
	justify-content: center;
`

const Support = () => {
  return (
    <SupportContainer>
        <SupportHeader>Support the show</SupportHeader>
        <SupportDesc>Enjoy listening to our podcast? Consider making a donation!</SupportDesc>
        <SupportBtn to='/'>Make a donation</SupportBtn>
    </SupportContainer>
  )
}

export default Support