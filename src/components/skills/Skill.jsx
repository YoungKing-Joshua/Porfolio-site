// Import React and other necessary modules

import "./style.scss";
import { skills } from "./skills";
import { manLove } from "../../../public/images";

export function Skill() {
	return (
		<>
			{/* 			<div className='left'>
				<div className='imgContainer'>
					<img src='assets/man.png' alt='' />
				</div>
			</div>
			<div className='right'>
				<div className='wrapper'>
					<h2>Hi There, I'm</h2>
					<h1>Joshua Dei-Alorse</h1>
					<h3>
						Freelance <span ref={textRef}></span>
					</h3>
				</div>
				<a href='#portfolio'>
					<img src='assets/down.png' alt='' />
				</a>
			</div> */}
			<div className='section-container'>
				<div className='left'>
					<div className='imgContainer'>
						<h1>Hello👋, I'm Joshua</h1>
						<p>
							A software engineer with expertise in web and mobile development. I'm deeply
							passionate about technology and dedicated to delivering robust solutions.
						</p>
						<img src={manLove} />
					</div>
				</div>
				<div className='right'>
					{/* <h1>Skills</h1> */}
					<div className='wrapper'>
						{skills.map(({ img, description, link }) => (
							<a key={description} href={link} target='_blank' rel='noreferrer'>
								<div data-content={description}>
									<img src={img} title={description} alt={description} />
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
