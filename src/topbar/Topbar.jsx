import "./topbar.scss";
import { FaRegEnvelope } from "react-icons/fa";
import ResumeBtn from "../components/resumeBtn/ResumeBtn";

const Topbar = ({ menuActive, setMenuActive }) => {
	const brandName = `<Kanthamas />`;

	const handleHamburger = () => {
		setMenuActive(!menuActive);
	};

	return (
		<div className={"topbar " + (menuActive && "active")}>
			<div className='wrapper'>
				<div className='left'>
					<h1>
						<a href='#intro' className='brand-name' id='brand-name'>
							{brandName}
						</a>
					</h1>
				</div>
				<div className='middle'>
					<div className='item-container'>
						<FaRegEnvelope className='icon' />
						<a href='#contact'>
							<span>kanthamas.iamrhod@gmail.com</span>
						</a>
					</div>
					<ResumeBtn className={"btn-resume " + (menuActive && "active")} />
				</div>

				<div className='right'>
					<div className='hamburger' onClick={handleHamburger}>
						<span className='line1'></span>
						<span className='line2'></span>
						<span className='line3'></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
