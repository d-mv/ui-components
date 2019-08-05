import styled, { keyframes } from 'styled-components';
import { Button } from '../utils/reset';
import { shadow20, coral, green } from '../tokens/color';

// turnOn animations
const backOn = keyframes`
 0% {
padding-left:0;
}
100%{
padding-left:3rem;
}
`;
const knobOn = keyframes`
0% {
width:1.5rem
}
90%{
border-radius: 2.5rem;
}
100%{
width:0rem;
border-radius: .2rem;
}
`;
const flipCircle = keyframes`
0% {
transform: rotateZ(0);
}
100% {
transform: rotateZ(-180deg);
}
`;
// turnOff animations
const backOff = keyframes`
0% {
padding-left:3rem;
}
100%{
padding-left:0;
}
`;

const knobOff = keyframes`
0% {
	width:0rem;
}
100% {
	border-radius: 2.5rem;
	width:1.5rem;
}
`;

const flipFlat = keyframes`
0% {
	transform: rotateY(0);
}
100% {
	transform: rotateY(-180deg);
}
`;

const defButton = styled(Button)`
	margin: 2rem;
	width: 5rem;
	height: 3rem;
	text-align: center;
	border-radius: 2rem;
	letter-spacing: 0.1rem;
	cursor: pointer;
	transition: all 0.5s;
	color: white;
	box-shadow: 0 0.1rem 0.5rem ${shadow20};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	div {
		height: 1.5rem;
		margin: 0 0.3rem;
		border: 0.3rem solid white;
	}
`;

export const Switch = styled(defButton)`
	background-color: ${coral};
	div {
		width: 1.5rem;
		border-radius: 2.5rem;
	}
	&:hover {
		animation: ${backOn} 1s ease-in-out 0s forwards;
		div {
			animation: ${knobOn} 1s ease-in-out 0s forwards,
				${flipCircle} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1s both;
		}
		background-color: ${green};
	}
`;

export const Switched = styled(defButton)`
	padding-left: 3rem;
	background-color: ${green};
	div {
		width: 0rem;
		border-radius: 0.2rem;
	}
	&:hover {
		animation: ${backOff} 1s ease-in-out 0s forwards;
		div {
			animation: ${knobOff} 1s ease-in-out 0s forwards,
				${flipFlat} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1s both;
		}
		background-color: ${coral};
	}
`;
