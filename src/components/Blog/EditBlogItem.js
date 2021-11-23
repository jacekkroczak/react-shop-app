import React from 'react';

// *** CSS *** //
import styles from './Styles/EditBlogItem.module.css';

class EditBlogItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.state = {
			title: '',
			description: '',
			author: '',
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		let item = this.state;
		item = { ...item, id: this.props.editItem.id };
		this.checkItemParams(item);
		this.props.onUpdateBlogItem(item);
	}

	handleChange(e) {
		const field = e.target.name;
		this.setState({ [field]: e.target.value });
	}

	handleClose() {
		this.props.onCloseBlogEditItem();
	}

	checkItemParams(item) {
		let updatedItem = this.props.editItem;
		if (item.title === '') {
			item.title = updatedItem.title;
		}
		if (item.description === '') {
			item.description = updatedItem.description;
		}
		if (item.author === '') {
			item.author = updatedItem.author;
		}
	}

	render() {
		const updatedValue = this.props.editItem;
		return (
			<div className={styles.editPost}>
				<div className={styles.editPostContent}>
					<div className={styles.closeContent}>
						<h2 className={styles.h2}>Edit Post</h2>
						<button className={styles.buttonClose} onClick={this.handleClose}>
							Close
						</button>
					</div>
					<form className={styles.form} onSubmit={this.handleSubmit}>
						<input
							className={styles.input}
							defaultValue={this.state.title || updatedValue.title}
							name="title"
							onChange={this.handleChange}
							placeholder="Type here..."
							type="text"
						/>
						<textarea
							className={styles.textarea}
							defaultValue={this.state.description || updatedValue.description}
							name="description"
							onChange={this.handleChange}
							placeholder="Type here..."
							type="text"
						/>
						<input
							className={styles.input}
							defaultValue={this.state.author || updatedValue.author}
							name="author"
							onChange={this.handleChange}
							placeholder="Type here..."
							type="text"
						/>
						<input className={styles.submit} value="Edit post" type="submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default EditBlogItem;
