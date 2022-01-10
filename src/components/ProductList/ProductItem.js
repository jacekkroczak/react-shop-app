import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/// *** COMPONENTS *** ///
import Popup from '../Popups/Popup';

/// *** CSS *** ///
import styles from './Styles/ProductItem.module.css';

/// *** CONTEXT *** ///
import { FavoriteContext } from '../../state/FavoriteContext';

/// *** ICONS *** ///
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';

const ProductItem = (props) => {
	const [show, setShow] = useState(false);
	const [like, setLike] = useState(false);
	const [favorite, setFavorite] = useContext(FavoriteContext);

	useEffect(() => {
		favorite.filter((elem) =>
			elem.name === props.item.name ? setLike(true) : null
		);
		return () => {
			setLike(false);
		};
	});

	const addFavorite = () => {
		const value = { id: props.item.id, name: props.item.name };
		if (!like) {
			setFavorite((current) => [...current, value]);
		} else {
			setFavorite((current) =>
				[...current, value].filter((item) => item.name !== value.name)
			);
		}
		setLike(!like);
	};

	const item = props.item;
	return (
		<>
			<div
				className={`${
					item.stocked
						? `${styles.col4} ${styles.notStocked}`
						: `${styles.col4}`
				}`}
			>
				<h4 className={styles.header}>{item.name}</h4>
				<img
					alt={item.name}
					className={styles.imgItem}
					src={require(`../../assets/shop/${item.src}`).default}
				/>
				<div className={styles.buttonContent}>
					{item.stocked ? (
						<button
							className={styles.productAskButton}
							onClick={() => setShow(true)}
						>
							Availability
						</button>
					) : null}
					{show ? <Popup item={item} showPopup={() => setShow(!show)} /> : ''}
					<Link to={`/shop/product/${item.id}`}>
						<button className={styles.productPageButton}>Product</button>
					</Link>
					<div>
						{!item.stocked ? (
							<span onClick={addFavorite} className={styles.loveIt}>
								Favourite
							</span>
						) : (
							''
						)}
						<FontAwesomeIcon
							className={
								like ? `${styles.likedButton}` : `${styles.notLikedButton}`
							}
							icon={faSolidHeart}
							onClick={addFavorite}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductItem;
