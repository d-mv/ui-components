import styled from 'styled-components';
import { Button } from '../utils/reset';
import { shadow20, orange, orangeAccent } from '../tokens/color';

const Orange = styled(Button)`
	grid-area: button;
	display: inline-block;
	padding: 1rem;
	margin: 2rem;
	text-align: center;
	border-radius: 0.4rem;
	letter-spacing: 0.1rem;
	cursor: pointer;
	transition: all 0.5s;

	background-color: ${orange};
	color: white;
	box-shadow: 0 0.1rem 0.5rem ${shadow20};
	&:hover {
		border-bottom: 0.3rem solid ${orangeAccent};
		box-shadow: 0 0.2rem 0.6rem ${shadow20};
		transform: scale(1.05);
	}
	&:active {
		box-shadow: 0 0.1rem 0.4rem ${shadow20};
		transform: scale(0.95);
	}
`;

export default Orange;
