import styled from 'styled-components';
import { Button } from '../utils/reset';

interface CProps {
	background?: string;
}
const Chip = styled<CProps>(Button)`
	grid-area: button;
	display: inline-block;
	padding: 1rem;
	margin: 2rem;
	text-align: center;
	border-radius: 10rem;
	letter-spacing: 0.1rem;
	cursor: pointer;
	transition: all 0.5s;
	background-color: ${props => (props.background ? props.background : 'grey')};
	display: flex;
	flex: row nowrap;
	justify-content: space-between;
	align-items: center;
	span {
		margin: 0 1rem;
	}
	#mainIcon {
		height: 2rem;
		width: 2rem;
	}
	#cancelIcon {
		height: 1rem;
		width: 1rem;
	}
`;

export default Chip;
