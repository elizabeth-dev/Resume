import { SectionData } from '@/data/data';
import { mdiMenuRight } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import styles from './SectionItem.module.scss';

interface data {
	data: SectionData;
}

export const SectionItem: React.FC<data> = ({ data }) => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>
				<Icon path={mdiMenuRight} size={'24px'} />
				<span className={styles.text}>{data.title}</span>
			</div>
			<div className={styles.info}>
				{data.subtitle && <span className={styles.subtitle}>{data.subtitle}</span>}
				{data.info.map((info) => (
					<div className={styles.infoElement} key={info.text}>
						{info.icon && <Icon path={info.icon} size={1} />}
						<span className={styles.text}>{info.text}</span>
					</div>
				))}
			</div>
		</div>
	);
};
