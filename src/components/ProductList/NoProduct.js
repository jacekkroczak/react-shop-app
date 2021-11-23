import React from 'react';

/// *** CSS *** ///
import styles from './Styles/NoProduct.module.css';

const NoProduct = () => {
	return (
		<div className={styles.noProduct}>
			<p className={styles.noProductParagraph}>
				No search results. Try again...
			</p>
		</div>
	);
};

export default NoProduct;
