import { menus } from '../Data/dropdown';
import DropdownItem from './DropdownItem/DropdownItem';
import Search from '../Dropdown/SearchField/Search';
import ArrowDown from '../../src/assets/Svgs/ArrowPrev.svg';
import './MenuDropdown.scss';
import { useState } from 'react';

const MenuDropdown = () => {
	const [isHide, setisHide] = useState({});
	const handleHide = (id) => {
		setisHide((prevState) => ({
			...prevState,
			[id]: !prevState[id],
		}));
	};

	return (
		<div className='menu-dropdown'>
			<ul className='menu-dropdown__items'>
				{menus.map(({ name, items, id }) => {
					return (
						<section key={Math.random(Math.floor() * items.length)}>
							<div className='Top' onClick={() => handleHide(id)}>
								<h3>{name}</h3>
								<img
									className={`arrowDown ${isHide[id] ? 'active' : ''}`}
									src={ArrowDown}
									alt='Arrow icon'
								/>
							</div>

							{isHide[id] ? (
								<div className='containerList'>
									<Search />
									{items.map(({ id, name, value, stock }) => {
										return (
											<DropdownItem
												key={id}
												value={value}
												item={name}
												stocks={stock}
											/>
										);
									})}
								</div>
							) : null}
						</section>
					);
				})}
			</ul>
		</div>
	);
};

export default MenuDropdown;
