import React from 'react';
import Chip from '../style/buttons/Chip';

interface CBProps {
	title: string;
	mainIcon?: string;
	cancelIcon?: string;
}

const ChipButton = ({ title, mainIcon, cancelIcon }: CBProps) => {
	return (
		<Chip>
			{!!mainIcon && <img id='mainIcon' src={mainIcon} />}
			<span>{title}</span>
			{!!cancelIcon && <img id='cancelIcon' src={cancelIcon} />}
		</Chip>
	);
};

export default ChipButton;
