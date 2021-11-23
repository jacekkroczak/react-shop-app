import React, { useState } from 'react';

// *** COMPONENTS *** //
import AccordionItem from './AccordionItem';

// *** CSS *** //
import styles from './Styles/AccordionMain.module.css';

const AccordionMain = (props) => {
	const items = props.items;
	const [activeIdItem, setActiveIdItem] = useState(0);

	const showItems = items.map((item) => {
		const title = item.title;
		const description = item.id === activeIdItem ? item.description : '';
		const bold = item.id === activeIdItem ? 'bold' : '';
		return (
			<AccordionItem
				bold={bold}
				description={description}
				key={item.id}
				title={title}
				onClick={() => {
					setActiveIdItem(item.id);
				}}
			/>
		);
	});
	return <div className={styles.accordion}>{showItems}</div>;
};

export default AccordionMain;
