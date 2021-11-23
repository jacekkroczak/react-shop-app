//TODO:
// - Debounce

import React from 'react';

/// *** CSS *** ///
import styles from './SearchFilters.module.css';

class SearchFilters extends React.Component {
	constructor(props) {
		super(props);
		this.handleSearchInput = this.handleSearchInput.bind(this);
		this.handleChangeCategory = this.handleChangeCategory.bind(this);
		this.handleChangeStock = this.handleChangeStock.bind(this);
	}

	handleSearchInput(e) {
		this.props.onSearchInput(e.target.value);
	}

	handleChangeCategory(e) {
		this.props.onChangeCategory(e.target.value);
	}

	handleChangeStock(e) {
		this.props.onChangeStock(e.target.checked);
	}

	render() {
		const valueInput = this.props.valueInput;
		const valueCategory = this.props.valueCategory;
		const valueStoked = this.props.valueStoked;
		const categoryList = this.props.categoryList;
		return (
			<div className={styles.filtersContent}>
				<label className={styles.label}>
					Search:
					<input
						className={styles.input}
						onChange={this.handleSearchInput}
						placeholder="Type here..."
						type="text"
						value={valueInput}
					/>
				</label>

				<label className={styles.label}>
					Category:
					<select
						className={styles.select}
						onChange={this.handleChangeCategory}
						value={valueCategory}
					>
						<option value="All">All</option>
						{categoryList.map((item, index) => (
							<option key={index}>{item}</option>
						))}
					</select>
				</label>

				<div>
					<label className={styles.label}>
						Products not available
						<input
							checked={valueStoked}
							className={styles.checkbox}
							onChange={this.handleChangeStock}
							type="checkbox"
						/>
					</label>
				</div>
			</div>
		);
	}
}

export default SearchFilters;
