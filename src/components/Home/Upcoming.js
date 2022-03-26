import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import UpcomingCard from "./UpcomingCard";

// Styles
const UpcomingContainer = styled.div`
    padding: 5rem 2rem;
`
const UpcomingHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`
const HeaderText = styled.p`
    font-size: 2.3rem;
    font-weight: 700;
    color: #373737;
`
const HeaderLinks = styled.div``
const HeaderLink = styled(Link)`
    font-size: 1.1rem;
    margin: 0 1rem;
    text-decoration: none;
    color: #b7b7b7;
    font-weight: 700;
`
const UpcomingCards = styled.div`
    
`

const Upcoming = () => {
	return (
		<>
			<UpcomingContainer>
				<UpcomingHeader>
                    <HeaderText>Live & Upcoming</HeaderText>
                    <HeaderLinks>
                        <HeaderLink to='/'>All</HeaderLink>
                        <HeaderLink to='/'>Enterpreneurship</HeaderLink>
                        <HeaderLink to='/'>Media</HeaderLink>
                        <HeaderLink to='/'>Tech</HeaderLink>
                        <HeaderLink to='/'>Tutorials</HeaderLink>
                    </HeaderLinks>
                </UpcomingHeader>
                <UpcomingCards>
                    <UpcomingCard />
                </UpcomingCards>
			</UpcomingContainer>
		</>
	);
};

export default Upcoming;
