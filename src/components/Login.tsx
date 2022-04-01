import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
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
				<div id="logowanie">
					<form>
						Logowanie do systemu

						<input type="text" placeholder="login" />


						<input type="password" placeholder="hasło" />


						<input type="submit" value="Zaloguj się" />

					</form>
				</div>
			</main>
		</div>
	);
}

export default Login;
