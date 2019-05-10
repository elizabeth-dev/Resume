import React from 'react';
import styles from './PropElement.module.scss';
import Icon from '@mdi/react';
import { mdiMenuRight } from '@mdi/js';

interface Props {
	icon?: string;
	children: string;
	subtitle?: string;
}

const PropElement: React.FC<Props> = (props) => {
	return (
		<div className={styles.root}>
			<Icon path={props.icon || mdiMenuRight} size={1} />
			<span className={styles.title}>{props.children}</span>
			{props.subtitle && <span className={styles.subtitle}>{props.subtitle}</span>}
		</div>
	);
};

export default PropElement;
