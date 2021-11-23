import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

/// *** CSS + Slider *** ///
import styles from './Styles/home.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/// *** ICONS *** ///
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShopify,
	faJsSquare,
	faMicroblog,
	faFacebookMessenger,
} from '@fortawesome/free-brands-svg-icons';

function SampleNextArrow(props) {
	const { onClick } = props;
	return <div className={styles.next} onClick={onClick} />;
}

function SamplePrevArrow(props) {
	const { onClick } = props;
	return <div className={styles.prev} onClick={onClick} />;
}

class Home extends React.Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			slidesToScroll: 1,
			slidesToShow: 1,
			speed: 500,
		};
		return (
			<>
				<div>
					<Slider className={styles.slider} {...settings}>
						<div className={styles.slide1}>
							<div className={styles.sliderContent}>
								<p className={styles.paragraph}>
									Check our shop and find your product
								</p>
								<Link
									className={styles.link}
									to={{
										pathname: `/shop`,
									}}
								>
									<button className={styles.button}>Shop</button>
								</Link>
							</div>
						</div>
						<div className={styles.slide2}>
							<div className={styles.sliderContent}>
								<p className={styles.paragraph}>
									Do you have any question to us?
								</p>
								<Link
									className={styles.link}
									to={{
										pathname: `/contact`,
									}}
								>
									<button className={styles.button}>Contact</button>
								</Link>
							</div>
						</div>
					</Slider>
				</div>
				<div className={styles.container}>
					<div className={styles.content}>
						<h1 className={styles.header}>Home page site</h1>
						<p className={styles.paragraphDescription}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
							congue felis. Maecenas vitae mollis magna. Curabitur eget
							ullamcorper nibh, vel tempus erat. Etiam eget ex ac lacus
							tristique facilisis. Duis libero quam, pharetra vitae metus sed,
							pulvinar sagittis magna. Praesent gravida augue augue. Duis
							consectetur varius erat eu volutpat. Phasellus iaculis lorem non
							elit auctor tincidunt. Nullam ac vulputate elit, eu porta ex. Ut
							placerat, felis nec convallis tristique, nibh neque blandit quam,
							eget consequat magna magna at quam. Nullam ac vulputate elit, eu
							porta ex. Ut placerat, felis nec convallis tristique, nibh neque
							blandit quam, eget consequat magna magna at quam.
						</p>
					</div>
				</div>
				<div className={styles.containerFullWidth}>
					<div className={styles.banner}>
						<div className={styles.col3}>
							<FontAwesomeIcon className={styles.icon} icon={faShopify} />
							<Link
								className={styles.link}
								to={{
									pathname: `/shop`,
								}}
							>
								<p>Shop</p>
							</Link>
						</div>
						<div className={styles.col3}>
							<FontAwesomeIcon className={styles.icon} icon={faJsSquare} />
							<Link
								className={styles.link}
								to={{
									pathname: `/about`,
								}}
							>
								<p>About us</p>
							</Link>
						</div>
						<div className={styles.col3}>
							<FontAwesomeIcon className={styles.icon} icon={faMicroblog} />
							<Link
								className={styles.link}
								to={{
									pathname: `/blog`,
								}}
							>
								<p>Blog</p>
							</Link>
						</div>
						<div className={styles.col3}>
							<FontAwesomeIcon
								className={styles.icon}
								icon={faFacebookMessenger}
							/>
							<Link
								className={styles.link}
								to={{
									pathname: `/contact`,
								}}
							>
								<p>Contact</p>
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.container}>
					<div className={styles.content}>
						<h1 className={styles.header}>About our shop</h1>
						<p className={styles.paragraphDescription}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
							congue felis. Maecenas vitae mollis magna. Curabitur eget
							ullamcorper nibh, vel tempus erat. Etiam eget ex ac lacus
							tristique facilisis. Duis libero quam, pharetra vitae metus sed,
							pulvinar sagittis magna. Praesent gravida augue augue. Duis
							consectetur varius erat eu volutpat. Phasellus iaculis lorem non
							elit auctor tincidunt. Nullam ac vulputate elit, eu porta ex. Ut
							placerat, felis nec convallis tristique.
						</p>
					</div>
				</div>
			</>
		);
	}
}

export default Home;
