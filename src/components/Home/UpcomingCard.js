import React from "react";
// import { UpcomingData } from "../../data/UpcomingData";
import Audio from "../Audio";
import styled from "styled-components";
import { screens } from "../../data/Screens";
import {IoCalendarNumberSharp, IoPricetagsOutline} from 'react-icons/io5'
import {FaUserAlt} from "react-icons/fa"

// Styles
const UpcomingCardContainer = styled.div`
	display: flex;
    margin-bottom: 1rem;
	@media ${screens.laptopS} {
		flex-direction: column;
	}
`;
const CardImage = styled.img`
	height: 100%;
    width: auto;
	border-radius: 20px 0 0 20px;
	@media ${screens.laptopS} {
		border-radius: 20px 20px 0 0;
	}
`;
const CardContent = styled.div`
	padding: 2rem;
	border: 1px solid #ebebeb;
	border-radius: 0 20px 20px 0;
    @media ${screens.laptopS} {
		border-radius: 0 0 20px 20px;
        padding: 2rem 1rem;
	}
`;
const CardDetails = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 1rem;
    @media ${screens.tabletS} {
        flex-direction: column;
    }
`;
const CardDetail = styled.div`
	margin-right: 2rem;
	font-size: 90%;
	color: #b7b7b7;
    @media ${screens.tabletS} {
        margin-bottom: .5rem;
        margin-right: 0;
    }
`;
const DetailText = styled.p`
	display: flex;
	align-items: center;
`;

const DetailIcon = styled.span`
	color: #6763fd;
	font-size: 1.2rem;
	margin-right: .3rem;
`

const CardHeader = styled.p`
	font-size: 1.3rem;
	color: #353535;
	font-weight: 700;
	width: 80%;
	line-height: 1.2;
	margin-bottom: 1rem;
	text-transform: capitalize;
`;
const CardDesc = styled.p`
	font-size: 90%;
	margin-bottom: 2rem;
	color: #8d8d8d;
`;

const UpcomingCard = ({ data }) => {
	return(
		<UpcomingCardContainer>
			<CardImage src={data.image} alt={data.name} />
			<CardContent>
				<CardDetails>
					<CardDetail>
						<DetailText><DetailIcon><IoCalendarNumberSharp /></DetailIcon>{data.date}</DetailText>
					</CardDetail>
					<CardDetail>
						<DetailText><DetailIcon><FaUserAlt /></DetailIcon>{data.artist}</DetailText>
					</CardDetail>
					<CardDetail>
						<DetailText><DetailIcon><IoPricetagsOutline /></DetailIcon>{data.genre}</DetailText>
					</CardDetail>
				</CardDetails>
				<CardHeader>{data.title}</CardHeader>
				<CardDesc>{data.desc}</CardDesc>
				<Audio music={data.music} color='grey' />
			</CardContent>
		</UpcomingCardContainer>
	);
};

export default UpcomingCard;
