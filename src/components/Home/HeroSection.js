import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import HeroBg from "../../img/hero/hero-bg.jpg";
import HeroImage from "../../img/hero/hero-video.png";
import HeroArtist from '../../img/hero/hero-track.jpg'
import { Link } from "react-router-dom";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaShareAlt, FaDownload } from "react-icons/fa";
import Music1 from '../../music-files/1.mp3'

const HeroContainer = styled.div`
	background-image: url(${HeroBg});
	height: 100%;
	/* height: 100vh; */
	background-position: center;
	background-size: cover;
	color: #fff;
`;
const HeroContent = styled.div`
	padding: 8rem 2rem 0 2rem;
	display: flex;
    margin-bottom: 9rem;
`;
const LeftContent = styled.div`
	width: 50%;
	padding-top: 2rem;
`;

const HeaderWrapper = styled.div`
	display: flex;
	/* align-items: flex-end; */
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
    margin-bottom: 4rem;
`;
const LeftButtons = styled.div``;
const Button1 = styled(Link)`
    text-decoration: none;
    color: #fff;
    background-color: #6763FD;
    border-radius: 7px;
    font-size: 90%;
    font-weight: 700;
    padding: 1rem 1.5rem;
    margin-right: 1rem;
`;
const Button2 = styled(Link)`
    text-decoration: none;
    color: #000;
    background-color: #fff;
    border-radius: 7px;
    font-size: 90%;
    font-weight: 700;
    padding: 1rem 1.5rem;
`;
const RightContent = styled.div`
	width: 50%;
	display: flex;
	overflow: hidden;
	justify-content: center;
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
`
const AudioContainer = styled.div`
    display: flex;
    align-items: center;
    /* width: 100%; */
`
const Artist = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;
    width: 50%;
`
const ArtistImage = styled.img`
    border-radius: 50%;
    margin-right: 1.5rem;
`
const ArtistDesc = styled.div`
    
`
const DescTitle = styled.div`
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: .5rem;
`
const DescName = styled.div``
const AudioPlayer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const AudioLinks = styled.div`
    display: flex;
`
const AudioLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin-left: 1rem;
    display: flex;
    align-items: center;
`

const AudioLinkName = styled.p`
    margin-left: .5rem;
`

const HeroSection = ({ nav, showNav, closeNav }) => {
	const today = new Date().toUTCString().slice(4, 16);
	console.log(today);
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
                            <audio src={Music1} controls className="audio-book"></audio>
                            <AudioLinks>
                                <AudioLink to=''><FaShareAlt /><AudioLinkName>Share</AudioLinkName></AudioLink>
                                <AudioLink to=''><FaDownload /><AudioLinkName>Download</AudioLinkName></AudioLink>
                            </AudioLinks>
                        </AudioPlayer>
                    </AudioContainer>
                </AudioContent>
			</HeroContainer>
		</div>
	);
};

export default HeroSection;
