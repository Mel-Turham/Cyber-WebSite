import { NavLink } from 'react-router-dom';
import './HeaderTop.scss';
import Logo from '../../../assets/Svgs/Logo Vector.svg';
import Search from '../../../assets/Svgs/Search.svg';
import Like from '../../../assets/Svgs/Like.svg';
import Cart from '../../../assets/Svgs/Cart.svg';
import User from '../../../assets/Svgs/User.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';

const HeaderTop = () => {
	const [toggle, setToggle] = useState(false);

	const variants = {
		hidden: {
			opacity: 0,
			x: 300,
		},

		open: {
			opacity: 1,
			x: 0,
		},
	};

	const Links = [
		{
			paht: '/',
			name: 'Home',
		},
		{
			paht: '/Products',
			name: 'Products',
		},
		{
			paht: '/Abouts',
			name: 'Abouts',
		},
		{
			paht: '/Contacts',
			name: 'Contacts us',
		},
	];

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

			<nav className='containerNav screen-md'>
				<ul className='lists'>
					<li className='listItem'>
						<NavLink className='Link' to='/'>
							Home
						</NavLink>
					</li>
					<li className='listItem'>
						<NavLink className='Link' to='/Products'>
							Products
						</NavLink>
					</li>
					<li className='listItem'>
						<NavLink className='Link' to='/About'>
							About
						</NavLink>
					</li>
					<li className='listItem'>
						<NavLink className='Link' to='/ContactUs'>
							Contact us
						</NavLink>
					</li>
				</ul>
			</nav>

			{toggle && (
				<motion.nav
					initial='hidden'
					animate='open'
					variants={variants}
					className='containerNav'
				>
					<ul className='lists'>
						{Links.map((Link) => (
							<li className='listItem' key={Link.name}>
								<NavLink className='Link ' to={Link.paht}>
									{Link.name}
								</NavLink>
							</li>
						))}
					</ul>
				</motion.nav>
			)}

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

			<button className='open-nav' onClick={() => setToggle((prev) => !prev)}>
				{toggle ? (
					<AiOutlineClose className='btn-open-nav-icon' />
				) : (
					<FaBars className='btn-open-nav-icon' />
				)}
			</button>
		</header>
	);
};

export default HeaderTop;
