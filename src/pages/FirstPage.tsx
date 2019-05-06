import React from 'react';
import styles from './FirstPage.module.scss';

import { mdiHome, mdiPhone, mdiEmail, mdiWeb } from '@mdi/js';

import Page from '../Page';
import PersonalData from '../PersonalData';
import DataElement from '../DataElement';
import SectionTitle from '../SectionTitle';
import TrainingSection from '../sections/TrainingSection';

const personalData: { icon: string; content: string }[] = [
	{ icon: mdiHome, content: 'Madrid, España' },
	{ icon: mdiPhone, content: '611490147' },
	{ icon: mdiEmail, content: 'eli@zabeth.es' },
	{ icon: mdiWeb, content: 'https://eli.zabeth.es/' },
];

const trainingData: { title: string }[] = [
	{ title: 'Técnico Superior en Administración de Sistemas Informáticos en Red' },
];

const FirstPage: React.FC = () => {
	return (
		<Page className={styles.root}>
			<span className={styles.name}>Elizabeth Martín Campos</span>
			<PersonalData>
				{personalData.map((data) => (
					<DataElement icon={data.icon} key={data.content}>
						{data.content}
					</DataElement>
				))}
			</PersonalData>
			<SectionTitle>Formación</SectionTitle>
			{trainingData.map((data) => (
				<TrainingSection title={data.title} key={data.title} />
			))}
		</Page>
	);
};

export default FirstPage;
