import "./intro.scss";
import introImage from "../assets/intro-left.jpg";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { init } from "ityped";

const Intro = () => {
	const textRef = useRef();
	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 150,
			strings: [
				"a lifelong learner.",
				"always curious.",
				"perseverant.",
				"a Junior Software Developer.",
			],
		});
	}, []);

	return (
		<div className='intro' id='intro'>
			<div className='left'>
				<div className='image-container'>
					<img className='image' src={introImage} alt='everyone can code' />
					<span className='caption'>September 19, 2022</span>
					<p>{`<Kanthamas />`}</p>
				</div>
			</div>
			<div className='right'>
				<div className='wrapper'>
					<h2>Hello World!</h2>
					<h1>Kanthamas Iamrhod</h1>
					<h3>
						I'm <span className='ityped' ref={textRef}></span>
					</h3>
				</div>
				<a href='#about'>
					<FaAngleDown className='icon' />
				</a>
			</div>
		</div>
	);
};

export default Intro;
