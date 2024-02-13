import './Search.scss';
import SearchIcon from '../../assets/Svgs/Search.svg';

const Search = () => {
	return (
		<div className='containerSearch'>
			<img className='searchIcon' src={SearchIcon} alt='SearchIcon' loading='lazy' />
			<input type='search' id='search' placeholder='Search...' />
		</div>
	);
};

export default Search;
