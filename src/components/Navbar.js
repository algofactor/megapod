import React, { useEffect, useState } from "react";
import {
	FaSearch,
	FaFacebookF,
	FaTwitter,
	FaPinterest,
	FaInstagram,
	FaDribbble,
	FaBars,
	FaTimes,
} from "react-icons/fa";
import Logo from "../img/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { screens } from "../data/Screens";

// Styles
const Nav = styled.nav`
	width: 100%;
	color: #fff;
	border-bottom: 1px solid rgba(255, 255, 255, 0.3);
	background-color: ${props => props.visible ? "black" : "transparent"};
	backdrop-filter: blur(15px);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 50;
`;
const NavContainer = styled.div`
	padding: 1.7rem 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const NavLogo = styled(Link)`
	height: 25px;
	width: auto;
	@media ${screens.tabletS} {
		height: 15px;
		width: auto;
	}
`;
const LogoImg = styled.img`
	height: 25px;
	width: auto;
	@media ${screens.tabletS} {
		height: 23px;
		width: auto;
	}
`;
const MenuBar = styled.div`
	display: none;
	color: #fff;
	cursor: pointer;
	font-size: 1.5rem;
	@media ${screens.laptopS} {
		display: flex;
	}
`;
const NavLinks = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	@media ${screens.laptopS} {
		display: none;
	}
`;
const NavLink = styled(Link)`
	margin: 0 0.5rem;
	font-weight: 700;
	color: #fff;
	text-decoration: none;
`;
const SocialLinks = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	@media ${screens.laptopS} {
		display: none;
	}
`;
const SearchBar = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 0.5rem;
	&:last-of-type {
		margin: 0;
	}
	@media ${screens.laptopS} {
		display: none;
	}
`;
const Input = styled.input`
	background-color: transparent;
	border: 0;
	outline: none;
	color: #fff;
	&::placeholder {
		color: rgba(255, 255, 255, 0.582);
	}
`;
const SocialLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	margin: 0 0.5rem;
	&:hover {
		color: #6763fd;
	}
`;

const SideNav = styled.div`
	z-index: 20;
	@media ${screens.laptopS} {
	}
`;

const SideSearch = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 2rem;
`;

const SideInput = styled.input`
	background-color: transparent;
	border: 0;
	outline: none;
	color: #fff;
	width: 80%;
	font-size: 1rem;
	&::placeholder {
		color: #fff;
	}
`;

const SideLogo = styled(Link)`
	width: 200px;
	height: auto;
	margin-bottom: 2rem;
`;

const SideLinks = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
`;
const SideLink = styled(Link)`
	margin: 0.5rem 0;
	font-size: 90%;
	font-weight: 500;
	color: #fff;
	text-decoration: none;
`;

const SideSocials = styled.div`
	display: flex;
	flex-direction: row;
`;

const Navbar = ({ nav, showNav, closeNav }) => {
	// Logic
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		const toggleVisible = () => {
			const scrolled = document.documentElement.scrollTop;
			if (scrolled > 250) {
				setVisible(true);
			} else if (scrolled <= 250) {
				setVisible(false);
			}
		};
		window.addEventListener("scroll", toggleVisible);
	}, [])
	

	return (
		<Nav visible={visible}>
			<NavContainer>
				<SideNav className={nav ? "nav active" : "nav"}>
					<SideSearch>
						<SideInput type='search' placeholder='Search and hit enter...' />
						<SocialLink to='/' onClick={closeNav}>
							<FaSearch />
						</SocialLink>
					</SideSearch>
					<SideLogo to='/' onClick={closeNav}>
						<img src={Logo} alt='Logo' />
					</SideLogo>
					<SideLinks>
						<SideLink to='/' onClick={closeNav}>
							Home
						</SideLink>
						<SideLink to='/about' onClick={closeNav}>
							About
						</SideLink>
						<SideLink to='/episodes' onClick={closeNav}>
							Episodes
						</SideLink>
						{/* <SideLink to='/' onClick={closeNav}>Pages</SideLink> */}
						<SideLink to='/contact' onClick={closeNav}>
							Contact
						</SideLink>
					</SideLinks>
					<SideSocials>
						<SearchBar>
							<Input type='search' placeholder='Search and hit enter...' />
							<SocialLink to='/' onClick={closeNav}>
								<FaSearch />
							</SocialLink>
						</SearchBar>
						<SocialLink to='/' onClick={closeNav}>
							<FaFacebookF />
						</SocialLink>
						<SocialLink to='/' onClick={closeNav}>
							<FaTwitter />
						</SocialLink>
						<SocialLink to='/' onClick={closeNav}>
							<FaPinterest />
						</SocialLink>
						<SocialLink to='/' onClick={closeNav}>
							<FaInstagram />
						</SocialLink>
						<SocialLink to='/' onClick={closeNav}>
							<FaDribbble />
						</SocialLink>
					</SideSocials>
				</SideNav>
				<NavLogo to='/'>
					<LogoImg src={Logo} alt='Logo' />
				</NavLogo>
				<MenuBar onClick={showNav}>{nav ? <FaTimes /> : <FaBars />}</MenuBar>
				<NavLinks>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink to='/episodes'>Episodes</NavLink>
					{/* <NavLink to='/'>Pages</NavLink> */}
					<NavLink to='/contact'>Contact</NavLink>
				</NavLinks>
				<SocialLinks>
					<SearchBar>
						<Input type='search' placeholder='Search and hit enter...' />
						<SocialLink to='/'>
							<FaSearch />
						</SocialLink>
					</SearchBar>
					<SocialLink to='/'>
						<FaFacebookF />
					</SocialLink>
					<SocialLink to='/'>
						<FaTwitter />
					</SocialLink>
					<SocialLink to='/'>
						<FaPinterest />
					</SocialLink>
					<SocialLink to='/'>
						<FaInstagram />
					</SocialLink>
					<SocialLink to='/'>
						<FaDribbble />
					</SocialLink>
				</SocialLinks>
			</NavContainer>
		</Nav>
	);
};

export default Navbar;
