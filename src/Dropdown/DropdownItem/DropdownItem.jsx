import { PropTypes } from 'prop-types';
import './DropdownItem.scss';

const DropdownItem = ({ id, item, value, stocks }) => {
	return (
		<li id={id} className='dropdown-item'>
			<input className='inputCheck' type='checkbox' value={value} />
			<span className='name'>{item}</span>
			<span className='stocks'>{stocks}</span>
		</li>
	);
};

DropdownItem.propTypes = {
	id: PropTypes.number,
	item: PropTypes.string,
	value: PropTypes.string,
	stocks: PropTypes.number,
};

export default DropdownItem;
