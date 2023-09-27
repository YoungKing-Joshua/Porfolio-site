import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={"topbar " + (menuOpen && "active")}>
			<div className='wrapper'>
				<div className='left'>
					<a href='#intro' className='logo' onClick={() => setMenuOpen(false)}>
						genius.
					</a>
					<div className='itemContainer'>
						<Person className='icon' />
						<span>+233 54 648 7271</span>
					</div>
					<div className='itemContainer'>
						<Mail className='icon' />
						<span>joshuadeialorse@gmail.com</span>
					</div>
				</div>
				<div className='right'>
					<div className='humburger' onClick={() => setMenuOpen(!menuOpen)}>
						<span className='lin1'></span>
						<span className='lin2'></span>
						<span className='lin3'></span>
					</div>
				</div>
			</div>
		</div>
	);
}
