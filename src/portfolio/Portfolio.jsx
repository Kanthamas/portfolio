import EliteMoveLogo from "../assets/login-logo.png";
import "./portfolio.scss";

const EliteMoveLP =
	"https://user-images.githubusercontent.com/114124443/209471934-20b96d54-b937-474f-9f3c-c242befea3aa.png";
const EliteMoveDashboard =
	"https://user-images.githubusercontent.com/114124443/209518835-30bb8659-e47a-4abd-b4ee-1a72dcec0fb8.png";
const EliteMoveEditProfile =
	"https://user-images.githubusercontent.com/114124443/209519494-4c86b979-5f22-4ce6-98cb-ef6d115bb9ed.png";
const Portfolio = () => {
	return (
		<div className='portfolio ' id='portfolio'>
			<div className='portfolio-container'>
				<h1>{`<Portfolio />`}</h1>
				<div className='wrapper'>
					<div className='main-card'>
						<div className='left-card'>
							<a href={EliteMoveLP} target='_blank' rel='noreferrer'>
								<img src={EliteMoveLP} alt='EliteMove Landing Page' />
							</a>
							<a href={EliteMoveDashboard} target='_blank' rel='noreferrer'>
								<img src={EliteMoveDashboard} alt='EliteMove Dashboard Page' />
							</a>
							<a href={EliteMoveEditProfile} target='_blank' rel='noreferrer'>
								<img
									src={EliteMoveEditProfile}
									alt='EliteMove Edit Profile Page'
								/>
							</a>
						</div>
						<div className='right-card'>
							<div className='right-card-title'>
								<img src={EliteMoveLogo} alt='Elite Move' />
								<a href='https://elitemove-ui.vercel.app' target='blank'>
									<h2>EliteMove</h2>
								</a>
								{/* https://github.com/JSD3G6 */}
							</div>
							<div className='right-card-content'>
								<h3 className="content-title">Sports Tracking Web Application</h3>
								<div className='features'>
									<ul>
										<h4>Features:</h4>
									</ul>
									<li>
										New user can create an account with email on Register page
									</li>
									<li>
										User can login with registered email to access the service
									</li>
									<li>On Dashboard, there are 3 sections: </li>
									<li className="li-left-col">
										Left column: user profile summary and auto-generated
										motivation quote
									</li>
									<li className="li-middle-col">
										Middle column: Create a new acitivity card button and list of created acitivity cards
									</li>
									<li className="li-right-col">
										Right column: Interactive line chart and statistics summary of each acitivity type
									</li>
									
								</div>
								<div className='tech-stack'>
									<ul><h4>Tech stack :MERN stack</h4></ul>
									<li>
										Frond-end: using React.js for UI, React-router-dom for
										routing, and Axios for HTTP client request handling
									</li>
									<li>
										Back-end: using Node.js and Express.js for managing API and
										token-based authentication, and Mongoose for dealing with
										MongoDB database
									</li>
								</div>
								<div className='pages-list'>
									<ul><h4>Pages:</h4></ul>
									<li>Landing Page</li>
									<li>Register Page</li>
									<li>Login Page</li>
									<li>Dashboard Page</li>
									<li>Edit Profile Page</li>
									<li>Create Acitivity Card Page</li>
									<li>Edit Acitivity Card Page</li>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
