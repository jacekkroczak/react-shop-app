import React from 'react';
import ReactDOM from 'react-dom';

/// *** CSS *** ///
import styles from './Popup.module.css';

const initialState = {
	name: '',
	email: '',
	description: '',
	showSendMessage: false,
	validate: '',
};

class Popup extends React.Component {
	constructor(props) {
		super(props);
		this.handlePopupClick = this.handlePopupClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = initialState;
	}

	handlePopupClick() {
		this.props.showPopup();
	}

	handleChange(e) {
		const field = e.target.name;
		this.setState({ [field]: e.target.value, showSendMessage: false });
	}

	handleSubmit(e) {
		e.preventDefault();
		const isValidate = this.validateForm();
		if (isValidate) {
			alert(
				'name: ' +
					this.state.name +
					' ' +
					'email: ' +
					this.state.email +
					' ' +
					'Description: ' +
					this.state.description
			);
			this.setState(initialState);
			this.setState({ showSendMessage: true });
		}
	}

	validateForm() {
		const validate = this.state;

		if (
			!validate.name ||
			!validate.email.includes('@') ||
			!validate.email.includes('.') ||
			!validate.description
		) {
			this.setState({ validate: true });
			return false;
		}
		this.setState({ validate: false });
		return true;
	}

	render() {
		const item = this.props.item;
		const error = this.state.validate;

		return ReactDOM.createPortal(
			<>
				<div className={styles.overlay}></div>
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<span
							className={styles.close}
							onClick={this.handlePopupClick}
						></span>
						<form onSubmit={this.handleSubmit}>
							<div className={styles.productInfo}>
								{item != null ? (
									<p>
										Ask for: <span className={styles.bold}>{item.name}</span>
									</p>
								) : (
									<p className={styles.bold}>Contact Form</p>
								)}

								{item != null ? (
									<p>
										Category:{' '}
										<span className={styles.bold}>{item.category}</span>
									</p>
								) : (
									''
								)}
							</div>
							<div className={styles.productForm}>
								<input
									className={styles.input}
									name="name"
									onChange={this.handleChange}
									placeholder="Name and surname..."
									type="text"
									value={this.state.name}
								/>

								{error && this.state.name === '' ? (
									<div className={styles.error}>Field cannot be empty</div>
								) : (
									''
								)}

								<input
									className={styles.input}
									name="email"
									onChange={this.handleChange}
									placeholder="Email address..."
									type="text"
									value={this.state.email}
								/>

								{error &&
								(this.state.email === '' ||
									!this.state.email.includes('@') ||
									!this.state.email.includes('.')) ? (
									<div className={styles.error}>
										Field cannot be empty (missing @ and .)
									</div>
								) : (
									''
								)}

								<textarea
									className={styles.textarea}
									name="description"
									onChange={this.handleChange}
									placeholder="Description..."
									type="textarea"
									value={this.state.description}
								/>

								{error && this.state.description === '' ? (
									<div className={styles.error}>First name cannot be empty</div>
								) : (
									''
								)}

								<input
									className={styles.submit}
									type="submit"
									value="Send message"
								/>

								{this.state.showSendMessage ? (
									<div className={styles.sent}>Your message has been sent!</div>
								) : (
									''
								)}
							</div>
						</form>
					</div>
				</div>
			</>,
			document.getElementById('root')
		);
	}
}

export default Popup;
