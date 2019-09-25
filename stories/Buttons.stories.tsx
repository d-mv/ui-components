import React from 'react';

import { storiesOf } from '@storybook/react';

import Global from '../src/style/Global';
import InLine from '../src/style/layout/InLine';
import Orange from '../src/style/buttons/Orange';
import Forward from '../src/style/buttons/Forward';
import ChipButton from '../src/components/ChipButton';
import { Switch, Switched } from '../src/style/buttons/Switch';

storiesOf('Buttons', module).add('Orange', () => (
	<div>
		<Global />
		<InLine>
			<Orange>PRESS</Orange>
			<Forward>
				<span>FORWARD</span>
			</Forward>
			<InLine>
				<Switch>
					<div />
				</Switch>
				<Switched>
					<div />
				</Switched>
				{/* Main icon is by Vectors Market @ Flaticon */}
				{/* Cancel icon is by Pixelmeetup @ Flaticon */}
				<ChipButton
					title='Button'
					mainIcon='https://image.flaticon.com/icons/svg/236/236832.svg'
					cancelIcon='https://image.flaticon.com/icons/svg/1632/1632708.svg'
				/>
			</InLine>
		</InLine>
	</div>
));
