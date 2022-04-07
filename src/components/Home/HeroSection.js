import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import HeroBg from "../../img/hero/hero-bg.jpg";
import HeroImage from "../../img/hero/hero-video.png";
import { Link } from "react-router-dom";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { screens } from "../../data/Screens";
import HeroAudio from "../HeroAudio";

const HeroContainer = styled.div`
	background-image: url(${HeroBg});
	height: 100%;
	background-position: center;
	background-size: cover;
	color: #fff;
`;
const HeroContent = styled.div`
	padding: 15rem 2rem 0 2rem;
	display: flex;
	flex-direction: row;
	margin-bottom: 9rem;
	@media ${screens.laptopS} {
		flex-direction: column;
	}
	@media ${screens.laptopS} {
		padding: 8rem 1rem 0 1rem;
	}
`;
const LeftContent = styled.div`
	width: 50%;
	padding-top: 2rem;
	@media ${screens.laptopS} {
		width: 100%;
		margin-bottom: 3rem;
	}
`;

const HeaderWrapper = styled.div`
	display: flex;
	margin-bottom: 1rem;
`;

const Header = styled.p`
	font-size: 1.3rem;
	font-weight: 700;
`;
const HeaderDesc = styled.p`
	font-size: 3.7rem;
	font-weight: 700;
	width: 80%;
	line-height: 1.2;
	margin-bottom: 3rem;
	@media ${screens.tabletS} {
		font-size: 2rem;
	}
`;
const LeftButtons = styled.div`
	display: flex;
	@media ${screens.tabletS} {
		flex-direction: column;
	}
`;
const Button1 = styled(Link)`
	text-decoration: none;
	color: #fff;
	background-color: #6763fd;
	border-radius: 7px;
	font-size: 90%;
	font-weight: 700;
	padding: 1rem 1.5rem;
	margin-right: 1rem;
	width: 170px;
	display: flex;
	justify-content: center;
	@media ${screens.tabletS} {
		margin-bottom: 1rem;
	}
`;
const Button2 = styled(Link)`
	text-decoration: none;
	color: #000;
	background-color: #fff;
	border-radius: 7px;
	font-size: 90%;
	font-weight: 700;
	padding: 1rem 1.5rem;
	width: 170px;
	display: flex;
	justify-content: center;
`;
const RightContent = styled.div`
	width: 50%;
	display: flex;
	overflow: hidden;
	justify-content: center;
	@media ${screens.laptopS} {
		width: 100%;
	}
`;
const RightImage = styled.div`
	width: 450px;
	height: 400px;
	background-image: url(${HeroImage});
	background-size: cover;
	background-position: center;
`;

const HeroSection = ({ nav, showNav, closeNav }) => {
	const today = new Date().toUTCString().slice(4, 16);
	return (
		<div>
			<HeroContainer>
				<Navbar nav={nav} showNav={showNav} closeNav={closeNav} />
				<HeroContent onClick={closeNav}>
					<LeftContent>
						<HeaderWrapper>
							<IoCalendarNumberOutline className='header-icon' />
							<Header>{today}</Header>
						</HeaderWrapper>
						<HeaderDesc>Ep 05: Astronomy Binoculars A Great</HeaderDesc>
						<LeftButtons>
							<Button1 to='/'>Subscribe with iTunes</Button1>
							<Button2 to='/'>Subscribe with RSS</Button2>
						</LeftButtons>
					</LeftContent>
					<RightContent>
						<RightImage></RightImage>
					</RightContent>
				</HeroContent>
				<HeroAudio color='#fff' />
			</HeroContainer>
		</div>
	);
};

export default HeroSection;
