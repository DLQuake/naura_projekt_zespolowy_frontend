import React from 'react';
import { Link } from 'react-router-dom';

function Kontakt() {
	return (
		<div className="App">
			<header>
				<div className="rectangle">
					<h1 className="logo"><Link to="/">System planowania i zarządzania zadaniami w gospodarstwie rolnym</Link></h1>
				</div>

				<nav className="topnav">
					<ul className="menu">
						<li><Link to="/">Strona główna</Link></li>
						<li><Link to="/kontakt">Kontakt</Link></li>
						<li><Link to="/login">Zaloguj się</Link></li>
						<li><Link to="/register">Zarejestruj się</Link></li>
					</ul>
				</nav>
			</header>

			<main>
				<h1>Kontakt</h1>
				<div id="kontakt">
					<ul>
						<li>Adres e-mail: jan-kowalski@mail.com</li>
						<li></li>
						<li>Numer telefonu: 123-456-789</li>
					</ul>
				</div>

			</main>
		</div>
	);
}

export default Kontakt;
