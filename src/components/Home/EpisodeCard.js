import React, { useState } from "react";
import styled from "styled-components";
import {
	IoPricetagsOutline,
	IoTimeOutline,
	IoCalendarNumberSharp,
} from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { EpisodeData } from "../../data/EpisodeData";
// Styles
const CardContainer = styled.div`
	border-radius: 20px;
	background-image: url(${(props) => props.img});
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
	/* display: none; */
`;

const BottomLevel = styled.div``;
const BottomText = styled.p`
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 0.7rem;
	text-transform: capitalize;
`;
const BottomDate = styled.p`
	display: flex;
	font-size: 95%;
	/* display: ${props => props.visible ? 'flex' : 'none'}; */
`;
const BottomIcon = styled.span`
	color: #6763fd;
	margin-right: 0.2rem;
	font-size: 1.1rem;
`;

const EpisodeCard = ({visible, setVisible}) => {
	const [selected, setSelected] = useState(0)
	const handleSelect = (id) =>{
		setSelected(id)
		if(selected === id){
			// console.log(id)
			setVisible(true)
		}
	}
	return EpisodeData.map((data) => (
		<CardContainer key={data.title} img={data.image} onClick={()=> handleSelect(data.id)}>	
			{/* {selected === data.id ? console.log(data.id): null}		 */}
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
			<MidLevel>
				<FaPlayCircle />
			</MidLevel>
			<BottomLevel>
				<BottomText>{data.title}</BottomText>
				<BottomDate visible={visible}>
					<BottomIcon>
						<IoCalendarNumberSharp />
					</BottomIcon>{" "}
					{data.date}
				</BottomDate>
			</BottomLevel>
		</CardContainer>
	));
};

export default EpisodeCard;
