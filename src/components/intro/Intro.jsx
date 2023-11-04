import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
	const textRef = useRef();

	useEffect(() => {		
			init(textRef.current, {
				showCursor: true,
      				backDelay: 1100,
     				backSpeed: 40,
				strings: ["Software Engineer", "Fullstack Developer", "Content Creator"]
			})
	}, [])

	return (
		<div className='intro' id='intro'>
			<div className='left'>
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
			</div>
		</div>
	);
}
