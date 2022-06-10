import React, { useState } from 'react';
import AsideGospodarz from "../AsideGospodarz";

async function setItem(imie: string, nazwisko: string, email: string, login: string, haslo: string) {
    const data = await fetch('http://localhost:8080/api/dodajpracownika', {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+localStorage.getItem('token')
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

function DodajPracownika() {
    const [imie, setImie] = useState("");
    const [nazwisko, setNazwisko] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [haslo, setHaslo] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setItem(imie, nazwisko, email, login, haslo)
    };

    return (
        <div className="App">
            <AsideGospodarz></AsideGospodarz>
            <main id="czescglownaGospodarz">
                <div className="dodajpracownika">
                    <h1>Dodaj pracownika</h1>
                    <div id="dodajpracownika_pom">
                        <div id="dadajpracownika_formularz">
                            <form onSubmit={handleSubmit}>
                                <input type="text" value={imie} placeholder="Imię" onChange={event => setImie(event.target.value)} />
                                <input type="text" value={nazwisko} placeholder="Nazwisko" onChange={event => setNazwisko(event.target.value)} />
                                <input type="text" value={email} placeholder="Adres E-mail" onChange={event => setEmail(event.target.value)} />
                                <input type="text" value={login} name="login" placeholder="Login" onChange={event => setLogin(event.target.value)} />
                                <input type="password" value={haslo} placeholder="Hasło" onChange={event => setHaslo(event.target.value)} />
                                <input type="submit" value="Dodaj" />
                            </form>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
}

export default DodajPracownika;