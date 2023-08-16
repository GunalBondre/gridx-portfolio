import './home.scss';
import Card from '../../components/card/Card';
import CardImg from '../../assets/imageme.jpg';
import Sign from '../../assets/signature.png';
import PortfolioBanner from '../../assets/project.jpg';
import BlogImg from '../../assets/featured.jpg';
import Icon from '../../assets/icon2.png';
const Home = () => {
	return (
		<section>
			<section className='section hero-section'>
				<div className='container'>
					<div
						className='left-section'
						data-aos='zoom-in'
						data-aos-delay='50'
						data-aos-duration='1000'
						data-aos-easing='ease-in-out'
					>
						<a href='/about'>
							<Card
								title='Gunal Bondre'
								subtitle='Web Developer'
								desc='I am a web developer based out of Pune, India'
								image={CardImg}
								direction={'row'}
							/>
						</a>
					</div>
					<div className='right-section'>
						<div className='top-section card'>
							<div className='banner'>
								<div className='marquee'>
									<div>
										<span>
											<p>
												Latest Work <b>Featured</b>
											</p>
										</span>
										<span>
											<p>
												Latest Work <b>Featured</b>
											</p>
										</span>
										<span>
											<p>
												Latest Work <b>Featured</b>
											</p>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className='bottom-section'>
							<div
								className='card-section'
								data-aos='zoom-in'
								data-aos-delay='50'
								data-aos-duration='1000'
								data-aos-easing='ease-in-out'
							>
								<a href='/about'>
									<Card
										title='Credentials'
										subtitle='More about me'
										desc=''
										direction='column'
										image={Sign}
										smallcard
									/>
								</a>

								<a
									href='/portfolio'
									data-aos='zoom-in'
									data-aos-delay='50'
									data-aos-duration='1000'
									data-aos-easing='ease-in-out'
								>
									<Card
										title='Portfolio'
										subtitle='See in action'
										desc=''
										direction='column'
										image={PortfolioBanner}
										smallcard
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='middlesection container'>
				<div
					className='left'
					data-aos='zoom-in'
					data-aos-delay='50'
					data-aos-duration='1000'
					data-aos-easing='ease-in-out'
				>
					<Card
						title='Blog'
						subtitle='What i write'
						smallcard
						image={BlogImg}
					/>
				</div>
				<div
					className='middle'
					data-aos='zoom-in'
					data-aos-delay='50'
					data-aos-duration='1000'
					data-aos-easing='ease-in-out'
				>
					<Card title='TechStack' subtitle='what i know' smallcard>
						<div className='languages'>
							<h4>HTML</h4>
							<h4>CSS</h4>
							<h4>SCSS</h4>
							<h4>NodeJs</h4>
							<h4>React</h4>
							<h4>MongoDB</h4>
							<h4>Styled Components</h4>
							<h4>Express JS</h4>
							<h4>Javascript</h4>
							<h4>AWS Basics</h4>
						</div>
					</Card>
				</div>
				<div
					className='right'
					data-aos='zoom-in'
					data-aos-delay='50'
					data-aos-duration='1000'
					data-aos-easing='ease-in-out'
				>
					<Card title='Stay With Me' subtitle='Digital Address' smallcard>
						<div className='socialmedia'>
							<div className='card'>LinkedIn</div>
							<div className='card'>Facebook</div>
						</div>
						<div className='socialmedia'>
							<div className='card'>Twitter</div>
							<div className='card'>Instagram</div>
						</div>
					</Card>
				</div>
			</section>
			<section className='bottom-section container'>
				<div
					className='left'
					data-aos='zoom-in'
					data-aos-delay='50'
					data-aos-duration='1000'
					data-aos-easing='ease-in-out'
				>
					<div className='card card-wrapper'>
						<div className='card'>
							<h1>5</h1>
							<h4>years of experience</h4>
						</div>
						<div className='card'>
							<h1>25+</h1>
							<h4>clients</h4>
						</div>
						<div className='card'>
							<h1>50+</h1>
							<h4>projects</h4>
						</div>
					</div>
				</div>
				<div
					className='right'
					data-aos='zoom-in'
					data-aos-delay='50'
					data-aos-duration='1000'
					data-aos-easing='ease-in-out'
				>
					<Card>
						<div className='wrapper'>
							<img src={Icon} alt='' className='icon2' />
							<div className='textbox'>
								<h3>Lets</h3>
								<h3>
									work <span className='blue'>Together</span>
								</h3>
							</div>
						</div>
					</Card>
				</div>
			</section>
		</section>
	);
};

export default Home;
