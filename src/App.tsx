import React from 'react';
import styles from './App.module.scss';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const App: React.FC = () => {
	return (
		<div className={styles.root}>
			<FirstPage />
			<SecondPage />
		</div>
	);
};

export default App;
