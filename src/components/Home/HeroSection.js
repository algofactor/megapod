import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import HeroBg from "../../img/hero/hero-bg.jpg";
import HeroImage from "../../img/hero/hero-video.png";
import HeroArtist from "../../img/hero/hero-track.jpg";
import { Link } from "react-router-dom";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaShareAlt, FaDownload } from "react-icons/fa";
import Music1 from "../../music-files/1.mp3";
import { screens } from "../../data/Screens";

const HeroContainer = styled.div`
	background-image: url(${HeroBg});
	height: 100%;
	background-position: center;
	background-size: cover;
	color: #fff;
`;
const HeroContent = styled.div`
	padding: 8rem 2rem 0 2rem;
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

const AudioContent = styled.div`
	background-color: rgba(104, 99, 253, 0.2);
	padding: 2rem 3rem;
	@media ${screens.laptopS} {
		padding: 2rem;
	}
	@media ${screens.mobileL} {
		padding: 2rem 1rem;
	}
`;
const AudioContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	@media ${screens.laptopS} {
		flex-direction: column;
		align-items: flex-start;
	}
`;
const Artist = styled.div`
	display: flex;
	align-items: center;
	margin-right: 2rem;
	width: 50%;
	@media ${screens.laptopS} {
		margin-bottom: 2rem;
		width: 100%;
	}
`;
const ArtistImage = styled.img`
	border-radius: 50%;
	margin-right: 1.5rem;
	@media ${screens.tablet} {
		width: 50px;
		height: auto;
	}
`;
const ArtistDesc = styled.div``;
const DescTitle = styled.div`
	font-weight: 700;
	font-size: 1.1rem;
	margin-bottom: 0.5rem;
`;
const DescName = styled.div``;

const AudioPlayer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	@media ${screens.tabletS} {
		flex-direction: column;
		align-items: flex-start;
	}
`;
const AudioLinks = styled.div`
	display: flex;
	@media ${screens.tabletS} {
		margin-top: 2rem;
	}
`;
const AudioLink = styled(Link)`
	text-decoration: none;
	color: #fff;
	margin-left: 1rem;
	display: flex;
	align-items: center;
`;

const AudioLinkName = styled.p`
	margin-left: 0.5rem;
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
				<AudioContent>
					<AudioContainer>
						<Artist>
							<ArtistImage src={HeroArtist} />
							<ArtistDesc>
								<DescTitle>Understanding Operating</DescTitle>
								<DescName>Kyle Hawkins</DescName>
							</ArtistDesc>
						</Artist>
						<AudioPlayer>
							<audio src={Music1} controls className='audio-book'></audio>
							<AudioLinks>
								<AudioLink to=''>
									<FaShareAlt />
									<AudioLinkName>Share</AudioLinkName>
								</AudioLink>
								<AudioLink to=''>
									<FaDownload />
									<AudioLinkName>Download</AudioLinkName>
								</AudioLink>
							</AudioLinks>
						</AudioPlayer>
					</AudioContainer>
				</AudioContent>
			</HeroContainer>
		</div>
	);
};

export default HeroSection;
