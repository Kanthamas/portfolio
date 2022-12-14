import "./portfolio.scss";
import Card from "../card/Card";

const Portfolio = () => {
	return (
		<div className='portfolio ' id='portfolio'>
			<div className='portfolio-container'>
				<h1>{`<Portfolio />`}</h1>
				<div className='wrapper'>
					<Card className='card' />
					<Card className='card' />
					<Card className='card' />
					<Card className='card' />
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
