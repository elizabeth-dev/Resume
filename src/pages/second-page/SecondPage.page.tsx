import React from 'react';
import styles from './SecondPage.module.scss';

import { Page } from '../../shared/components/Page/Page.component';
import { PropElement } from '../../shared/components/PropElement/PropElement.component';
import { knowledge, certData } from '../../data/data';
import { SectionItem } from '../../shared/components/SectionItem/SectionItem.component';
import { Section } from '../../shared/components/Section/Section.component';
import { TagSection } from '../../shared/components/TagSection/TagSection.component';

export const SecondPage: React.FC = () => {
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
		</Page>
	);
};
