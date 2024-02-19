import { useState } from 'react';
import Headers from '../../Components/Headers/Headers';
import './ProductDetails.scss';
import Image from '../../assets/images/Image.png';
import ScreenSize from '../../assets/Svgs/Screen size.svg';
import Delivrey from '../../assets/Svgs/Delivery.svg';
import {details} from '../../../src/datas/details';

console.log(details);
const ProductDetails = () => {
	const Memories = ['128GB', '256GB', '512GB', '1TB'];
	const [changeText, setChangeText] = useState(true);

	const handleChangeText = () => {
		setChangeText((prev) => !prev);
	};
	return (
		<>
			<Headers />

			{/* Produts details */}
			<section className='Details'>
				<article className='Details__left'>
					<img src={Image} alt='' loading='lazy' />
				</article>
				<div className='Details__right'>
					<h3 className='product-name'>Iphone 14 pro max</h3>
					<div className='prices'>
						<span className='new-price'>$1399</span>
						<del>
							$<span>1499</span>
						</del>
					</div>
					<div className='container-colors'>
						<p>Select color :</p>
						<span className='color'></span>
						<span className='color purple'></span>
						<span className='color red'></span>
						<span className='color gold'></span>
						<span className='color grey'></span>
					</div>

					<div className='memories'>
						{Memories.map((memory, index) => (
							<span key={index} className='memory'>
								{memory}
							</span>
						))}
					</div>

					<div className='capacities'>
						<div className='capacity'>
							<img src={ScreenSize} alt='ScreenSize' loading='lazy' />

							<div className='capacity-item'>
								<span>Screen size </span>
								<span>6.7 &ldquo;</span>
							</div>
						</div>
						<div className='capacity'>
							<img src={ScreenSize} alt='ScreenSize' loading='lazy' />

							<div className='capacity-item'>
								<span>Screen size </span>
								<span>6.7 &ldquo;</span>
							</div>
						</div>
						<div className='capacity'>
							<img src={ScreenSize} alt='ScreenSize' loading='lazy' />

							<div className='capacity-item'>
								<span>Screen size </span>
								<span>6.7 &ldquo;</span>
							</div>
						</div>
						<div className='capacity'>
							<img src={ScreenSize} alt='ScreenSize' loading='lazy' />

							<div className='capacity-item'>
								<span>Screen size </span>
								<span>6.7 &ldquo;</span>
							</div>
						</div>
						<div className='capacity'>
							<img src={ScreenSize} alt='ScreenSize' loading='lazy' />

							<div className='capacity-item'>
								<span>Screen size </span>
								<span>6.7 &ldquo;</span>
							</div>
						</div>
						<div className='capacity'>
							<img src={ScreenSize} alt='ScreenSize' loading='lazy' />

							<div className='capacity-item'>
								<span>Screen size </span>
								<span>6.7 &ldquo;</span>
							</div>
						</div>
					</div>

					<p className='desc'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
						autem aliquid amet. Aliquam recusandae totam officia unde voluptatum
						porro ipsa libero quisquam, dolore, similique neque esse.
						Praesentium quod reprehenderit necessitatibus quae provident non,
						atque cum. <span>More...</span>
					</p>
					<div className='container-buttons'>
						<button type='button'>Add to Wishlist</button>
						<button onClick={handleChangeText} type='button'>
							{changeText ? 'Add to Card' : 'Remove to Card'}
						</button>
					</div>

					<div className='deliveries'>
						<div className='delivery'>
							<span>
								<img src={Delivrey} alt='Delivrery icon' loading='lazy' />
							</span>

							<div className='delivery-item'>
								<span>Free delivrery</span>
								<span>1-2 days</span>
							</div>
						</div>
						<div className='delivery'>
							<span>
								<img src={Delivrey} alt='Delivrery icon' loading='lazy' />
							</span>

							<div className='delivery-item'>
								<span>In Stock</span>
								<span>Today</span>
							</div>
						</div>
						<div className='delivery'>
							<span>
								<img src={Delivrey} alt='Delivrery icon' loading='lazy' />
							</span>

							<div className='delivery-item'>
								<span>Guaranteed</span>
								<span>1 year</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Details about the produts */}

			<section className='produtsAbouts'>
				<div className='topdetail'>
					<h2>Details</h2>
					<p>
						Just as a book is judged by its cover, the first thing you notice
						when you pick up a modern smartphone is the display. Nothing
						surprising, because advanced technologies allow you to practically
						level the display frames and cutouts for the front camera and
						speaker, leaving no room for bold design solutions. And how good
						that in such realities Apple everything is fine with displays. Both
						critics and mass consumers always praise the quality of the picture
						provided by the products of the Californian brand. And last year s
						6.7-inch Retina panels, which had ProMotion, caused real admiration
						for many.
					</p>
				</div>

				<div className='product-details-main'>
					<h3>screen</h3>
					<div className='main-items'>
						{details.map((detail) => (
							<div className='items' key={detail.name}>
								<span className='d-name'>{detail.name}</span>
								<span className='d-value'>{detail.values}</span>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductDetails;
