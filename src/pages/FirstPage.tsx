import React from 'react';
import styles from './FirstPage.module.scss';

import Page from '../Page';
import PersonalData from '../PersonalData';
import SectionItem from '../SectionItem';
import { personalData, experience, trainingData, description } from '../data';
import Section from '../Section';

const FirstPage: React.FC = () => {
	return (
		<Page className={styles.root}>
			<span className={styles.name}>Elizabeth Martín Campos</span>
			<PersonalData data={personalData}>
				<p className={styles.description}>{description}</p>
			</PersonalData>
			<Section title="Experiencia">
				{experience.map((item) => (
					<SectionItem
						title={item.title}
						info={item.info}
						key={item.title}
					/>
				))}
			</Section>
			<Section title="Formación">
				{trainingData.map((data) => (
					<SectionItem
						title={data.title}
						info={data.info}
						key={data.title}
					/>
				))}
			</Section>
		</Page>
	);
};

export default FirstPage;
