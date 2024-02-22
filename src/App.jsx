import './App.scss';
import Products from './Pages/Products/Products';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

function App() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Products' element={<Products />} />
					<Route path='/About' element={<Reviews />} />
					<Route path='/Contacts' element={< ProductDetails/>} />
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
