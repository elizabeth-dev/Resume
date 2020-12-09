import React from 'react';
import styles from './DataElement.module.scss';

import Icon from '@mdi/react';

interface Props {
	children: string;
	icon: string;
	link?: string;
}

export const DataElement: React.FC<Props> = ({
	children,
	icon,
	link,
}) => {
	return (<div className={styles.root}>
			<Icon path={icon} size={1} />
			{link ? <a href={link} className={styles.text} target="_blank" rel="noreferrer">{children}</a> : <span className={styles.text}>{children}</span>}
		</div>);
};
