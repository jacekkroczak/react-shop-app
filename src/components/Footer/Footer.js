import React from 'react';
import { NavLink } from 'react-router-dom';

/// *** ICONS *** ///
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeadphones } from '@fortawesome/fontawesome-free-solid';

/// *** CSS *** ///
import styles from './Footer.module.css';

/// *** ASSETS *** ///
import logoWhite from '../../assets/logoWhite.png';

function Footer() {
	return (
		<>
			<div className={styles.footer}>
				<div className={styles.col3}>
					<img className={styles.logoFooter} alt="logo" src={logoWhite} />
					<p className={styles.paragraph}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
						est eu nibh molestie ornare. Cras feugiat mauris finibus libero
						dictum sodales. Sed imperdiet porta nisi quis rhoncus. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div className={styles.col3}>
					<h4 className={styles.h4}>Menu</h4>
					<ul className={styles.navigation}>
						<li className={styles.itemNavigation}>
							<NavLink className={styles.href} to="/">
								Home
							</NavLink>
						</li>
						<li className={styles.itemNavigation}>
							<NavLink className={styles.href} to="/shop">
								Shop
							</NavLink>
						</li>
						<li className={styles.itemNavigation}>
							<NavLink className={styles.href} to="/blog">
								Blog
							</NavLink>
						</li>
						<li className={styles.itemNavigation}>
							<NavLink className={styles.href} to="/about">
								About us
							</NavLink>
						</li>
						<li className={styles.itemNavigation}>
							<NavLink className={styles.href} to="/contact">
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
				<div className={styles.col3}>
					<h4 className={styles.h4}>More information</h4>
					<ul className={styles.navigationMore}>
						<li className={styles.itemNavigation}>
							<a
								className={styles.linkMoreInformation}
								href="mailto:jacek.kroczak1995@gmail.com"
							>
								<FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
								jacek.kroczak1995@gmail.com
							</a>
						</li>
						<li className={styles.itemNavigation}>
							<a className={styles.linkMoreInformation} href="tel:+48600550629">
								<FontAwesomeIcon className={styles.icon} icon={faHeadphones} />
								600 550 629
							</a>
						</li>
						<li className={styles.itemNavigation}>
							<a
								className={styles.linkMoreInformation}
								href="https://github.com/jacekkroczak?tab=repositories"
								rel="noreferrer"
								target="_blank"
							>
								<FontAwesomeIcon className={styles.icon} icon={faGithub} />
								My GitHub
							</a>
						</li>
					</ul>
					<blockquote className={styles.blockquote}>
						Tak, prawda jest bolesna. Może nie tak bolesna jak jazda na rowerze
						bez siodełka, ale jest bolesna. <br /> - Leslie Nielsen
					</blockquote>
				</div>
			</div>
			<div className={styles.copyright}>
				<p className={styles.paragraphCopy}>2021 &copy; All Rights Reserved </p>
			</div>
		</>
	);
}

export default Footer;
