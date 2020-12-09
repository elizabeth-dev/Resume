import React, { ReactNode } from 'react';
import styles from './PersonalData.module.scss';

import { DataElement } from '../DataElement/DataElement.component';

import { IPersonalData } from '../../types/Data';

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
