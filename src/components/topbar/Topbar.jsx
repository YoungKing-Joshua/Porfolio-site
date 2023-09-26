import "./topbar.scss";
// import {Person, Mail} from "@matarial-ui";

export default function Topbar() {
	return (
		<div className='topbar' id='topbar'>
			<div className='wrapper'>
				<div className='left'>
					<a href='#intro' className='logo'>
						genius.
					</a>
				</div>
				<div className='itemContainer'>
					<Person className='icon' />
					<span>(+233)54 648 7271</span>
				</div>
				<div className='itemContainer'>
					<Mail className="icon"/>
					<span>joshuadeialorse@gmail.com</span>
				</div>
				<div className='right'>Go Beyond</div>
			</div>
		</div>
	);
}
