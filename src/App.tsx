import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<HomeScreen />
		</div>
	);
};

export default App;
