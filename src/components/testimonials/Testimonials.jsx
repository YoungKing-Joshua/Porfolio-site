import "./testimonials.scss";

export default function Testimonials() {
	return (
		<div className='testimonials' id='testimonials'>
			<h1>Testimonials</h1>
			<div className='container'>
				<div className='card'>
					<div className='top'>
						<img src='assets/right-arrow.png' className='left' alt='' />
						<img
							src='https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
							className='user'
							alt=''
						/>
						<img src='assets/youtube.png' className='right' alt='' />
					</div>
					<div className='center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ad earum quis officiis
						excepturi iure eveniet. 
					</div>
					<div className='bottom'>
						<h3>Nana Gyasi</h3>
						<h4>CEO of NeoGynesis</h4>
					</div>
				</div>
			</div>
		</div>
	);
}
