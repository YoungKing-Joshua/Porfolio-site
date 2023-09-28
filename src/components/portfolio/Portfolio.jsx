import "./portfolio.scss";

export default function Portfolio() {
	return (
		<div className='portfolio' id='portfolio'>
			<h1>Portfolio</h1>
			<ul>
				<li className="active">Features</li>
				<li>Web app</li>
				<li>Mobile app</li>
				<li>Design</li>
				<li>Branding</li>
			</ul>
			<div className='container'>
				<div>
					<img src='' alt='' />
					<h3>Banking app</h3>
				</div>
			</div>
		</div>
	);
}
