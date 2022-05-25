import React from "react";
import AsideGospodarz from "../AsideGospodarz";

function DodajZadanie() {
    return (
        <div className="App">
            <AsideGospodarz></AsideGospodarz>
            <main id="czescglownaGospodarz">
                <div className="dodajzadanie">
                    <h1>Dodaj zadanie</h1>
                    <div id="dadajzadanie_formularz">
                        <form>
                            <input type="text" id="id" placeholder="ID" />
                            <input type="text" id="imie" placeholder="Treść" />
                            <input type="text" id="nazwisko" placeholder="Przydzielić pracownika (login)" />
                        </form>
                            <button>Dodaj</button>
                            <button>Anuluj</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DodajZadanie;