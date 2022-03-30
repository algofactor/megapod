import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components";
import HeroBg from "../../img/breadcrumb-bg.jpg";
import { Link } from "react-router-dom";
import {FaHome, FaAngleRight} from 'react-icons/fa'

// Styles
const HeroContainer = styled.div`
	background-image: url(${HeroBg});
	background-position: center;
	background-size: cover;
`;
const HeroContent = styled.div`
	padding: 7rem 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const HeroTitle = styled.div`
	color: #fff;
	font-size: 3rem;
	font-weight: 700;
	margin-bottom: 1rem;
`;
const HeroLinks = styled.div`
	display: flex;
`;

const HeroLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	font-size: 90%;
	display: flex;
	align-items: center;
    &:last-child{
        color: #b7b7b7;
    }
`;

const HeroLinkText = styled.p`
    margin-right: .5rem;
`;
const HeroLinkIcon = styled.span`
    display: flex;
    align-items: center;
    margin-right: .5rem;
`;

const HeroSection = ({ nav, showNav, closeNav }) => {
	return (
		<HeroContainer>
			<Navbar nav={nav} showNav={showNav} closeNav={closeNav} />
			<HeroContent onClick={closeNav}>
				<HeroTitle>About</HeroTitle>
				<HeroLinks>
					<HeroLink to='/'>
						<HeroLinkIcon><FaHome /></HeroLinkIcon>
						<HeroLinkText>Home</HeroLinkText>
						<HeroLinkIcon><FaAngleRight /></HeroLinkIcon>
					</HeroLink>
					<HeroLink to='/about'>About</HeroLink>
				</HeroLinks>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
