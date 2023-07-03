import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle.component';
import styles from './Section.module.scss';

interface Props {
	title?: string;
	children: React.ReactNode;
}
export const Section: React.FC<Props> = (props) => {
	return (
		<div className={styles.root}>
			{props.title && <SectionTitle>{props.title}</SectionTitle>}
			<div className={styles.section}>{props.children}</div>
		</div>
	);
};
