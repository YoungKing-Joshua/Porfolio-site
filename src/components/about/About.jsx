import "./about.scss";
import { manLove } from "../../../public/images";
import PortfolioSkills from "../skill/PortfolioSkills";

export function About() {
	return (
		<div className='section-container'>
			<div className='left'>
				<div className='imgContainer'>
					<h1>Tech Stack</h1>
					{/* <h1>Hello👋, I'm Joshua</h1>
					<p>
						A software engineer with expertise in web and mobile development. I'm deeply passionate
						about technology and dedicated to delivering robust solutions.
					</p> */}
					<img src={manLove} alt='Joshua' />
				</div>
			</div>
			<div className='right'>
				<PortfolioSkills />
			</div>
		</div>
	);
}
