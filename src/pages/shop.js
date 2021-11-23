import React from 'react';

/// *** COMPONENTS *** ///
import ProductList from '../components/ProductList/ProductList';
import SearchFilters from '../components/SearchFilters/SearchFilters';

/// *** CSS *** ///
import styles from './Styles/shop.module.css';

/// *** DATA *** ///
import { products } from '../data';

class Shop extends React.Component {
	constructor() {
		super();
		this.handleSearchInput = this.handleSearchInput.bind(this);
		this.handleChangeCategory = this.handleChangeCategory.bind(this);
		this.handleChangeStocked = this.handleChangeStocked.bind(this);

		this.state = {
			input: '',
			category: '',
			stocked: false,
		};
	}

	handleSearchInput(input) {
		this.setState({ input: input });
	}

	handleChangeCategory(category) {
		this.setState({ category: category });
		if (category === 'All') {
			this.setState({ category: '' });
		}
	}

	handleChangeStocked(stocked) {
		this.setState({ stocked: stocked });
	}

	render() {
		let categories = [];
		products.forEach((item) => {
			categories.push(item.category);
		});
		categories = [...new Set(categories)];

		return (
			<div className={styles.container}>
				<div className={styles.col3}>
					<SearchFilters
						categoryList={categories}
						onChangeCategory={this.handleChangeCategory}
						onChangeStock={this.handleChangeStocked}
						onSearchInput={this.handleSearchInput}
						valueCategory={this.state.category}
						valueInput={this.state.input}
						valueStocked={this.state.stocked}
					/>
				</div>
				<div className={styles.col9}>
					<ProductList
						productList={products}
						valueCategory={this.state.category}
						valueInput={this.state.input}
						valueStocked={this.state.stocked}
					/>
				</div>
			</div>
		);
	}
}

export default Shop;
