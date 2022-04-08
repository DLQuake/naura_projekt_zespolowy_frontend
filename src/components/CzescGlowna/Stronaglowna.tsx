import React from 'react';
import Header from '../HeaderCzescGlowna';

function Stronaglowna() {

	return (
		<div className="App">
			<Header></Header>
			<main>
				<div id="stronaglowna">
					<h1>Strona główna</h1>
					<h2>
						System planowania i zarządzania zadaniami w gospodarstwie rolnym to narzędzie, którego celem jest zapewnienie wsparcia w zarządzaniu zadaniami w gospodarstwie rolnym.
					</h2>

					<section className='FlexContainer'>
						<div>
							<h2>Planowanie i zarządzanie zadaniami</h2>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur odio eaque non quaerat necessitatibus, velit facilis quis aut pariatur cupiditate, quasi iure omnis quibusdam repudiandae fuga dolor dolore numquam vero.
							</p>
						</div>
						<div>
							<h2>Monitoruj to co robią pracownicy</h2>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur odio eaque non quaerat necessitatibus, velit facilis quis aut pariatur cupiditate, quasi iure omnis quibusdam repudiandae fuga dolor dolore numquam vero.
							</p>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}

export default Stronaglowna;
