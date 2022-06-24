import React from 'react';
import { certData, knowledge, languages, sideData } from '../../data/data';
import { Page } from '../../shared/components/Page/Page.component';
import { PropElement } from '../../shared/components/PropElement/PropElement.component';
import { Section } from '../../shared/components/Section/Section.component';
import { SectionItem } from '../../shared/components/SectionItem/SectionItem.component';
import { TagSection } from '../../shared/components/TagSection/TagSection.component';
import styles from './SecondPage.module.scss';

export const SecondPage: React.FC = () => {
	return (
		<Page className={styles.root}>
			<Section title="Awards & Certifications">
				{certData.map((cert) => (
					<SectionItem title={cert.title} info={cert.info} key={cert.title} />
				))}
			</Section>
			<Section title="Side projects">
				{sideData.map((project) => (
					<SectionItem title={project.title} info={project.info} key={project.title} />
				))}
			</Section>
			<TagSection title="Skills">
				{knowledge.map((item) => (
					<PropElement key={item.title}>{item.title}</PropElement>
				))}
			</TagSection>
			<TagSection title="Languages">
				{languages.map((lang) => (
					<PropElement key={lang.title} subtitle={lang.subtitle}>
						{lang.title}
					</PropElement>
				))}
			</TagSection>
		</Page>
	);
};
