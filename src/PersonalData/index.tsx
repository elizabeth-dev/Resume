import React from 'react';
import styles from './PersonalData.module.scss';

const PersonalData: React.FC = (props) => {
	return <div className={styles.root}>{props.children}</div>;
};

export default PersonalData;
