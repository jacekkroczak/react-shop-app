import React from 'react';

// *** CSS *** //
import styles from './Styles/AddBlogItem.module.css';

const initialState = {
	id: '',
	title: '',
	description: '',
	author: '',
	validate: '',
};

class AddBlogItem extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = initialState;
	}

	handleSubmit(e) {
		e.preventDefault();
		const validateForm = this.validateForm();
		if (validateForm) {
			const id = Date.now();
			const item = { ...this.state, id };
			this.props.onSubmitBlogItem(item);
			this.setState(initialState);
		}
	}

	handleChange(e) {
		const field = e.target.name;
		this.setState({ [field]: e.target.value });
	}

	validateForm() {
		const validate = this.state;

		if (!validate.title || !validate.description || !validate.author) {
			this.setState({ validate: true });
			return false;
		}
		this.setState({ validate: false });
		return true;
	}

	render() {
		const error = this.state.validate;
		return (
			<div className={styles.addPost}>
				<div className={styles.addPostContent}>
					<h2 className={styles.h2}>Add Post</h2>
					<form className={styles.form} onSubmit={this.handleSubmit}>
						<input
							className={styles.input}
							name="title"
							onChange={this.handleChange}
							placeholder="Title..."
							type="text"
							value={this.state.title}
						/>

						{error && this.state.title === '' ? (
							<div className={styles.error}>Field cannot be empty</div>
						) : (
							''
						)}

						<textarea
							className={styles.textarea}
							name="description"
							onChange={this.handleChange}
							placeholder="Description..."
							type="text"
							value={this.state.description}
						/>

						{error && this.state.description === '' ? (
							<div className={styles.error}>Field cannot be empty</div>
						) : (
							''
						)}

						<input
							className={styles.input}
							name="author"
							onChange={this.handleChange}
							placeholder="Author..."
							type="text"
							value={this.state.author}
						/>

						{error && this.state.author === '' ? (
							<div className={styles.error}>Field cannot be empty</div>
						) : (
							''
						)}

						<input className={styles.submit} value="Add post" type="submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default AddBlogItem;
