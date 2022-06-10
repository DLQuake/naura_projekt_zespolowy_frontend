import React, { useState } from 'react';
import Header from '../HeaderCzescGlowna';

async function setItem(imie: string, nazwisko: string, email: string, login: string, haslo: string) {
    const data = await fetch('http://localhost:8080/auth/zarejestruj', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imie: imie,
            nazwisko: nazwisko,
            email: email,
            login: login,
            haslo: haslo
        }),
    });
    return await data.json();
}

function Register() {
    const [imie, setImie] = useState("");
    const [nazwisko, setNazwisko] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [haslo, setHaslo] = useState("");
    const [rehaslo, setRehaslo] = useState("");
    const [alert, setAlert] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setItem(imie, nazwisko, email, login, haslo)
            .then(() => {
                setHaslo('');
                setAlert(true);
            })
    };
    return (
        <div className="App">
            <Header></Header>

            <main>
                <div id="rejestracja">
                    {alert && <h2>Konto zarejestrowane pomyślnie</h2>}
                    <form onSubmit={handleSubmit}>
                        Rejestracja do systemu
                        <input type="text" value={imie} placeholder="Imię" onChange={event => setImie(event.target.value)} />
                        <input type="text" value={nazwisko} placeholder="Nazwisko" onChange={event => setNazwisko(event.target.value)} />
                        <input type="text" value={email} placeholder="Adres E-mail" onChange={event => setEmail(event.target.value)} />
                        <input type="text" value={login} name="login" placeholder="Login" onChange={event => setLogin(event.target.value)} />
                        <input type="password" value={haslo} placeholder="Hasło" onChange={event => setHaslo(event.target.value)} />
                        {/* <input type="password" value={rehaslo} placeholder="Powtórz Hasło" onChange={event => setRehaslo(event.target.value)} /> */}

                        {/* submit */}
                        <input type="submit" value="Zarejestruj" />

                    </form>
                </div>
            </main>
        </div>
    );
}

export default Register;
