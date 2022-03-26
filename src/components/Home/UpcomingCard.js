import React from "react";
import { UpcomingData } from "../../data/UpcomingData";
import Audio from "../Audio";
import styled from "styled-components"

// Styles
const UpcomingCardContainer = styled.div`
    display: flex;
    /* border-radius: 4px;
    border: 1px solid #373737; */
`
const CardImage = styled.img`
    height: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`
const CardContent = styled.div`
    padding: 2rem;
    border: 1px solid #ebebeb;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`
const CardDetails = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
`
const CardDetail = styled.div`
    margin-right: 2rem;
    font-size: 80%;
    color: #b7b7b7;
`
const DetailText = styled.p``
const CardHeader = styled.p`
    font-size: 1.3rem;
    color: #353535;
	font-weight: 700;
	width: 80%;
	line-height: 1.2;
	margin-bottom: 1rem;
    text-transform: capitalize;
`
const CardDesc = styled.p`
    font-size: 90%;
    margin-bottom: 2rem;
    color: #8d8d8d;
`

const UpcomingCard = () => {
	return (
        UpcomingData.map((data) => (
		<UpcomingCardContainer>
			<CardImage src={data.image} alt={data.name} />
				{/* <img src={data.image} alt={data.name} /> */}
			{/* </CardImage> */}
			<CardContent>
				<CardDetails>
					<CardDetail>
						<DetailText>{data.date}</DetailText>
					</CardDetail>
					<CardDetail>
						<DetailText>{data.artist}</DetailText>
					</CardDetail>
					<CardDetail>
						<DetailText>{data.genre}</DetailText>
					</CardDetail>
				</CardDetails>
				<CardHeader>{data.title}</CardHeader>
                <CardDesc>{data.desc}</CardDesc>
                <Audio music={data.music} color='grey' />
			</CardContent>
		</UpcomingCardContainer>
	)));
};

export default UpcomingCard;
