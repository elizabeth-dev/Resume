import React from 'react';
import styles from './SectionTitle.module.scss';

interface Props {
	children: string;
}

export const SectionTitle: React.FC<Props> = (props) => {
	return (
		<div className={styles.root}>
			<span className={styles.text}>{props.children}</span>
		</div>
	);
};
