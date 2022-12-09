import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UpcomingCard from "./UpcomingCard";
import { screens } from "../../data/Screens";
import { UpcomingData } from "../../data/UpcomingData";

// Styles
const UpcomingContainer = styled.div`
	padding: 5rem 2rem;
	@media ${screens.tabletS} {
		padding: 5rem 1rem;
	}
`;
const UpcomingHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;
	width: 100%;
	@media ${screens.tabletS} {
		flex-direction: column;
		align-items: flex-start;
	}
`;
const HeaderText = styled.p`
	font-size: 2.3rem;
	font-weight: 700;
	color: #373737;
	@media ${screens.laptopS} {
		font-size: 1.9rem;
	}
	@media ${screens.tabletS} {
		margin-bottom: 1rem;
	}
`;
const HeaderLinksBox = styled.div`
	@media ${screens.tabletS} {
		overflow: hidden;
		overflow-x: auto;
		width: 100%;
		white-space: nowrap;
		&::-webkit-scrollbar {
			display: none;
		}
	}
`;
const HeaderLinks = styled.div``;
const HeaderLink = styled(Link)`
	font-size: 1.1rem;
	margin: 0 1rem;
	text-decoration: none;
	color: #b7b7b7;
	font-weight: 700;
	word-wrap: break-word;
	@media ${screens.laptopS} {
		font-size: 1rem;
		margin-right: 1rem;
		margin-left: 0;
	}
`;
const UpcomingCards = styled.div``;

const Upcoming = () => {
	// Logic
	return (
		<>
			<UpcomingContainer>
				<UpcomingHeader>
					<HeaderText>Live & Upcoming</HeaderText>
					<HeaderLinksBox>
						<HeaderLinks>
							<HeaderLink to='/'>
								All
							</HeaderLink>
							<HeaderLink to='/'>
								Enterpreneurship
							</HeaderLink>
							<HeaderLink to='/' >
								Media
							</HeaderLink>
							<HeaderLink to='/'>
								Tech
							</HeaderLink>
							<HeaderLink to='/'>
								Tutorials
							</HeaderLink>
						</HeaderLinks>
					</HeaderLinksBox>
				</UpcomingHeader>
				<UpcomingCards>
					{UpcomingData.map((data, index) => {
						return <UpcomingCard data={data} key={index} />;
					})}
				</UpcomingCards>
			</UpcomingContainer>
		</>
	);
};

export default Upcoming;
