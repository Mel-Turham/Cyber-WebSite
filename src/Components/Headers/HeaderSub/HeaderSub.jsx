import './HeaderSub.scss';
import Phone from '../../../assets/Svgs/Phones.svg';
import Computer from '../../../assets/Svgs/Computers.svg';
import Cameras from '../../../assets/Svgs/Cameras.svg';
import Headphones from '../../../assets/Svgs/Headphones Svg.svg';
import Gaming from '../../../assets/Svgs/Gaming.svg';

const HeaderSub = () => {
  
	return (
		<header className='HeaderSub'>
			<nav className='HeaderSub__Nav'>
				<ul className='HeaderSub__Nav__Lists'>
					<li className='HeaderSub__Nav__Lists__Item'>
						<a href='#' className='HeaderSub__nav__lists__Item__Link'>
							<img src={Phone} alt='' />
						</a>
						Phones
					</li>
					<li className='HeaderSub__Nav__Lists__Item'>
						<a href='#' className='HeaderSub__nav__lists__Item__Link'>
							<img src={Computer} alt='' />
						</a>
						Computers
					</li>
					<li className='HeaderSub__Nav__Lists__Item'>
						<a href='#' className='HeaderSub__nav__lists__Item__Link'>
							<img src={Gaming} alt='' />
						</a>
						Smart Watches
					</li>
					<li className='HeaderSub__Nav__Lists__Item'>
						<a href='#' className='HeaderSub__nav__lists__Item__Link'>
							<img src={Cameras} alt='' />
						</a>
						Cameras
					</li>
					<li className='HeaderSub__Nav__Lists__Item'>
						<a href='#' className='HeaderSub__nav__lists__Item__Link'>
							<img src={Headphones} alt='' />
						</a>
						Headphones
					</li>
					<li className='HeaderSub__Nav__Lists__Item'>
						<a href='#' className='HeaderSub__nav__lists__Item__Link'>
							<img src={Gaming} alt='' />
						</a>
						Gaming
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default HeaderSub;
