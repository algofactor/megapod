import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { FaShareAlt, FaDownload } from "react-icons/fa";
import Music1 from "../music-files/1.mp3";
import HeroArtist from "../img/hero/hero-track.jpg";
import { screens } from "../data/Screens";

// Styles
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
const ArtistDesc = styled.div`
    color: ${props => props.color};
`;
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

const HeroAudio = ({color}) => {
	return (
		<AudioContent>
			<AudioContainer>
				<Artist>
					<ArtistImage src={HeroArtist} />
					<ArtistDesc color={color}>
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
	);
};

export default HeroAudio;
