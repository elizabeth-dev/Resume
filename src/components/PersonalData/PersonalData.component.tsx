import { IPersonalData } from '@/data/data';
import React, { ReactNode } from 'react';
import { DataElement } from '../DataElement/DataElement.component';
import styles from './PersonalData.module.scss';

interface Props {
	data: IPersonalData[];
	children: ReactNode;
}

export const PersonalData: React.FC<Props> = ({ data, children }) => {
	return (
		<div className={styles.root}>
			<div className={styles.keys}>
				{data.map(({ icon, content, link }, i) => (
					<DataElement icon={icon} key={i} link={link}>
						{content}
					</DataElement>
				))}
			</div>
			{children}
		</div>
	);
};
