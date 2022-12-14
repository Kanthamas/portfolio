import "./sideMenu.scss";
import ResumeBtn from "../components/resumeBtn/ResumeBtn";
import {
	FaHome,
	FaUserAstronaut,
	FaCode,
	FaEnvelope,
	FaGithubSquare,
	FaLinkedin,
} from "react-icons/fa";
const SideMenu = ({ menuActive, setMenuActive }) => {
	const handleOnClick = () => {
		setMenuActive(!menuActive);
	};
	return (
		<div className={"side-menu " + (menuActive && "active")}>
			<ul className='list'>
				<li>
					<a href='#intro' onClick={handleOnClick}>
						<FaHome className='icon' />
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href='#about' onClick={handleOnClick}>
						<FaUserAstronaut className='icon' />
						<span>About</span>
					</a>
				</li>
				<li>
					<a href='#portfolio' onClick={handleOnClick}>
						<FaCode className='icon' />
						<span>Portfolio</span>
					</a>
				</li>
				<li>
					<a href='#contact' onClick={handleOnClick}>
						<FaEnvelope className='icon' />
						<span>Contact</span>
					</a>
				</li>
				<li>
					<a
						href='https://github.com/Kanthamas/'
						target='_blank'
						rel='noopener noreferrer'
						onClick={handleOnClick}
					>
						<FaGithubSquare className='icon' />
						<span>GitHub</span>
					</a>
				</li>
				<li>
					<a
						href='https://www.linkedin.com/in/kanthamas-iamrhod-b95489249/'
						target='_blank'
						rel='noopener noreferrer'
						onClick={handleOnClick}
					>
						<FaLinkedin className='icon' />
						<span>LinkedIn</span>
					</a>
				</li>
				<ResumeBtn className='btn-resume' />
			</ul>
		</div>
	);
};

export default SideMenu;
