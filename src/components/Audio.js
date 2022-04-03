import React from "react";
import styled from "styled-components"
import { screens } from "../data/Screens";
import { FaShareAlt, FaDownload } from "react-icons/fa";

// Styles
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
const AudioLink = styled.a`
	text-decoration: none;
	color: #b7b7b7;
	font-size: 90%;
	margin-left: 1rem;
	display: flex;
	align-items: center;
`;

const AudioLinkName = styled.p`
	margin-left: 0.5rem;
`;

const Audio = ({music}) => {
	return (
		<AudioPlayer>
			<audio src={music} controls className='audio-book'></audio>
			<AudioLinks>
				<AudioLink to=''>
					<FaShareAlt />
					<AudioLinkName>Share</AudioLinkName>
				</AudioLink>
				<AudioLink href={music} download="Podcast audio">
					<FaDownload />
					<AudioLinkName>Download</AudioLinkName>
				</AudioLink>
			</AudioLinks>
		</AudioPlayer>
	);
};

export default Audio;
