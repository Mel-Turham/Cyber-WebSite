import './App.scss';
// import Products from './Pages/Products/Products';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

function App() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Products' element={<ProductDetails/>} />
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
