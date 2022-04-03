import React from "react";
import { GuestsData } from "../../data/GuestsData";
import styled from "styled-components";
import { screens } from "../../data/Screens";

// Styles
const GuestsContainer = styled.div`
	padding: 8rem 3rem 11rem 3rem;
	@media ${screens.tabletS} {
		padding: 8rem 1rem 11rem 1rem;
	}
`;
const Title = styled.p`
	font-size: 2.7rem;
	font-weight: 700;
	text-align: center;
	margin-bottom: 3rem;
	@media ${screens.tabletS} {
		font-size: 2.4rem;
	}
`;
const GuestGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 1.5rem;
	@media ${screens.laptopS} {
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${screens.tabletS} {
		grid-template-columns: 1fr;
	}
`;
const GuestCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media ${screens.laptopS} {
		margin-bottom: 2rem;
	}
`;
const Image = styled.img`
	width: 100%;
	border-radius: 20px;
	margin-bottom: 2rem;
`;
const GuestName = styled.p`
	text-transform: capitalize;
	font-size: 1.3rem;
	font-weight: 700;
`;
const GuestTitle = styled.p`
	text-transform: uppercase;
	color: #6763fd;
	font-size: 90%;
	letter-spacing: 1px;
	font-weight: 700;
`;

const Guests = () => {
	return (
		<GuestsContainer>
			<Title>Featured Guests</Title>
			<GuestGrid>
				{GuestsData.map((data) => (
					<GuestCard key={data.name}>
						<Image src={data.image} />
						<GuestName>{data.name}</GuestName>
						<GuestTitle>{data.title}</GuestTitle>
					</GuestCard>
				))}
			</GuestGrid>
		</GuestsContainer>
	);
};

export default Guests;
