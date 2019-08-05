import styled from 'styled-components';
import { Button } from '../utils/reset';
import { shadow20, orange, orangeAccent, grey, shadow50 } from '../tokens/color';

const Forward = styled(Button)`
	grid-area: button;
	display: inline-block;
	padding: 1rem;
	margin: 2rem;
	text-align: center;
	border-radius: 0.4rem;
	letter-spacing: 0.1rem;
	cursor: pointer;
	transition: all 0.5s;

	background: linear-gradient(to bottom, #d7d7d7, #b3b3b3);
	transition: 0.5s;
	color: ${grey};
	box-shadow: 0 1px 5px ${shadow20};
	span {
		display: inline-block;
		position: relative;
		transition: 0.5s;
		&:after {
			/* https://coolsymbol.com/ */
			content: '➠';
			position: absolute;
			opacity: 0;
			top: 0;
			right: -10px;
			transition: 0.5s;
		}
	}
	&:hover {
		border-right: 3px solid ${grey};
		box-shadow: 0 1px 8px ${shadow20};
		span {
			padding-right: 30px;
			&::after {
				opacity: 1;
				position: absolute;
				right: 0;
				transition: 0.5s;
			}
		}
	}
	&:active {
		box-shadow: 0 1px 2px ${shadow50};
	}
`;

export default Forward;
