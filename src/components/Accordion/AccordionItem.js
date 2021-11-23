import React from 'react';

// *** CSS *** //
import styles from './Styles/AccordionItem.module.css';

const AccordionItem = ({ bold, title, description, onClick }) => (
	<div className={styles.accordionContent}>
		<h4
			className={`${bold ? `${styles.bold} ${styles.h4}` : `${styles.h4}`}`}
			onClick={onClick}
		>
			{title}
		</h4>
		<p className={styles.paragraph}>{description}</p>
	</div>
);

export default AccordionItem;
