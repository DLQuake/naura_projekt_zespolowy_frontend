import React, { useState } from 'react';
import AsideGospodarz from "../AsideGospodarz";

async function setItem(opis: string, pracownicy: string) {
    const data = await fetch('http://localhost:8080/zadanie/dodaj_zadanie', {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
            opis: opis,
            pracownicy: [pracownicy]

        }),
    });
    return await data.json();
}

function DodajZadanie() {
    const [opis, setOpis] = useState("");
    const [pracownicy, setPracownicy] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setItem(opis, pracownicy)
    };

    return (
        <div className="App">
            <AsideGospodarz></AsideGospodarz>
            <main id="czescglownaGospodarz">
                <div className="dodajpracownika">
                    <h1>Dodaj zadanie</h1>
                    <div id="dodajzadanie_pom">
                        <div id="dadajzadanie_formularz">
                            <form onSubmit={handleSubmit}>
                                <input type="text" value={opis} placeholder="Opis zadania" onChange={event => setOpis(event.target.value)} />
                                <input type="text" value={pracownicy} name="pracownicy" placeholder="Pracownik" onChange={event => setPracownicy(event.target.value)} />
                                <input type="submit" value="Dodaj" />
                            </form>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
}

export default DodajZadanie;