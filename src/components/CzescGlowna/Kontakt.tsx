import React from 'react';
import Header from '../HeaderCzescGlowna';

function Kontakt() {
	return (
		<div className="App">
			<Header></Header>

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
