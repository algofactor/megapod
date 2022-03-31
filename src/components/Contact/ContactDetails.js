import React from "react";
import styled from "styled-components";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdClock } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { screens } from "../../data/Screens";
import ContactMessage from "./ContactMessage";

// Styles
const ContactDetailsContainer = styled.div`
	padding: 5rem 2rem;
	@media ${screens.laptopS} {
		padding: 5rem 1rem;
	}
`;
const DetailGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 2rem;
	margin-bottom: 2rem;
	@media ${screens.laptopS} {
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${screens.tabletS} {
		grid-template-columns: 1fr;
	}
`;
const DetailCard = styled.div`
	padding: 3rem 2rem;
	border: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	@media ${screens.laptopS} {
		margin-bottom: 2rem;
	}
`;
const DetailIcon = styled.p`
	font-size: 3.5rem;
	color: #6763fd;
	margin-bottom: 0.5rem;
`;
const DetailTitle = styled.p`
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 0.7rem;
	text-transform: capitalize;
	color: #353535;
`;
const DetailDesc = styled.p`
	font-size: 95%;
	color: #8d8d8d;
	line-height: 1.5;
`;

const ContactDetails = () => {
	return (
		<ContactDetailsContainer>
			{/* <Map /> */}
			<DetailGrid>
				<DetailCard>
					<DetailIcon>
						<IoLocationOutline />
					</DetailIcon>
					<DetailTitle>Address</DetailTitle>
					<DetailDesc>
						59 South Blue Spring Street, Ozone Park, New York, United States.
					</DetailDesc>
				</DetailCard>
				<DetailCard>
					<DetailIcon>
						<FiPhoneCall />
					</DetailIcon>
					<DetailTitle>Phone</DetailTitle>
					<DetailDesc>(+22) 333 333 3333</DetailDesc>
					<DetailDesc>(+22) 555 555 5555</DetailDesc>
				</DetailCard>
				<DetailCard>
					<DetailIcon>
						<IoMdClock />
					</DetailIcon>
					<DetailTitle>Working Hours</DetailTitle>
					<DetailDesc>Open: 10am to 6pm</DetailDesc>
					<DetailDesc>( Sunday Closed)</DetailDesc>
				</DetailCard>
			</DetailGrid>
			<ContactMessage />
		</ContactDetailsContainer>
	);
};

export default ContactDetails;
