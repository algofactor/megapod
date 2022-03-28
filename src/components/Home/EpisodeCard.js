import React from "react";
import styled from "styled-components";
import {IoPricetagsOutline, IoTimeOutline, IoCalendarNumberSharp} from "react-icons/io5"
import {FaPlayCircle} from "react-icons/fa"
import { EpisodeData } from "../../data/EpisodeData";
// Styles
const CardContainer = styled.div`
	border-radius: 20px;
	background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
	color: #fff;
	padding: 1rem;
	height: 370px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const TopLevel = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-size: 85%;
	font-weight: 700;
`;
const TopOne = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	padding: 0.5rem 1rem;
	border-radius: 30px;
    display: flex;
    align-items: center;
`;
const TopText = styled.p`
	margin-left: 0.5rem;
`;
const MidLevel = styled.div`
    /* text-align: center; */
    color: #6763fd;
    font-size: 3.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;

const BottomLevel = styled.div``;
const BottomText = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: .7rem;
    text-transform: capitalize;
`;
const BottomDate = styled.p`
    display: flex;
    font-size: 95%;
`;
const BottomIcon = styled.p`
    color: #6763fd;
    margin-right: .2rem;
    font-size: 1.1rem;
`;

const EpisodeCard = () => {
	return (
		EpisodeData.map(data =>(
            <CardContainer img={data.image}>
			<TopLevel>
				<TopOne>
                    <IoPricetagsOutline />
					<TopText>{data.genre}</TopText>
				</TopOne>
				<TopOne>
                    <IoTimeOutline />
					<TopText>{data.time}</TopText>
				</TopOne>
			</TopLevel>
			<MidLevel><FaPlayCircle /></MidLevel>
			<BottomLevel>
				<BottomText>{data.title}</BottomText>
				<BottomDate><BottomIcon><IoCalendarNumberSharp /></BottomIcon> {data.date}</BottomDate>
			</BottomLevel>
		</CardContainer>
        ))
	);
};

export default EpisodeCard;
