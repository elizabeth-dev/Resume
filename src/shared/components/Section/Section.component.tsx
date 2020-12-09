import React from 'react';
import styles from './Section.module.scss';
import { SectionTitle } from '../SectionTitle/SectionTitle.component';

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
