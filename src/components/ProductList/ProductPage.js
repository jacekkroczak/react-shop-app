import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

/// *** COMPONENTS *** ///
import Popup from '../Popups/Popup';

// *** CSS *** //
import styles from './Styles/ProductPage.module.css';

/// *** DATA *** ///
import { products } from '../../data';

const ProductPage = () => {
	const [show, setShow] = useState(false);
	const { id } = useParams();
	let productItem = {};
	products.forEach((item) => {
		if (item.id === Number(id)) {
			productItem = item;
		}
	});

	return (
		<>
			<div className={styles.container}>
				<div className={styles.col1}>
					<Link
						className={`${productItem.id === 1 ? `${styles.disabled}` : ''}`}
						to={`/shop/product/${productItem.id - 1}`}
					>
						<button className={styles.nextPrev}>Prev</button>
					</Link>
				</div>
				<div className={styles.col10}>
					<div className={styles.container}>
						<div className={styles.col6f}>
							<img
								alt={productItem.name}
								className={styles.image}
								src={require(`../../assets/shop/${productItem.src}`).default}
							/>
						</div>
						<div className={styles.col6s}>
							<div className={styles.info}>
								<h2 className={styles.h2}>
									{productItem.name}
									{productItem.stocked ? (
										<span className={styles.stocked}> (Not Available) </span>
									) : (
										''
									)}
								</h2>
								<p className={styles.pCategory}>
									Category: {productItem.category}
								</p>
							</div>
							<div className={styles.description}>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
									vestibulum vel libero sed ornare. Nulla posuere enim sem, vel
									faucibus erat tincidunt sit amet. Duis vestibulum, est ut
									condimentum vestibulum, turpis risus ornare nisl, ac interdum
									elit nisi ut lacus. Sed scelerisque, lectus id malesuada
									congue, arcu quam vulputate lacus, at tempor leo tortor id
									enim. Etiam auctor consequat pulvinar.
								</p>
							</div>
							<div className={styles.price}>
								<span className={styles.priceSpan}>
									Price: {productItem.price}
								</span>
								{!productItem.stocked ? (
									<Link to={`/payment`}>
										<button className={styles.priceButton}>Buy</button>{' '}
									</Link>
								) : (
									<button
										className={styles.priceButtonStocked}
										onClick={() => setShow(!show)}
									>
										Ask us
									</button>
								)}

								{show ? (
									<Popup item={productItem} showPopup={() => setShow(!show)} />
								) : (
									''
								)}
							</div>
						</div>
					</div>
				</div>
				<div className={styles.col1}>
					<Link
						className={`${
							productItem.id === products.length ? `${styles.disabled}` : ''
						}`}
						to={`/shop/product/${productItem.id + 1}`}
					>
						<button className={styles.nextPrev}>Next</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ProductPage;
