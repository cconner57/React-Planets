import Mercury from '../images/planet-mercury.svg';
import MercuryInternal from '../images/planet-mercury-internal.svg';
import Venus from '../images/planet-venus.svg';
import VenusInternal from '../images/planet-venus-internal.svg';
import Earth from '../images/planet-earth.svg';
import EarthInternal from '../images/planet-earth-internal.svg';
import Mars from '../images/planet-mars.svg';
import MarsInternal from '../images/planet-mars-internal.svg';
import Jupiter from '../images/planet-jupiter.svg';
import JupiterInternal from '../images/planet-jupiter-internal.svg';
import Saturn from '../images/planet-saturn.svg';
import SaturnInternal from '../images/planet-saturn-internal.svg';
import Uranus from '../images/planet-uranus.svg';
import UranusInternal from '../images/planet-uranus-internal.svg';
import Neptune from '../images/planet-neptune.svg';
import NeptuneInternal from '../images/planet-neptune-internal.svg';

const findImg = (planet: string, viewOption: string): JSX.Element => {
	if (planet === 'Mercury') {
		return viewOption === 'overview' ? (
			<img src={Mercury} alt={planet} />
		) : viewOption === 'structure' ? (
			<img src={MercuryInternal} alt={planet} />
		) : (
			<div className='image-container'>
				<img src={Mercury} alt={planet} />
				<img className='image-geology'
					src={process.env.PUBLIC_URL + '/assets/geology-mercury.png'}
					alt={planet}
				/>
			</div>
		);
	} else if (planet === 'Venus') {
		return viewOption === 'overview' ? (
			<img src={Venus} alt={planet} />
		) : viewOption === 'structure' ? (
			<img src={VenusInternal} alt={planet} />
		) : (
			<div className='image-container'>
				<img src={Venus} alt={planet} />
				<img className='image-geology'
					src={process.env.PUBLIC_URL + '/assets/geology-venus.png'}
					alt={planet}
				/>
			</div>
		);
	} else if (planet === 'Earth') {
		return viewOption === 'overview' ? (
			<img src={Earth} alt={planet} />
		) : viewOption === 'structure' ? (
			<img src={EarthInternal} alt={planet} />
		) : (
			<div className='image-container'>
				<img src={Earth} alt={planet} />
				<img className='image-geology'
					src={process.env.PUBLIC_URL + '/assets/geology-earth.png'}
					alt={planet}
				/>
			</div>
		);
	} else if (planet === 'Mars') {
		return viewOption === 'overview' ? (
			<img src={Mars} alt={planet} />
		) : viewOption === 'structure' ? (
			<img src={MarsInternal} alt={planet} />
		) : (
			<div className='image-container'>
				<img src={Mars} alt={planet} />
				<img className='image-geology'
					src={process.env.PUBLIC_URL + '/assets/geology-mars.png'}
					alt={planet}
				/>
			</div>
		);
	} else if (planet === 'Jupiter') {
		return viewOption === 'overview' ? (
			<img src={Jupiter} alt={planet} />
		) : viewOption === 'structure' ? (
			<img src={JupiterInternal} alt={planet} />
		) : (
			<div className='image-container'>
				<img src={Jupiter} alt={planet} />
				<img className='image-geology'
					src={process.env.PUBLIC_URL + '/assets/geology-jupiter.png'}
					alt={planet}
				/>
			</div>
		);
	} else if (planet === 'Saturn') {
		return viewOption === 'overview' ? (
			<img src={Saturn} alt={planet} />
		) : viewOption === 'structure' ? (
			<img src={SaturnInternal} alt={planet} />
		) : (
			<div className='image-container'>
				<img src={Saturn} alt={planet} />
				<img className='image-geology'
					src={process.env.PUBLIC_URL + '/assets/geology-saturn.png'}
					alt={planet}
				/>
			</div>
		);
	} else if (planet === 'Uranus') {
		return viewOption === 'overview' ? (
			<img src={Uranus} alt={planet} />
		) : viewOption === 'structure' ? (
			<img src={UranusInternal} alt={planet} />
		) : (
			<div className='image-container'>
				<img src={Uranus} alt={planet} />
				<img className='image-geology'
					src={process.env.PUBLIC_URL + '/assets/geology-uranus.png'}
					alt={planet}
				/>
			</div>
		);
	} else {
		return viewOption === 'overview' ? (
			<img src={Neptune} alt={planet} />
		) : viewOption === 'structure' ? (
			<img src={NeptuneInternal} alt={planet} />
		) : (
			<div className='image-container'>
				<img src={Neptune} alt={planet} />
				<img className='image-geology'
					src={process.env.PUBLIC_URL + '/assets/geology-neptune.png'}
					alt={planet}
				/>
			</div>
		);
	}
};

interface PlanetView {
	planet: string;
	viewOption: string;
}

const PlanetImg = ({ planet, viewOption }: PlanetView) => {
	return <div className='planet-image'>{findImg(planet, viewOption)}</div>;
};

export default PlanetImg;
