import React from 'react';
import { description, experience, personalData, trainingData } from '../../data/data';
import { Page } from '../../shared/components/Page/Page.component';
import { PersonalData } from '../../shared/components/PersonalData/PersonalData.component';
import { Section } from '../../shared/components/Section/Section.component';
import { SectionItem } from '../../shared/components/SectionItem/SectionItem.component';
import styles from './FirstPage.module.scss';

export const FirstPage: React.FC = () => {
	return (
		<Page className={styles.root}>
			<span className={styles.name}>Elizabeth Martín Campos</span>
			<PersonalData data={personalData}>
				<p className={styles.description}>{description}</p>
			</PersonalData>
			<Section title="Experience">
				{experience.map((item) => (
					<SectionItem title={item.title} info={item.info} key={item.title} />
				))}
			</Section>
			<Section title="Education">
				{trainingData.map((data) => (
					<SectionItem title={data.title} info={data.info} key={data.title} />
				))}
			</Section>
		</Page>
	);
};
