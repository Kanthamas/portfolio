import "./card01.scss";

function Card01({ year, location, title, p1, p2, p3, p4 }) {
	return (
		<div className='card-wrapper'>
			<div className='card card--01'>
				<div className='face face1'>
					<div className='content'>
						<h1 className='face1-year'>{year || 2022}</h1>
						<h4>{location || `Lampang, Thailand`}</h4>
					</div>
				</div>
				<div className='face face2'>
					<div className='content'>
						<h2>{title || `Title`}</h2>

						<p>{p1 || `message 1`}</p>
						<p>{p2 || `message 2`}</p>
						<p>{p3}</p>
						<p>{p4}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card01;
