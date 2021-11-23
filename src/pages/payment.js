import React from 'react';
import { Link } from 'react-router-dom';

/// *** CSS *** ///
import styles from './Styles/payment.module.css';

const Payment = () => {
	return (
		<div className={styles.paymentBackground}>
			<div className={styles.container}>
				<h1 className={styles.header}>Payment page coming soon</h1>
				<Link to="/shop">
					<button className={styles.button}>Back to shop</button>
				</Link>
			</div>
		</div>
	);
};

export default Payment;
