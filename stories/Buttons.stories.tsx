import React from 'react';

import { storiesOf } from '@storybook/react';

import Global from '../src/style/Global';
import InLine from '../src/style/layout/InLine';
import Orange from '../src/style/buttons/Orange';
import Forward from '../src/style/buttons/Forward';
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
			</InLine>
		</InLine>
	</div>
));
