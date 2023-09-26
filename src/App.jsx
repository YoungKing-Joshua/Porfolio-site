import React from "react";
import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/intro";
import Porfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contacts/Contacts";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/works";

function App() {
	return (
		<div className='app'>
			<Topbar />
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
