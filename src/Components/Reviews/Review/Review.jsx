import { UserComment } from '../../../Data/Reviews';
import Comment from '../Comment/Comment';
import './Review.scss';

const Review = () => {
	console.log(UserComment);
	return (
		<section className='comments'>
			<h3 className='title'>Comments</h3>
			<div className='contianer-comments'>
				{UserComment.map(
					({ id, userName, userImage, commentDate, commentUser, raitings }) => (
						<Comment
							key={id}
							image={userImage}
							alt={userName}
							userName={userName}
							raiting={raitings}
							Day={commentDate}
							commentUser={commentUser}
							id={id}
						/>
					),
				)}
			</div>
		</section>
	);
};

export default Review;
