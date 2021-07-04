interface PlanetColor {
	backgroundColor: string;
}

const findPlanetColor = (planet: string): PlanetColor => {
	switch (planet) {
		case 'Mercury':
			return { backgroundColor: 'hsl(194, 48%, 49%)' };
		case 'Venus':
			return { backgroundColor: 'hsl(33, 82%, 61%)' };
		case 'Earth':
			return { backgroundColor: 'hsl(263, 67%, 51%)' };
		case 'Mars':
			return { backgroundColor: 'hsl(10, 63%, 51%)' };
		case 'Jupiter':
			return { backgroundColor: 'hsl(2, 68%, 53%)' };
		case 'Saturn':
			return { backgroundColor: 'hsl(17, 73%, 46%)' };
		case 'Uranus':
			return { backgroundColor: 'hsl(169, 73%, 44%)' };
		default:
			return { backgroundColor: 'hsl(222, 87%, 56%)' };
	}
};

const ButtonSet = ({ title, viewOption, setViewOption }: any) => {
	return (
		<>
			<button
				className={viewOption === 'overview' ? 'button-active' : 'button'}
				style={viewOption === 'overview' ? findPlanetColor(title) : {}}
				onClick={() => setViewOption('overview')}>
				<span>01</span> Overview
			</button>
			<button
				className={viewOption === 'structure' ? 'button-active' : 'button'}
				style={viewOption === 'structure' ? findPlanetColor(title) : {}}
				onClick={() => setViewOption('structure')}>
				<span>02</span> Internal Structure
			</button>
			<button
				className={viewOption === 'geology' ? 'button-active' : 'button'}
				style={viewOption === 'geology' ? findPlanetColor(title) : {}}
				onClick={() => setViewOption('geology')}>
				<span>03</span> Surface Geology
			</button>
		</>
	);
};

export default ButtonSet;
