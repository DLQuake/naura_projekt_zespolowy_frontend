import React from 'react';
import Header from '../HeaderCzescGlowna';

function Login() {
	return (
		<div className="App">
			<Header></Header>

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
