import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/// *** COMPONENTS *** ///
import Popup from '../Popups/Popup';

// *** CSS *** //
import styles from './Navbar.module.css';

/// *** CONTEXT *** ///
import { FavoriteContext } from '../../state/FavoriteContext';

/// *** ASSETS *** ///
import logoWhite from '../../assets/logoWhite.png';

/// *** ICONS *** ///
import {
	faHeart as faSolidHeart,
	faHamburger,
	faWindowClose,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	const [show, setShow] = useState(false);
	const [menu, setMenu] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const [favorite, setFavorite] = useContext(FavoriteContext);

	const removeItem = (id) => {
		setFavorite(favorite.filter((item) => item.id !== id));
	};

	return (
		<>
			<nav className={styles.nav}>
				<div className={styles.logo}>
					<NavLink to="/">
						<img alt="logo" src={logoWhite} />
					</NavLink>
				</div>
				<div className={styles.menu}>
					<NavLink
						className={styles.menuItem}
						onClick={() => setShowDropdown(false)}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className={styles.menuItem}
						onClick={() => setShowDropdown(false)}
						to="/shop"
					>
						Shop
					</NavLink>
					<NavLink
						className={styles.menuItem}
						onClick={() => setShowDropdown(false)}
						to="/blog"
					>
						Blog
					</NavLink>
					<NavLink
						className={styles.menuItem}
						onClick={() => setShowDropdown(false)}
						to="/about"
					>
						About us
					</NavLink>
					<NavLink
						className={styles.menuItem}
						onClick={() => setShowDropdown(false)}
						to="/contact"
					>
						Contact
					</NavLink>
				</div>
				<div className={styles.contact}>
					<FontAwesomeIcon
						className={styles.favorites}
						icon={faSolidHeart}
						onClick={() => setShowDropdown(!showDropdown)}
					/>
					<div className={styles.countList}>{favorite.length}</div>
					{showDropdown ? (
						<div className={styles.dropdown}>
							<div className={styles.dropdownContent}>
								{favorite.length > 0 ? (
									favorite.map((item) => (
										<div key={item.id} className={styles.dropdownItem}>
											<Link
												className={styles.link}
												onClick={() => setShowDropdown(!showDropdown)}
												to={{
													pathname: `/shop/product/${item.id}`,
												}}
											>
												{item.name}
											</Link>
											<span
												className={styles.remove}
												onClick={() => removeItem(item.id)}
											></span>
										</div>
									))
								) : (
									<div className={styles.dropdownEmpty}>
										No favorite products
									</div>
								)}
							</div>
						</div>
					) : (
						''
					)}

					<button
						className={styles.quickMessage}
						onClick={() => setShow(!show)}
					>
						Quick message
					</button>
					{show ? <Popup showPopup={() => setShow(!show)} /> : ''}
				</div>
			</nav>
			<div className={styles.space}></div>
			<nav className={styles.navSecond}>
				<div className={styles.mobileFirstContent}>
					<div className={styles.logo}>
						<NavLink to="/">
							<img alt="logo" src={logoWhite} />
						</NavLink>
					</div>
					<FontAwesomeIcon
						className={styles.favorites}
						icon={faSolidHeart}
						onClick={() => setShowDropdown(!showDropdown)}
					/>
					{showDropdown ? (
						<div className={styles.dropdown}>
							<div className={styles.dropdownContent}>
								{favorite.length > 0 ? (
									favorite.map((item) => (
										<div key={item.id} className={styles.dropdownItem}>
											<Link
												className={styles.link}
												onClick={() =>
													setShowDropdown(!showDropdown) || setMenu(false)
												}
												to={{
													pathname: `/shop/product/${item.id}`,
												}}
											>
												{item.name}
											</Link>
											<span
												className={styles.remove}
												onClick={() => removeItem(item.id)}
											></span>
										</div>
									))
								) : (
									<div className={styles.dropdownEmpty}>
										No favorite products
									</div>
								)}
							</div>
						</div>
					) : (
						''
					)}
					<div className={styles.countList}>{favorite.length}</div>
					<FontAwesomeIcon
						className={styles.iconMobile}
						onClick={() => setMenu(!menu) || setShowDropdown(false)}
						icon={menu ? faWindowClose : faHamburger}
					/>
				</div>
				<div className={styles.mobileSecondContent}>
					{menu ? (
						<div className={styles.mobileContainer}>
							<div className={styles.menuMobile}>
								<NavLink
									className={styles.menuItemMobile}
									onClick={() => setMenu(!menu) || setShowDropdown(false)}
									to="/"
								>
									Home
								</NavLink>
								<NavLink
									className={styles.menuItemMobile}
									onClick={() => setMenu(!menu) || setShowDropdown(false)}
									to="/shop"
								>
									Shop
								</NavLink>
								<NavLink
									className={styles.menuItemMobile}
									onClick={() => setMenu(!menu) || setShowDropdown(false)}
									to="/blog"
								>
									Blog
								</NavLink>
								<NavLink
									className={styles.menuItemMobile}
									onClick={() => setMenu(!menu) || setShowDropdown(false)}
									to="/about"
								>
									About us
								</NavLink>
								<NavLink
									className={styles.menuItemMobile}
									onClick={() => setMenu(!menu) || setShowDropdown(false)}
									to="/contact"
								>
									Contact
								</NavLink>
							</div>
						</div>
					) : (
						''
					)}
				</div>
			</nav>
			<div className={styles.spaceMobile}></div>
		</>
	);
};

export default Navbar;
