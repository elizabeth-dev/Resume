import React from 'react';
import styles from './SectionItem.module.scss';
import Icon from '@mdi/react';
import { mdiMenuRight } from '@mdi/js';

interface Props {
	title: string;
	info: { icon: string; text: string }[];
}

export const SectionItem: React.FC<Props> = (props) => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>
				<Icon path={mdiMenuRight} size={'24px'} />
				<span className={styles.text}>{props.title}</span>
			</div>
			<div className={styles.info}>
				{props.info.map((info) => (
					<div className={styles.infoElement} key={info.text}>
						<Icon path={info.icon} size={1} />
						<span className={styles.text}>{info.text}</span>
					</div>
				))}
			</div>
		</div>
	);
};
