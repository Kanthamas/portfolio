import "./about.scss";
import Card01 from "../components/card01/Card01";

const About = () => {
	return (
		<div className='about ' id='about'>
			<div className='about-container'>
				<h1>{`<AboutMe />`}</h1>
				<div className='wrapper'>
					<Card01
						year={1980}
						location={`Lampang, Thailand`}
						title={`The Beginning`}
						p1={`Monday, 17th of March`}
						p2={`When it all begun`}
					/>
					<Card01
						year={2002}
						location={`Chiang Mai, Thailand`}
						title={`Bachelor of Science`}
						p1={`A student who was drawn into the fascinating world of science and astronomy`}
						p2={`A graduate of the curious and lifelong learner`}
					/>
					<Card01
						year={2007}
						location={`Bangkok, Thailand`}
						title={`Master of Engineering`}
						p1={`Research and development career of polymer processing for solar panels`}
						p2={`On the journey of self-improvement and thrived to succeed`}
					/>
					<Card01
						year={2008}
						location={`Chai Nat, Thailand`}
						title={`The Turning Point`}
						p1={`The unexpected day that totally changed my life`}
						p2={`Road accident, visually impaired`}
					/>
					<Card01
						year={2013}
						location={`Chiang Rai, Thailand`}
						title={`Hostel Manager`}
						p1={`Like a phoenix, reborn from the ashes and flew high again`}
						p2={`As a leader, I supported my team`}
						p3={`As a service provider, I delivered the outstanding and heart-warming experience to my customers`}
						p4={`As myself, I could overcome all fear and obstacles`}
					/>
					<Card01
						year={2014}
						location={`Lampang, Thailand`}
						title={`Math, Science and English Tutor`}
						p1={`Taught students how to learn and unleash their potential`}
						p2={`Understood and embraced the diversity of human beings`}
					/>
					<Card01
						year={2018}
						location={`Lampang, Thailand`}
						title={`Social Media and Search Engine Evaluator`}
						p1={`Jumped into the internet world, learned about things behind the scene`}
						p2={`Curious and keen to dive deeper into the software development and technology`}
					/>
					<Card01
						year={2022}
						location={`Lampang, Thailand`}
						title={`Junior Software Developer Cohort 3`}
						p1={`Became a student again, practiced hard, and learned more`}
						p2={`The new journey took place, and I followed my dream one step at a time`}
						p3={`"I am a work in progress"`}
					/>
					<Card01
						year={`Present`}
						location={`Planet Earth`}
						title={`The Beginning Again`}
						p1={`Looking for a job as a Junior Software Developer`}
						p2={`Open for all opportunity`}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
