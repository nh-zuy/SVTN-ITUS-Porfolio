import "./../scss/navbar.scss";
import Mail from '@material-ui/icons/Mail';

function Navbar({isMenuOpen, setMenuOpen}) {
	return (
		<nav className={"navbar " + (isMenuOpen && "navbar--active")} id="navbar">
			<div className="container-fluid">
				<div className="navbar__header">
					<img src="assets/logoSVTN.png" alt="Logo" />
					
					<a className="navbar__brand" href="#header">
						SVTN-ITUS
					</a>

					<div className="navbar__social">
						<Mail className="icon" />
						<span>bcn.doisvtn.itus@gmail.com</span>
					</div>
				</div>

				<div className="navbar__nav">
					<div className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)}>
						<span className="hamburger_bar--one"></span>
						<span className="hamburger_bar--two"></span>
						<span className="hamburger_bar--three"></span> 
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;