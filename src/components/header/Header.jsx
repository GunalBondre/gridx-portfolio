import './header.scss';

const Header = () => {
	return (
		<nav className='header container'>
			<div className='logo'>
				<h2>GB</h2>
			</div>
			<ul className='menu'>
				<li className='menu-item'>
					<a href='/'>
						<h5>Home</h5>
					</a>
				</li>
				<li className='menu-item'>
					<a href='/about'>
						<h5>about</h5>
					</a>
				</li>
				<li className='menu-item'>
					<a href='/portfolio'>
						<h5>Portfolio</h5>
					</a>
				</li>
				<li className='menu-item'>
					<a href='/contact'>
						<h5>Contact</h5>
					</a>
				</li>
			</ul>

			<button className='button'>Lets talk</button>
		</nav>
	);
};

export default Header;
