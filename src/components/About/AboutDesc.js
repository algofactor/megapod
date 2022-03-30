import React from "react";
import styled from "styled-components";
import { screens } from "../../data/Screens";
import { ButtonSmall } from "../ButtonSmall";
import AboutImg from "../../img/about-pic.jpg";

// Styles
const AboutDescContainer = styled.div`
	padding: 6rem 3rem;
    @media ${screens.tabletS} {
        padding: 6rem 1rem;
	}
`;
const AboutDescTextContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 2rem;
	margin-bottom: 3rem;

	@media ${screens.laptopS} {
		grid-template-columns: 1fr;
	}
`;
const GridOne = styled.div`
	width: 90%;
	margin: 0 auto;
	@media ${screens.laptopS} {
		width: 100%;
		margin-bottom: 2rem;
	}
`;
const SubTitle = styled.p`
	color: #6763fd;
	margin-bottom: 0.5rem;
	font-weight: 700;
	font-size: 95%;
`;
const Title = styled.p`
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 1rem;
	color: #353535;
`;
const Desc = styled.p`
	color: #8d8d8d;
	font-size: 90%;
	margin-bottom: 2rem;
`;
const GridTwo = styled.div`
	@media ${screens.laptopS} {
		margin-bottom: 2rem;
	}
`;
const GridThree = styled.div`
	@media ${screens.laptopS} {
		margin-bottom: 2rem;
	}
`;

const ArticleTitle = styled.p`
	font-weight: 700;
	font-size: 95%;
	margin-bottom: 1rem;
`;
const ArticleDesc = styled.p`
	font-size: 85%;
	color: #8d8d8d;
	line-height: 1.5;
`;

const Image = styled.img`
	width: 100%;
`;

const AboutDesc = () => {
	return (
		<AboutDescContainer>
			<AboutDescTextContainer>
				<GridOne>
					<SubTitle>We are Megapod</SubTitle>
					<Title>About Us</Title>
					<Desc>
						Enjoy listening to our podcast? Consider making a donation.
					</Desc>
					<ButtonSmall>Make a donation</ButtonSmall>
				</GridOne>
				<GridTwo>
					<ArticleTitle>
						This article is floated online with an aim to help you find the best
						dvd printing solution.
					</ArticleTitle>
					<ArticleDesc>
						Your DVDs usually come coated with directly printable lacquer films
						with ability to absorb ink, and the process of directly printing the
						lacquer films on your DVDs is technically known as dvd printing.
						Your dvd printing solution lies in – inkjet dvd printing, thermal
						transfer dvd printing, screen dvd printing, and offset dvd printing
						– which you may choose according to need and requirement.
					</ArticleDesc>
				</GridTwo>
				<GridThree>
					<ArticleTitle>
						This article is floated online with an aim to help you find the best
						dvd printing solution.
					</ArticleTitle>
					<ArticleDesc>
						Your DVDs usually come coated with directly printable lacquer films
						with ability to absorb ink, and the process of directly printing the
						lacquer films on your DVDs is technically known as dvd printing.
						Your dvd printing solution lies in – inkjet dvd printing, thermal
						transfer dvd printing, screen dvd printing, and offset dvd printing
						– which you may choose according to need and requirement.
					</ArticleDesc>
				</GridThree>
			</AboutDescTextContainer>
			<Image src={AboutImg} />
		</AboutDescContainer>
	);
};

export default AboutDesc;
