import React from 'react';

// *** CSS *** //
import styles from './Styles/contact.module.css';

const initialState = {
	firstname: '',
	surname: '',
	adress: '',
	number: '',
	opinion: '',
	privacy: false,
	validate: '',
};

class Contact extends React.Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = initialState;
	}

	handleChange(e) {
		const field = e.target.name;
		if (e.target.type === 'radio') {
			this.setState({ opinion: e.target.value });
		}
		if (e.target.type === 'checkbox') {
			this.setState({ privacy: !this.state.privacy });
		}
		if (e.target.type === 'text' || e.target.type === 'number') {
			this.setState({ [field]: e.target.value });
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		const isValidate = this.validateForm();
		if (isValidate) {
			alert(
				'First name: ' +
					this.state.firstname +
					' ' +
					'Surname: ' +
					this.state.surname +
					' ' +
					'Home adress: ' +
					this.state.adress +
					' ' +
					'Phone number: ' +
					this.state.number +
					' ' +
					'Like shop: ' +
					this.state.opinion
			);
			this.setState(initialState);
		}
	}

	validateForm() {
		const validate = this.state;
		if (
			!validate.firstname ||
			!validate.number ||
			validate.number.length !== 9 ||
			!validate.opinion ||
			!validate.privacy
		) {
			this.setState({ validate: true });
			return false;
		}
		this.setState({ validate: false });
		return true;
	}

	render() {
		const error = this.state.validate;
		return (
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.header}>Contact us</h1>
					<p className={styles.paragraphDescription}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
						congue felis. Maecenas vitae mollis magna. Curabitur eget
						ullamcorper nibh, vel tempus erat. Etiam eget ex ac lacus tristique
						facilisis. Duis libero quam.
					</p>

					<form onSubmit={this.handleSubmit}>
						<div className={styles.productForm}>
							<input
								className={styles.input}
								name="firstname"
								onChange={this.handleChange}
								placeholder="First name..."
								type="text"
								value={this.state.firstname}
							/>

							{error && this.state.firstname === '' ? (
								<div className={styles.error}>First name cannot be empty</div>
							) : (
								''
							)}

							<input
								className={styles.input}
								name="surname"
								onChange={this.handleChange}
								placeholder="Surname..."
								type="text"
								value={this.state.surname}
							/>

							<input
								className={styles.input}
								name="adress"
								onChange={this.handleChange}
								placeholder="Home adress..."
								type="text"
								value={this.state.adress}
							/>

							<input
								className={styles.input}
								name="number"
								onChange={this.handleChange}
								placeholder="Phone number..."
								type="number"
								value={this.state.number}
							/>

							{error &&
							(this.state.number === '' || this.state.number.length !== 9) ? (
								<div className={styles.error}>
									The number should have 9 digits
								</div>
							) : (
								''
							)}

							<div className="radio">
								<span className={styles.spanInfo}>Do you like our shop?</span>
								<div className={styles.radioDetail}>
									<input
										checked={this.state.opinion === 'yes'}
										onChange={this.handleChange}
										type="radio"
										value="yes"
									/>
									Yes
								</div>
								<div className={styles.radioDetail}>
									<input
										checked={this.state.opinion === 'no'}
										onChange={this.handleChange}
										type="radio"
										value="no"
									/>
									No
								</div>
								<div className={styles.radioDetail}>
									<input
										checked={this.state.opinion === 'average'}
										onChange={this.handleChange}
										type="radio"
										value="average"
									/>
									Average
								</div>

								{error && this.state.opinion === '' ? (
									<div className={styles.error}>Select your opinion</div>
								) : (
									''
								)}
							</div>

							<input
								className={styles.submit}
								type="submit"
								value="Send message"
							/>
							<div className={styles.checkbox}>
								<span className={styles.spanInfo}>
									{' '}
									Accept Terms & Conditions
								</span>
								<input
									checked={this.state.privacy}
									className={styles.inputCheckbox}
									onChange={this.handleChange}
									type="checkbox"
									value={this.state.privacy}
								/>
							</div>

							{error && !this.state.privacy ? (
								<div className={styles.error}>
									You have to accept Terms & Conditions
								</div>
							) : (
								''
							)}
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Contact;
