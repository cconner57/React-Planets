import {useState} from 'react'
import Planet from '../components/Planet';
import PlanetImg from '../components/PlanetImg';

const HomeScreen = ({ planet }: any) => {
	const [viewOption, setViewOption] = useState<string>('overview')
	return (
		<>
			<main>
				<PlanetImg planet={planet.name} viewOption={viewOption} />
				<Planet
					title={planet.name}
					content={planet[viewOption].content}
					link={planet[viewOption].source}
					viewOption={viewOption}
					setViewOption={setViewOption}
				/>
			</main>
			<footer>
				<div className='planet-details'>
					<h3>Rotation Time</h3>
					<p>{planet.rotation}</p>
				</div>
				<div className='planet-details'>
					<h3>Revolution Time</h3>
					<p>{planet.revolution}</p>
				</div>
				<div className='planet-details'>
					<h3>Radius</h3>
					<p>{planet.radius}</p>
				</div>
				<div className='planet-details'>
					<h3>Average Temp.</h3>
					<p>{planet.temperature}</p>
				</div>
			</footer>
		</>
	);
};

export default HomeScreen;
