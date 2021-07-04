import LinkIcon from '../images/icon-source.svg';
import ButtonSet from '../components/ButtonSet';

interface PlanetProps {
	title: string;
	content: string;
	link: string;
	viewOption: string;
	setViewOption: any;
}

const Planet = ({
	title,
	content,
	link,
	viewOption,
	setViewOption,
}: PlanetProps) => {
	return (
		<div className='planet-info'>
			<h1 className='planet-title'>{title}</h1>
			<p className='planet-content'>{content}</p>
			<p className='planet-link'>
				<span>Source: </span>
				<a href={link}>
					Wikipedia <img src={LinkIcon} alt='Wikipedia' />
				</a>
			</p>
			<ButtonSet
				title={title}
				viewOption={viewOption}
				setViewOption={setViewOption}
			/>
		</div>
	);
};

export default Planet;
