import React from 'react';

import { FirstPage } from './pages/first-page/FirstPage.page';
import { SecondPage } from './pages/second-page/SecondPage.page';

export const CV: React.FC = () => {
	return (
		<div>
			<FirstPage />
			<SecondPage />
		</div>
	);
};
