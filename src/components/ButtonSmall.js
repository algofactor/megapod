import styled from 'styled-components'
import { Link } from 'react-router-dom';

const ButtonSmallBtn = styled(Link)`
	text-decoration: none;
	text-transform: capitalize;
	color: #fff;
	background-color: #6763fd;
	border-radius: 7px;
	font-size: 90%;
	font-weight: 700;
	padding: 1rem 1.5rem;
	width: 120px;
	display: flex;
	justify-content: center;
`;

export const ButtonSmall = ({children}) =>{
    return(
        <ButtonSmallBtn to='/'>{children}</ButtonSmallBtn>
    )
}
