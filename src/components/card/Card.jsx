import IconPath from '../../assets/icon.svg';
import PropTypes from 'prop-types';

const Card = ({
	title,
	subtitle,
	desc,
	image,
	direction,
	smallcard,
	children,
}) => {
	return (
		<div>
			<div className={`card ${direction === 'row' ? 'row' : 'column'}`}>
				{image ? (
					<div className='image'>
						<img src={image} alt='placeholder image' />
					</div>
				) : (
					children
				)}
				<div className='info'>
					<div className='title'>
						<h4>{subtitle}</h4>
						{smallcard ? <h3>{title}</h3> : <h1>{title}</h1>}
						<p>{desc}</p>
					</div>
					<div className='icon'>
						<img src={IconPath} alt='icon' />
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	desc: PropTypes.string,
	image: PropTypes.string,
	direction: PropTypes.string,
	smallcard: PropTypes.bool,
	children: PropTypes.node,
};
export default Card;
