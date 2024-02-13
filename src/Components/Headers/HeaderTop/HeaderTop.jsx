import { NavLink } from 'react-router-dom';
import './HeaderTop.scss';
import Logo from '../../../assets/Svgs/Logo Vector.svg';
import Search from '../../../assets/Svgs/Search.svg';
import Like from '../../../assets/Svgs/Like.svg';
import Cart from '../../../assets/Svgs/Cart.svg';
import User from '../../../assets/Svgs/User.svg';

const HeaderTop = () => {
	return (
		<header className='headerTop'>
			<a href='#' className='logo'>
				<img src={Logo} alt='logo' loading='lazy' />
			</a>
			<form action='' id='SearchField'>
				<label className='labelForSeach' htmlFor='search'>
					<img src={Search} alt='searchIconSvg' />
				</label>
				<input
					type='search'
					id='search'
					placeholder='Search'
					autoComplete='off'
				/>
			</form>

			<nav className='containerNav'>
				<ul className='lists'>
					<li className='listItem'>
						<NavLink className='Link' to='/'>Home</NavLink>
					</li>
					<li className='listItem'>
						<NavLink className='Link' to='/Products'>
							Products
						</NavLink>
					</li>
					<li className='listItem'>
						<NavLink className='Link' to='/About'>About</NavLink>
					</li>
					<li className='listItem'>
						<NavLink className='Link' to='/ContactUs'>Contact us</NavLink>
					</li>
				</ul>
			</nav>

			<div className='containerIcons'>
				<i className='Icon'>
					<img src={Like} />
				</i>
				<i className='Icon'>
					<img src={Cart} alt='CartIcon' />
				</i>
				<i className='Icon'>
					<img src={User} />
				</i>
			</div>
		</header>
	);
};

export default HeaderTop;
