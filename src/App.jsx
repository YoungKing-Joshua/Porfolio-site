import React, { useState } from "react";
import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Porfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contacts/Contacts";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/works";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/intro";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className='app'>
			<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className='sections'>
				<Intro />
				<Porfolio />
				<Works />
				<Testimonials />
				<Contact />
			</div>
		</div>
	);
}

export default App;
