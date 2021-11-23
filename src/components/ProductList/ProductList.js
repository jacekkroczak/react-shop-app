import React from 'react';

/// *** COMPONENTS *** ///
import NoProduct from './NoProduct';
import ProductItem from './ProductItem';

/// *** CSS *** ///
import styles from './Styles/ProductList.module.css';

const ProductList = (props) => {
	const valueInput = props.valueInput;
	const valueCategory = props.valueCategory;
	const valueStocked = props.valueStocked;
	const productList = props.productList;
	const filteredProducts = [];

	productList.forEach((item) => {
		if (item.name.toLowerCase().indexOf(valueInput.toLowerCase()) === -1) {
			return;
		}
		if (item.category.indexOf(valueCategory) === -1) {
			return;
		}
		if (item.stocked !== valueStocked) {
			return;
		}
		filteredProducts.push(<ProductItem key={item.id} item={item} />);
	});

	return (
		<>
			<div className={styles.categoryName}>
				Category: {valueCategory === '' ? 'All' : valueCategory}
			</div>
			<div className={styles.container}>
				{filteredProducts.length !== 0 ? filteredProducts : <NoProduct />}
			</div>
		</>
	);
};

export default ProductList;
