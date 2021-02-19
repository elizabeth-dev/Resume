import React from 'react';
import styles from './FirstPage.module.scss';

import { Page } from '../../shared/components/Page/Page.component';
import { PersonalData } from '../../shared/components/PersonalData/PersonalData.component';
import { SectionItem } from '../../shared/components/SectionItem/SectionItem.component';
import { personalData, experience, trainingData, description, languages } from '../../data/data';
import { Section } from '../../shared/components/Section/Section.component';
import { TagSection } from '../../shared/components/TagSection/TagSection.component';
import { PropElement } from '../../shared/components/PropElement/PropElement.component';

export const FirstPage: React.FC = () => {
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
			<TagSection title="Idiomas">
				{languages.map((lang) => (<PropElement key={lang.title} subtitle={lang.subtitle}>
					{lang.title}
				</PropElement>))}
			</TagSection>
		</Page>
	);
};
