import React from 'react';
import styles from './SecondPage.module.scss';

import Page from '../Page';
import PropElement from '../PropElement';
import { knowledge, languages, certData } from '../data';
import SectionItem from '../SectionItem';
import Section from '../Section';
import TagSection from '../TagSection';

const SecondPage: React.FC = () => {
	return (
		<Page className={styles.root}>
			<Section title="Logros y certificaciones">
				{certData.map((cert) => (
					<SectionItem title={cert.title} info={cert.info} key={cert.title} />
				))}
			</Section>
			<TagSection title="Aptitudes y conocimientos">
				{knowledge.map((item) => (
					<PropElement key={item.title}>{item.title}</PropElement>
				))}
			</TagSection>
			<TagSection title="Idiomas">
				{languages.map((lang) => (
					<PropElement key={lang.title} subtitle={lang.subtitle}>
						{lang.title}
					</PropElement>
				))}
			</TagSection>
		</Page>
	);
};

export default SecondPage;
