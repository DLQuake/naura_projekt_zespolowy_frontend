import React , {useState} from 'react';
import Header from '../HeaderCzescGlowna';

async function setItem(login: string, haslo: string) {
    return await fetch('http://localhost:8080/auth/zaloguj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'login': login,
            'haslo': haslo
        })
      }).then(function(response){ return response.json(); })
}

async function czyGospodarz(token: string) {
    let auto = 'Bearer '+token;
    return await fetch('http://localhost:8080/api/czygospodarz', {
        method: 'GET',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Authorization": auto,
        }
      }).then(function(response){ return response.json(); })
}

function Login() {
    const [login, setLogin] = useState("");
    const [haslo, setHaslo] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const xd = await setItem(login, haslo);
        if(xd['error'] === false) {
            localStorage.setItem('token', xd['token']);
            const jd = await czyGospodarz(localStorage.getItem('token') || '');
            if(jd['error'] === false) {
                if(jd['message'] === true) {
                    localStorage.setItem("rola", "gospodarz");
                } else {
                    localStorage.setItem("rola", "pracownik");
                }
                if (localStorage.getItem("rola") === "gospodarz") {
                    window.location.href = "/ZadaniaGospodarz";
                } else {
                    window.location.href = "/ZadaniaPracownik";
                }
            }
        }
    };

	return (
		<div className="App">
			<Header></Header>

			<main>
				<div id="logowanie">
					<form onSubmit={handleSubmit}>
						Logowanie do systemu

						<input type="text" value={login} name="login" placeholder="Login" onChange={event => setLogin(event.target.value)} />
                        <input type="password" value={haslo} placeholder="Hasło" onChange={event => setHaslo(event.target.value)} />

						<input type="submit" value="Zaloguj się"/>
					</form>
				</div>
			</main>
		</div>
	);
}

export default Login;