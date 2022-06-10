import React, { useState } from 'react';
import AsidePracownik from "../AsidePracownik";
import PracownikTable from "../Tables/PracownikTable";

async function setItem(idZadania: string) {
    const data = await fetch('http://localhost:8080/zadanie/zakoncz_zadanie', {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
            idZadania: idZadania
        }),
    });
    return await data.json();
}

function ZadaniaPracownik() {
    const [idZadania, setIdZadania] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setItem(idZadania)
    };

    return (
        <div className="App">
            <AsidePracownik></AsidePracownik>
            <main id="czescglownaPracownik">
                <div className="zadania_pracownik">
                    <div id="zadania_pracownik_naglowek">
                        <h1>Zadania</h1>
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={idZadania} placeholder="ID zadania" onChange={event => setIdZadania(event.target.value)} />
                            &ensp;
                            <input type="submit" value="Zakończ zadanie" />
                        </form>
                    </div>
                    <div className="zadania_pracownik_tabela">
                        <PracownikTable />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ZadaniaPracownik;