import React from 'react';
import styles from './TagSection.module.scss';

import SectionTitle from '../SectionTitle';

interface Props {
	title?: string;
	children: React.ReactNode;
}

const TagSection: React.FC<Props> = (props) => {
	return (
		<div className={styles.root}>
			{props.title && <SectionTitle>{props.title}</SectionTitle>}
			<div className={styles.tags}>{props.children}</div>
		</div>
	);
};

export default TagSection;
