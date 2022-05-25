import React, { useEffect, useState } from 'react';
import Header from '../HeaderCzescGlowna';

function Register() {
    const [imie, setImie] = useState("");
    const [nazwisko, setNazwisko] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [haslo, setHaslo] = useState("");
    const [rehaslo, setRehaslo] = useState("");


    const handleSubmit = (e: any) => {
        e.preventDefault();
        fetch('localhost:8080/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imie: imie,
                nazwisko: nazwisko,
                email: email,
                login: login,
                haslo: haslo,
                rehaslo: rehaslo
            }),
        })
            .then(data => data.json())
    };

    // alert after register
    useEffect(() => {
        if (localStorage.getItem('login') !== null) {
            alert("Zarejestrowano pomyślnie");
            localStorage.removeItem('login');
        }
    }, []);

    return (
        <div className="App">
            <Header></Header>

            <main>
                <div id="rejestracja">
                    <form onSubmit={handleSubmit} >
                        Rejestracja do systemu

                        <input type="text" value={imie} placeholder="Imię" onChange={event => setImie(event.target.value)} />
                        <input type="text" value={nazwisko} placeholder="Nazwisko" onChange={event => setNazwisko(event.target.value)} />
                        <input type="text" value={email} placeholder="Adres E-mail" onChange={event => setEmail(event.target.value)} />
                        <input type="text" value={login} name="login" placeholder="Login" onChange={event => setLogin(event.target.value)} />


                        <input type="password" value={haslo} placeholder="Hasło" onChange={event => setHaslo(event.target.value)} />
                        <input type="password" value={rehaslo} name="rehaslo" placeholder="Powtórz hasło" onChange={event => setRehaslo(event.target.value)}/>


                        {/* submit */}
                        <input type="submit" value="Zarejestruj" />

                    </form>
                </div>
            </main>
        </div>
    );
}

export default Register;
