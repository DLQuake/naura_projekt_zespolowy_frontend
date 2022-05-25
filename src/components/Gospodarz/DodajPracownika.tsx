import React from "react";
import AsideGospodarz from "../AsideGospodarz";


function DodajPracownika() {
    return (
        <div className="App">
            <AsideGospodarz></AsideGospodarz>
            <main id="czescglownaGospodarz">
                <div className="dodajpracownika">
                    <h1>Dodaj pracownika</h1>
                    <div id="dadajpracownika_formularz">
                        <form>
                            <input type="text" id="id" placeholder="ID" />
                            <input type="text" id="imie" placeholder="Imię" />
                            <input type="text" id="nazwisko" placeholder="Nazwisko" />
                            <input type="text" id="email" placeholder="Email" />
                            <input type="text" id="login" placeholder="Login" />
                            <input type="text" id="haslo" placeholder="Hasło" />
                        </form>
                            <button>Dodaj</button>
                            <button>Anuluj</button>
                    </div>
                </div>
            </main >
        </div >
    );
}

export default DodajPracownika;