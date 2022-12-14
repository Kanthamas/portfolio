import "./about.scss";
import coffee from "../assets/coffee.jpg";

const About = () => {
	return (
		<div className='about ' id='about'>
			<div className='about-container'>
				<h1>{`<About_Me />`}</h1>
				<section>
					<div className='wrapper'>
						<div className='card card-1'>
							<div className='box'>
								<div className='img-box'>
									<img src={coffee} alt='coffee-1' />
								</div>
								<div className='content-box'>
									<div>
										<h2>Title</h2>
										<span className='year'>2022</span>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='card card-2'>
							<div className='box'>
								<div className='img-box'>
									<img src={coffee} alt='coffee-1' />
								</div>
								<div className='content-box'>
									<div>
										<h2>Title</h2>
										<span className='year'>2022</span>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='card card-3'>
							<div className='box'>
								<div className='img-box'>
									<img src={coffee} alt='coffee-1' />
								</div>
								<div className='content-box'>
									<div>
										<h2>Title</h2>
										<span className='year'>2022</span>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='card card-4'>
							<div className='box'>
								<div className='img-box'>
									<img src={coffee} alt='coffee-1' />
								</div>
								<div className='content-box'>
									<div>
										<h2>Title</h2>
										<span className='year'>2022</span>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='card card-5'>
							<div className='box'>
								<div className='img-box'>
									<img src={coffee} alt='coffee-1' />
								</div>
								<div className='content-box'>
									<div>
										<h2>Title</h2>
										<span className='year'>2022</span>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='card card-6'>
							<div className='box'>
								<div className='img-box'>
									<img src={coffee} alt='coffee-1' />
								</div>
								<div className='content-box'>
									<div>
										<h2>Title</h2>
										<span className='year'>2022</span>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default About;
