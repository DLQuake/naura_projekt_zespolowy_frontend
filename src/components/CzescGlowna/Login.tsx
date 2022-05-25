import React , { useEffect, useState }from 'react';
import Header from '../HeaderCzescGlowna';

function Login() {

	const [login, setLogin] = useState("");
	const [haslo, setHaslo] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		fetch('localhost:8080/auth/zaloguj', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				login: login,
				haslo: haslo
			}),
		})
			.then(data => data.json())
	};

	// after login
	useEffect(() => {
		if (localStorage.getItem('login') !== null) {
			alert("Zalogowano pomyślnie");
			localStorage.removeItem('login');
		}
	}, []);

	return (
		<div className="App">
			<Header></Header>

			<main>
				<div id="logowanie">
					<form>
						Logowanie do systemu

						<input type="text" value={login} placeholder="login" onChange={event => setLogin(event.target.value)}/>

						<input type="password" value={haslo} placeholder="hasło" onChange={event => setHaslo(event.target.value)}/>


						<input type="submit" value="Zaloguj się"/>
					</form>
				</div>
			</main>
		</div>
	);
}

export default Login;
