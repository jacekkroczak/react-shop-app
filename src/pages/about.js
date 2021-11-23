import React from 'react';

// *** COMPONENTS *** //
import AccordionMain from '../components/Accordion/AccordionMain';

// *** CSS *** //
import styles from './Styles/about.module.css';

// *** DATA *** //
import { AccordionItems } from '../dataAccordion';

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.header}>About us</h1>
				<p className={styles.paragraphDescription}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
					congue felis. Maecenas vitae mollis magna. Curabitur eget ullamcorper
					nibh, vel tempus erat. Etiam eget ex ac lacus tristique facilisis.
					Duis libero quam, pharetra vitae metus sed, pulvinar sagittis magna.
					Praesent gravida augue augue.
				</p>
				<AccordionMain items={AccordionItems} />
			</div>
		</div>
	);
};

export default About;
