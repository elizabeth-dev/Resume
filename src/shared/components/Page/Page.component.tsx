import React from 'react';
import styles from './Page.module.scss';

import classNames from 'classnames';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Page: React.FC<Props> = (props) => {
	return (
		<div className={classNames(styles.root, props.className)}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};
