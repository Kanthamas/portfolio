import "./card.scss";
// import aboutMe from "../data/aboutMe";
import { FaGithubSquare } from "react-icons/fa";
const Card = () => {
	const data = {
		header: "Software Developer Training",
		content:
			"I have learned about the software development process and worked as a team under the supervision of senior software developers and tech industry mentors during the Junior Software Developer Bootcamp Cohort 3 by Generation Thailand ",
		footer: "September 19 - December 28, 2022",
	};
	return (
		<div className='card'>
			<div className='card-container'>
				<header className='card-header'>
					<h3>{data.header || "Card Title"}</h3>
				</header>
				<section className='card-content'>
					<p>{data.content || "Card Content"}</p>
					<a
						href='https://github.com/Kanthamas/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaGithubSquare className='icon' />
					</a>
				</section>
				<footer className='card-footer'>
					<p>{data.footer || "Card Footer"}</p>
				</footer>
			</div>
		</div>
	);
};

export default Card;
