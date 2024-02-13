import './Footer.scss';
import LogoWhite from '../../assets/Svgs/LogoWhite.svg';
import FaceBook from '../../assets/Svgs/facebook.svg'
import Twitter from '../../assets/Svgs/Twitter.svg'
import Instagrem from '../../assets/Svgs/Instagram.svg'

const Footer = () => {
	return (
		<footer className='Footer'>
			<div className='Footer__container'>
				<div className='Footer__container__left'>
					<img src={LogoWhite} alt='Logo' loading='lazy' />
					<p>
						We are a residential interior design firm located in Portland. Our
						boutique-studio offers more than
					</p>
				</div>

				<menu className='menu'>
					<ul className='menu__list'>
						<h3>Services</h3>
						<li className='menu__list__item'>
							<a href='#' target='_blank' rel='noopener noreferrer'>
								Bonus program
							</a>
						</li>
						<li className='menu__list__item'>
							<a href='#' target='_blank' rel='noopener noreferrer'>
								Gift cards
							</a>
						</li>
						<li className='menu__list__item'>
							<a href='#' target='_blank' rel='noopener noreferrer'>
								Credit and payment
							</a>
						</li>
						<li className='menu__list__item'>
							<a href='#' target='_blank' rel='noopener noreferrer'>
								Service contracts
							</a>
						</li>
						<li className='menu__list__item'>
							<a href='#' target='_blank' rel='noopener noreferrer'>
								Non-cash account
							</a>
						</li>
						<li className='menu__list__item'>
							<a href='#' target='_blank' rel='noopener noreferrer'>
								Payment
							</a>
						</li>
					</ul>
					<ul className='menu__list'>
						<h3>Assistance to the buyer</h3>
						<li className='menu__list__item'>
							<a href='#' target='_blank' rel='noopener noreferrer'>
								Find an order
							</a>
						</li>
						<li className='menu__list__item'>
							<a href='#' target='_blank' rel='noopener noreferrer'>
								Terms of delivery
							</a>
						</li>
						<li className='menu__list__item'>
							<a href='#' target='_blank' rel='noopener noreferrer'>
								Exchange and return of goods
							</a>
						</li>
						<li className='menu__list__item'>
							<a href='#' target='_blank' rel='noopener noreferrer'>
								Guarantee
							</a>
						</li>
						<li className='menu__list__item'>
							<a href='#' target='_blank' rel='noopener noreferrer'>
								Frequently asked questions
							</a>
						</li>
						<li className='menu__list__item'>
							<a href='#' target='_blank' rel='noopener noreferrer'>
              Terms of use of the site
							</a>
						</li>
					</ul>
				</menu>
			</div>
			<div className='container-socials'>
				<a href=''>
					<img src={FaceBook} alt='Facrbook-logo' loading='lazy' />
				</a>
				<a href=''>
					<img src={Twitter} alt='Twitter-logo' loading='lazy' />
				</a>
				<a href=''>
					<img src={Instagrem} alt='Instagram-logo' loading='lazy' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
