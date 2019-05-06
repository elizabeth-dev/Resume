import React from 'react';
import styles from './TrainingSection.module.scss';

interface Props {
	title: string;
}

const TrainingSection: React.FC<Props> = (props) => {
	return (
		<div className={styles.root}>
			<span className={styles.title}>{props.title}</span>
		</div>
	);
};

export default TrainingSection;
