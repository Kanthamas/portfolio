import "./portfolio.scss";

const Portfolio = () => {
	return (
		<div className='portfolio ' id='portfolio'>
			<div className='portfolio-container'>
				<h1>{`<Portfolio />`}</h1>
				<div className='wrapper'>
					<div className='main-card'>
						<div className='left-card'>
							<img
								src='https://user-images.githubusercontent.com/114124443/209471934-20b96d54-b937-474f-9f3c-c242befea3aa.png'
								alt='EliteMove Landing Page'
								
							/>
						</div>
						<div className='right-card'>
							<div className='right-card-title'>
								<h2>EliteMove</h2>
							</div>
							<div className='right-card-content'>
								<p>Sports Tracking Web Application</p>
								<p>MERN stack</p>
								<p>Frond-end: using React.js for UI, React-router-dom for routing, and Axios for HTTP client request handling</p>
								<p>Back-end: using Node.js and Express.js for managing API and token-based authentication, and Mongoose for dealing with MongoDB database</p>
								
								<ul>Pages:</ul>
								<li>Landing Page</li>
								<li>Register Page</li>
								<li>Login Page</li>
								<li>Dashboard Page</li>
								<li>Create Acitivity Card Page</li>
								<li>Edit Acitivity Card Page</li>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
