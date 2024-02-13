import ButtonSecondary from '../Buttons/ButtonSecondary/ButtonSecondary';
import Like from '../../assets/Svgs/Like.svg';
import './Card.scss';
import PropTypes from 'prop-types';

const Card = ({ image, name, price }) => {
	return (
		<div className='card'>
			<div className='card-top'>
				<img src={Like} alt='icone Like' />
			</div>
			<div className='card-img'>
				<img src={image} alt={image} />
			</div>
			<div className='card-body'>
				<p className='cart-name'>{name}</p>
				<p className='cart-price'>${price}</p>
				<ButtonSecondary />
			</div>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default Card;
