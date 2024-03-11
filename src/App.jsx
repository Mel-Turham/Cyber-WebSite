import './App.scss';
import Products from './Pages/Products/Products';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Products' element={<Products/>} />
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
