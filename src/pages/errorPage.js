import React from 'react';
import { Link } from 'react-router-dom';

// *** CSS *** //
import styles from './Styles/errorPage.module.css';

const ErrorPage = () => (
	<div className={styles.notFoundBackground}>
		<div className={styles.container}>
			<h1 className={styles.header}>404 - Page not found</h1>
			<Link to="/">
				<button className={styles.button}>Back to Home Page</button>
			</Link>
		</div>
	</div>
);

export default ErrorPage;
