import React from 'react';
import styles from './App.module.scss';

import Page from './Page';
import FirstPage from './pages/FirstPage';

const App: React.FC = () => {
	return (
		<div className={styles.root}>
			<FirstPage />
			<Page>
				<br />
			</Page>
		</div>
	);
};

export default App;
