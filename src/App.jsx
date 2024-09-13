import React, { useState } from "react";
import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Porfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contacts/Contacts";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import { About } from "./components/about/About";
import { Skill } from "./components/skills/Skill";
import PortfolioSkills from "./components/skill/PortfolioSkills";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className='app'>
			<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className='sections'>
				<Intro />
				<Porfolio />
				<About />
				{/* <Skill /> */}
				{/* <Works /> */}
				<Testimonials />
				<Contact />
			</div>
		</div>
	);
}

export default App;
