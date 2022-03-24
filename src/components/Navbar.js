import React from "react";
import {
	FaSearch,
	FaFacebookF,
	FaTwitter,
	FaPinterest,
	FaInstagram,
	FaDribbble,
} from "react-icons/fa";
import Logo from "../img/logo.png";
import styled from "styled-components";

// Styles
const Nav = styled.nav`
	width: 100%;
	background-color: #000;
	color: #fff;
`;
const NavContainer = styled.div`
	padding: 2rem 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const NavLogo = styled.img``;
const NavLinks = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
const NavLink = styled.div`
	margin: 0 0.5rem;
    font-weight: 700;
`;
const SocialLinks = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
const SearchBar = styled.div`
	display: flex;
	justify-content: center;
	/* align-items: center; */
	margin: 0 0.5rem;
`;
const Input = styled.input`
	background-color: transparent;
	border: 0;
	outline: none;
	color: #fff;
    margin-right: .5rem;
`;
const SocialLink = styled.div`
	margin: 0 0.5rem;
`;

const Navbar = () => {
	return (
		<Nav>
			<NavContainer>
				<NavLogo src={Logo} placeholder='Search and hit enter...' />
				<NavLinks>
					<NavLink>Home</NavLink>
					<NavLink>About</NavLink>
					<NavLink>Episodes</NavLink>
					<NavLink>Pages</NavLink>
					<NavLink>Contact</NavLink>
				</NavLinks>
				<SocialLinks>
					<SearchBar>
						<Input
							type='search'
							placeholder='Search and hit enter...'
						/>
						<FaSearch />
					</SearchBar>
					<SocialLink>
						<FaFacebookF />
					</SocialLink>
					<SocialLink>
						<FaTwitter />
					</SocialLink>
					<SocialLink>
						<FaPinterest />
					</SocialLink>
					<SocialLink>
						<FaInstagram />
					</SocialLink>
					<SocialLink>
						<FaDribbble />
					</SocialLink>
				</SocialLinks>
			</NavContainer>
		</Nav>
	);
};

export default Navbar;
