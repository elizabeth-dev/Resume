import { mdiMenuRight } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import styles from './PropElement.module.scss';

interface Props {
	icon?: string;
	children: string;
	subtitle?: string;
}

export const PropElement: React.FC<Props> = (props) => {
	return (
		<div className={styles.root}>
			<Icon path={props.icon || mdiMenuRight} size={1} />
			<span className={styles.title}>{props.children}</span>
			{props.subtitle && <span className={styles.subtitle}>{props.subtitle}</span>}
		</div>
	);
};
