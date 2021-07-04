import { useState, useEffect } from 'react';
import './App.scss';

import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import MobileApp from './screens/MobileApp';

import data from './data.json';

const App = () => {
	const [planet, setPlanet] = useState<string>('Mercury');
	const [showMobile, setShowMobile] = useState<boolean>(false);

	const windowTransition = () => {
		window.innerWidth > 1024
			? setShowMobile(() => false)
			: setShowMobile(() => true);
	};

	useEffect(() => {
		window.addEventListener('resize', windowTransition);
		return () => {
			window.removeEventListener('resize', windowTransition);
		};
	}, []);

	return (
		<>
			<div className='App'>
				{showMobile ? (
					<MobileApp />
				) : (
					<>
						<Navbar setPlanet={setPlanet} />
						<HomeScreen
							planet={data.filter((data) => data.name === planet)[0]}
						/>
					</>
				)}
			</div>
		</>
	);
};

export default App;
