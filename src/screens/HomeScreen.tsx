import React from 'react';

import Mercury from '../images/planet-mercury.svg';
import LinkIcon from '../images/icon-source.svg';

const HomeScreen = () => {
	return (
		<>
			<main>
				<div className='planet-image'>
					<img src={Mercury} alt='Mercury' />
				</div>
				<div className='planet-info'>
					<h1 className='planet-title'>Mercury</h1>
					<p className='planet-content'>
						Mercury is the smallest planet in the Solar System and the closest
						to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
						shortest of all the Sun's planets. Mercury is one of four
						terrestrial planets in the Solar System, and is a rocky body like
						Earth.
					</p>
					<p className='planet-link'>
						<span>Source: </span>
						<a href='https://en.wikipedia.org/wiki/Mercury_(planet)'>
							Wikipedia <img src={LinkIcon} alt='Wikipedia' />
						</a>
					</p>
					<button className='button'>
						<span>01</span> Overview
					</button>
					<button className='button'>
						<span>01</span> Internal Structure
					</button>
					<button className='button'>
						<span>01</span> Surface Geology
					</button>
				</div>
			</main>
			<footer>
				<div className='planet-details'>
					<h3>Rotation Time</h3>
					<p>58.6 Days</p>
				</div>
				<div className='planet-details'>
					<h3>Revolution Time</h3>
					<p>87.97 Days</p>
				</div>
                <div className='planet-details'>
					<h3>Radius</h3>
					<p>2,439.7 KM</p>
				</div>
                <div className='planet-details'>
					<h3>Average Temp.</h3>
					<p>430°C</p>
				</div>
			</footer>
		</>
	);
};

export default HomeScreen;
