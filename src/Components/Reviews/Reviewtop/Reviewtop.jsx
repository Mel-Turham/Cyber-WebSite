import './Reviewtop.scss';
import { FaStar, FaRegStarHalfStroke } from 'react-icons/fa6';

const Reviewtop = () => {
	return (
		<section className='reviewTop'>
			<h2 className='title'>Reviews</h2>
			<div className='container-reiview'>
				<div className='left'>
					<div className='left-top'>
						<span>4.8 </span>
						<span>of 125 reviews</span>
					</div>
					<div className='ratings'>
						<FaStar className='star' />
						<FaStar className='star' />
						<FaStar className='star' />
						<FaStar className='star' />
						<FaRegStarHalfStroke className='star' />
					</div>
				</div>
				<div className='right'>
					<div className='right-item'>
						<span>Excellent</span>
						<div className='line line1'></div>
						<span className='val'>100</span>
					</div>
					<div className='right-item'>
						<span>Good</span>
						<div className='line line2'></div>
						<span className='val'>11</span>
					</div>
					<div className='right-item'>
						<span>Average</span>
						<div className='line line3'></div>
						<span className='val'>3</span>
					</div>
					<div className='right-item'>
						<span>Below Average</span>
						<div className='line line4'></div>
						<span className='val'>8</span>
					</div>
					<div className='right-item'>
						<span>Poor</span>
						<div className='line line5'></div>
						<span className='val'>1</span>
					</div>
				</div>
			</div>

			<div className='fieldComment'>
				<form>
					<input type='text' placeholder='Leave a comment...' />
					<button type='submit'>Send</button>
				</form>
			</div>
		</section>
	);
};

export default Reviewtop;
