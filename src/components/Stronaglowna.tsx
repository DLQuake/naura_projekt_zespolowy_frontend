import { Link } from 'react-router-dom';

function Stronaglowna() {

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
				<h1>Strona główna</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur ducimus cum quidem dignissimos consequuntur culpa quod iure error praesentium amet obcaecati natus, exercitationem dolor voluptatibus maiores laudantium mollitia facere.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur ducimus cum quidem dignissimos consequuntur culpa quod iure error praesentium amet obcaecati natus, exercitationem dolor voluptatibus maiores laudantium mollitia facere.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur ducimus cum quidem dignissimos consequuntur culpa quod iure error praesentium amet obcaecati natus, exercitationem dolor voluptatibus maiores laudantium mollitia facere.</p>
			</main>
		</div>
	);
}

export default Stronaglowna;
