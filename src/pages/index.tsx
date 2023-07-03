import { PersonalData } from '@/components/PersonalData/PersonalData.component';
import { PropElement } from '@/components/PropElement/PropElement.component';
import { Section } from '@/components/Section/Section.component';
import { SectionItem } from '@/components/SectionItem/SectionItem.component';
import { TagSection } from '@/components/TagSection/TagSection.component';
import { description, experience, languages, personalData, recognitionData, skills } from '@/data/data';
import classNames from 'classnames';
import { Open_Sans } from 'next/font/google';
import Head from 'next/head';
import styles from './index.module.scss';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>CV - Elizabeth</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={classNames(styles.page, openSans.className)}>
				<div className={styles.content}>
					<h1 className={styles.name}>Elizabeth Martín Campos</h1>
					<PersonalData data={personalData}>
						<p className={styles.description}>{description}</p>
					</PersonalData>
					{/* WORK EXPERIENCE */}
					<Section title="Experience">
						{experience.map((item) => (
							<SectionItem data={item} key={item.title} />
						))}
					</Section>

					{/* SKILLS */}
					<Section title="Skills">
						{skills.map((item) => (
							<SectionItem data={item} key={item.title} />
						))}
					</Section>

					{/* EDUCATION */}
					<Section title="Education & Recognitions">
						{recognitionData.map((data) => (
							<SectionItem data={data} key={data.title} />
						))}
					</Section>

					{/* LANGUAGES */}
					<TagSection title="Languages">
						{languages.map((lang) => (
							<PropElement key={lang.title} subtitle={lang.subtitle}>
								{lang.title}
							</PropElement>
						))}
					</TagSection>
				</div>
			</main>
		</>
	);
}
