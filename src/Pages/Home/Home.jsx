import './Home.scss';
import CardBanner from '../../Components/CardBanner/CardBanner';

import Footer from '../../Components/Footer/Footer';
import { homeProducts } from '../../Data/data';
import { easeOut, motion, spring } from 'framer-motion';
import Card from '../../Components/Card/Card';
import Headers from './../../Components/Headers/Headers';
import Iphone14 from '../../assets/images/Iphone Image.png';
import Plastation5 from '../../assets/images/PlayStation.png';
import MacBookAir from '../../assets/images/Macbook Pro.png';
import AirPords from '../../assets/images/HalfAirPort.png';
import AppelVision from '../../assets/images/VituelCasque.png';
import ButtonPrimary from '../../Components/Buttons/ButtonsPrimary/ButtonPrimary';
import ButtonPrimaryBlack from '../../Components/Buttons/ButtonPrimaryBlack/ButtonPrimaryBlack';
import Phone from '../../assets/Svgs/PhonesX.svg';
import Arrow from '../../assets/Svgs/ArrowPrev.svg';
import Computer from '../../assets/Svgs/ComputersXl.svg';
import Camera from '../../assets/Svgs/CamerasXl.svg';
import Headphone from '../../assets/Svgs/HeadphonesXl.svg';
import Watche from '../../assets/Svgs/Smart Watches.svg';
import Gaming from '../../assets/Svgs/GamingXl.svg';
import TopRight from '../../assets/images/top-right.png';
import BottomRight from '../../assets/images/bottom-right.png';
import TopLeft from '../../assets/images/top-left.png';
import MiddelLeft from '../../assets/images/mid-left.png';
import BottomLeft from '../../assets/images/bottom-left.png';

const Home = () => {
	const varianteLeft = {
		isLoad: {
			opacity: 0,
		},
		setIsLoded: {
			opacity: 1,
		},

		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	};

	return (
		<>
			<main>
				<Headers />
				<section className='SectionHero'>
					<motion.div
						className='Left'
						inherit='isLoad'
						animate='setIsLoded'
						variants={varianteLeft}
					>
						<motion.p
							initial={{
								y: 100,
								opacity: 0,
							}}
							animate={{
								y: 0,
								opacity: 0.5,
							}}
							transition={{
								duration: 0.5,
								delay: 0.2,
								ease: 'circOut',
							}}
						>
							Pro.Beyond.
						</motion.p>
						<motion.h1
							initial={{
								y: 100,
								opacity: 0,
							}}
							animate={{
								y: 0,
								opacity: 1,
							}}
							transition={{
								delay: 0.6,
								duration: 0.5,
								ease: 'circOut',
							}}
						>
							IPhone 14 <span>Pro</span>
						</motion.h1>
						<motion.p
							initial={{
								y: 100,
								opacity: 0,
							}}
							animate={{
								y: 0,
								opacity: 1,
							}}
							transition={{
								delay: 1,
								duration: 0.5,
								ease: 'circOut',
							}}
						>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquid dicta tenetur dignissimos modi, culpa inventore alias veniam accusantium nam dolorem ullam atque eum ipsam obcaecati dolores, tempora suscipit tempore maiores soluta unde. Suscipit totam iure temporibus amet, quaerat repudiandae tempore cumque expedita velit iusto, doloribus eveniet, ipsam laborum et.
						</motion.p>
						<ButtonPrimary />
					</motion.div>

					<div className='Right'>
						<motion.img
							initial={{
								opacity: 0,
								y: -10,
								scale: 0.3,
							}}
							animate={{
								opacity: 1,
								y: 0,
								scale: 1,
							}}
							transition={{
								duration: 0.7,
								type: spring,
								ease: easeOut,
							}}
							className='img'
							src={Iphone14}
							alt='Iphone 14 pro max'
							loading='lazy'
						/>
					</div>
				</section>
				<section className='gridContainer'>
					<div className='grid'>
						<div className='squareBanner'>
							<div className='containerImage'>
								<img src={Plastation5} alt='' />
							</div>
							<div className='containerBody'>
								<h3>Playstation 5</h3>
								<p>
									Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
									will redefine your PlayStation experience.
								</p>
							</div>
						</div>
						<div className='squareBanner'>
							<div className='containerImage'>
								<img src={MacBookAir} alt='' />
							</div>
							<div className='containerBody'>
								<h3>Macbook Air</h3>
								<p>
									The new 15‑inch MacBook Air makes room for more of what you
									love with a spacious Liquid Retina display.
								</p>
								<ButtonPrimaryBlack />
							</div>
						</div>
						<div className='squareBanner'>
							<div className='containerImage'>
								<img src={AirPords} alt='' />
							</div>
							<div className='containerBody'>
								<h3>Apple AirPods Max</h3>
								<p>Computational audio. Listen, it &apos;s powerful</p>
							</div>
						</div>
						<div className='squareBanner'>
							<div className='containerImage'>
								<img src={AppelVision} alt='' />
							</div>
							<div className='containerBody'>
								<h3>Apple Vision Pro</h3>
								<p>An immersive way to experience entertainment</p>
							</div>
						</div>
					</div>
				</section>
				<section className='Category'>
					<div className='container'>
						<div className='top'>
							<h3>Browse By Category</h3>
							<div className='containerArows'>
								<i className=' icon Prev'>
									<img src={Arrow} alt='' />
								</i>
								<i className=' icon Next'>
									<img src={Arrow} alt='' />
								</i>
							</div>
						</div>

						<div className='containerCategories'>
							<div className='cartCategory'>
								<i>
									<img src={Phone} alt='' />
								</i>
								<p>Phones</p>
							</div>
							<div className='cartCategory'>
								<i>
									<img src={Camera} alt='' />
								</i>
								<p>Cameras</p>
							</div>
							<div className='cartCategory'>
								<i>
									<img src={Computer} alt='' />
								</i>
								<p>Computers</p>
							</div>
							<div className='cartCategory'>
								<i>
									<img src={Gaming} alt='' />
								</i>
								<p>Gamings</p>
							</div>
							<div className='cartCategory'>
								<i>
									<img src={Headphone} alt='' />
								</i>
								<p>Headphones</p>
							</div>
							<div className='cartCategory'>
								<i>
									<img src={Watche} alt='' />
								</i>
								<p>Phones</p>
							</div>
						</div>
					</div>
				</section>
				<section className='Products'>
					<div className='container-products'>
						<header className='header-product'>
							<nav className='nav'>
								<ul>
									<li>
										<a className='active' href=''>
											New Arrival
										</a>
									</li>
									<li>
										<a href=''>Bestseller</a>
									</li>
									<li>
										<a href=''>Featured Products</a>
									</li>
								</ul>
							</nav>
						</header>
					</div>

					<div className='container-cards'>
						{homeProducts.map(({ index, price, image, productName }) => {
							return (
								<Card
									key={index}
									price={price}
									image={image}
									name={productName}
									alt={productName}
								/>
							);
						})}
					</div>
				</section>
				<section className='banner'>
					<CardBanner />
				</section>
				<section className='Summer'>
					<div className='container-text'>
						<h2>Big summer Sale</h2>
						<p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
						<button className='button'> Shop Now</button>
					</div>

					<img className='img right-top' src={TopRight} alt='img' />
					<img className='img right-bottom' src={BottomRight} alt='img' />
					<img className='img top-left' src={TopLeft} alt='img' />
					<img className='img middle-left' src={MiddelLeft} alt='img' />
					<img className='img bottom-left' src={BottomLeft} alt='img' />
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
