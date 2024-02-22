import './Products.scss';
import { ProductsItem } from '../../Data/data';
import Arrow from '../../assets/Svgs/ArrowPrev.svg';
import { useState } from 'react';
import Card from './../../Components/Card/Card';
import Footer from './../../Components/Footer/Footer';
import MenuDropdown from '../../Dropdown/MenuDropdown';
import Headers from '../../Components/Headers/Headers';

const Products = () => {
	const typeOfSearch = [
		'By Names',
		'By Price',
		'By Raitings',
		'By nothings',
		'By nothings',
		'By best oders',
	];

	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(!isOpen);

	return (
		<>
			<Headers />
			<div className='contents'>
				<aside className='contents__left'>
					<MenuDropdown />
				</aside>

				<aside className='contents__right'>
					<div className='contents__right__header'>
						<div className='contents__right__header__left'>
							<p>
								Selected Products: <span>85</span>
							</p>
						</div>
						<div className='contents__right__header__right'>
							<div
								className='contents__right__header__right__header'
								onClick={handleOpen}
							>
								<p>By ratings</p>
								<button
									className={`btn-open ${isOpen ? 'active' : ''}`}
									onClick={handleOpen}
								>
									<img src={Arrow} alt='arrow' loading='lazy' />
								</button>

								{isOpen ? (
									<div className='Dropdown'>
										<ul className='listSearch'>
											{typeOfSearch.map((item, index) => (
												<li className='searchItem' key={index}>
													{item}
												</li>
											))}
										</ul>
									</div>
								) : null}
							</div>
						</div>
					</div>

					<section className='productContainer'>
						{ProductsItem?.map(({ image, productName, price }) => {
							return (
								<Card
									key={Math.random(Math.floor() * 20)}
									image={image}
									name={productName}
									price={price}
								/>
							);
						})}
					</section>
				</aside>
			</div>

			<Footer />
		</>
	);
};

export default Products;
