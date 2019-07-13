import React, { ReactNode } from 'react';
import styles from './PersonalData.module.scss';

import DataElement from '../DataElement';

import { IPersonalData } from '../types/Data';

interface Props {
	data: IPersonalData[];
	children: ReactNode;
}

const PersonalData: React.FC<Props> = (props) => {
	return (
		<div className={styles.root}>
			<div className={styles.keys}>
			{props.data.map((data) => (
					<DataElement icon={data.icon} key={data.content}>
						{data.content}
					</DataElement>
				))}
			</div>
			{props.children}
		</div>
	);
};

export default PersonalData;
