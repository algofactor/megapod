import React from "react";
import { ButtonSmall } from "../ButtonSmall";
import styled from "styled-components";
import { screens } from "../../data/Screens";

// Styles
const ContactMessageContainer = styled.div`
	padding: 5rem 0;
`;
const MessageHeader = styled.p`
	font-size: 2.5rem;
	font-weight: 700;
	text-align: center;
	margin-bottom: 3rem;
    @media ${screens.tabletS} {
        font-size: 2.2rem;

    }
`;
const MessageForm = styled.form`
	width: 95%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
    @media ${screens.tabletS} {
        width: 100%;
    }
`;
const Top = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 2rem;
	margin-bottom: 2rem;
    @media ${screens.tabletS} {
        grid-template-columns: 1fr;
        margin-bottom: 0;

    }
`;
const Input = styled.input`
	outline: none;
	border: 1px solid rgba(0, 0, 0, 0.1);
	padding: 1rem;
	border-radius: 7px;
	font-size: 0.9rem;
    @media ${screens.tabletS} {
        margin-bottom: 2rem;
        font-size: 80%;

    }
`;
const MessageContainer = styled.div`
	width: 100%;
    display: flex;
    margin-bottom: 2rem;
`;
const MessageArea = styled.textarea`
	width: 100%;
	height: 100px;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 0.1);
	padding: 1rem;
	border-radius: 7px;
    font-size: .9rem;
    @media ${screens.tabletS} {
        font-size: 80%;

    }
`;

const ContactMessage = () => {
	return (
		<ContactMessageContainer>
			<MessageHeader>Leave Message</MessageHeader>
			<MessageForm>
				<Top>
					<Input type='text' placeholder='Your name' />
					<Input type='email' placeholder='Your email' />
				</Top>
				<MessageContainer>
					<MessageArea placeholder='Your message'></MessageArea>
				</MessageContainer>
				<ButtonSmall>Send Message</ButtonSmall>
			</MessageForm>
		</ContactMessageContainer>
	);
};

export default ContactMessage;
