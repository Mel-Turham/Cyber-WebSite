import './CardBanner.scss';
import ButtonPrimaryBlack from '../Buttons/ButtonPrimaryBlack/ButtonPrimaryBlack';
import AirPord from '../../assets/images/AirPortHuawei.png';
import AppleWatch from '../../assets/images/AppleWatchWhite.png';
import IpadPro from '../../assets/images/Ipad Pro.png';
import Samsung from '../../assets/images/Samsung Galaxy.png';
import MacBookPro from '../../assets/images/Macbook Pro.png';

const CardBanner = () => {
	return (
		<section className='container'>
			<div className='card-banner'>
				<div className='header-card'>
					<img
						className='header-card-image'
						src={AirPord}
						alt='image product'
						loading='lazy'
					/>
					<img
						className='header-card-image'
						src={AppleWatch}
						alt='image product'
						loading='lazy'
					/>
				</div>

				<div className='footer-card'>
					<h3>Popular Products</h3>
					<p className='description'>
						iPad combines a magnificent 10.2-inch Retina display, incredible
						performance, multitasking and ease of use.
					</p>
					<ButtonPrimaryBlack />
				</div>
			</div>
			<div className='card-banner'>
				<div className='header-card'>
					<img
						className='header-card-image'
						src={IpadPro}
						alt='image product'
						loading='lazy'
					/>
				</div>

				<div className='footer-card'>
					<h3>Ipad Pro</h3>
					<p className='description'>
						iPad combines a magnificent 10.2-inch Retina display, incredible
						performance, multitasking and ease of use.
					</p>
					<ButtonPrimaryBlack />
				</div>
			</div>
			<div className='card-banner'>
				<div className='header-card'>
					<img
						className='header-card-image'
						src={Samsung}
						alt='image product'
						loading='lazy'
					/>
				</div>

				<div className='footer-card'>
					<h3>Samsung Galaxy </h3>
					<p className='description'>
						iPad combines a magnificent 10.2-inch Retina display, incredible
						performance, multitasking and ease of use.
					</p>
					<ButtonPrimaryBlack />
				</div>
			</div>
			<div className='card-banner'>
				<div className='header-card'>
					<img
						className='header-card-image'
						src={MacBookPro}
						alt='image product'
						loading='lazy'
					/>
				</div>

				<div className='footer-card'>
					<h3>Macbook Pro</h3>
					<p className='description'>
						iPad combines a magnificent 10.2-inch Retina display, incredible
						performance, multitasking and ease of use.
					</p>
					<ButtonPrimaryBlack />
				</div>
			</div>
		</section>
	);
};

export default CardBanner;
