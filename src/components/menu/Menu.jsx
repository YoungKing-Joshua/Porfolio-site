import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
	return (
		<div className={"menu " + (menuOpen && "active")} id='menu'>
			<ul>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#intro'>Intro</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#portfolio'>Portfolio</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#about'>Skills</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#testimonials'>Testimonials</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
		</div>
	);
}
