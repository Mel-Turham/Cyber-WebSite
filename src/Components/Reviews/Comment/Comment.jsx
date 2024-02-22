import './Comment.scss';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';

const Comment = ({ image, userName, raiting, Day, commentUser }) => {
	return (
		<div className='comments-items'>
			<div className='image'>
				<img src={image} alt={userName} />
			</div>
			<div className='comment-item'>
				<div className='item-top'>
					<div className='userName'>
						<span>{userName}</span>
						<div className='stars' key={raiting}>
							{Array(raiting).fill(<AiFillStar className='icon-star' />)}
						</div>
					</div>
					<span>{Day}</span>
				</div>
				<p className='text'>{commentUser}</p>
			</div>
		</div>
	);
};

Comment.propTypes = {
	image: PropTypes.string,
	userName: PropTypes.string,
	raiting: PropTypes.number,
	commentUser: PropTypes.string,
	Day: PropTypes.string,
	id: PropTypes.number,
};

export default Comment;
