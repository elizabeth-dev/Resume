import React from 'react';
import styles from './FirstPage.module.scss';

import Page from '../Page';
import PersonalData from '../PersonalData';
import DataElement from '../DataElement';
import SectionItem from '../SectionItem';
import { personalData, experience, trainingData, description } from '../data';
import Section from '../Section';

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
			<p className={styles.description}>{description}</p>
			<Section title="Experiencia">
				{experience.map((item) => (
					<SectionItem title={item.title} info={item.info} key={item.title} />
				))}
			</Section>
			<Section title="Formación">
				{trainingData.map((data) => (
					<SectionItem title={data.title} info={data.info} key={data.title} />
				))}
			</Section>
		</Page>
	);
};

export default FirstPage;
