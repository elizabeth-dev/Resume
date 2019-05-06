import React from 'react';
import styles from './DataElement.module.scss';

import Icon from '@mdi/react';

interface Props {
	children: string;
	icon: string;
}

const DataElement: React.FC<Props> = (props) => {
	return (
		<div className={styles.root}>
			<Icon path={props.icon} size={1} />
			<span className={styles.text}>{props.children}</span>
		</div>
	);
};

export default DataElement;
