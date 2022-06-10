import React from "react";
import AsideGospodarz from "../AsideGospodarz";

function TwojeKonto() {
    return (
        <div className="App">
            <AsideGospodarz></AsideGospodarz>
            <main id="czescglownaGospodarz">
                <div className="twojekonto">
                    <h1>Twoje konto</h1>
                    <div id="twojekonto_pom">
                        <div id="twojekonto_dane">
                            <p>Imię: <input type="text" placeholder="Jan"/></p>
                            <p>Nazwisko: <input type="text" placeholder="Kowalski"/></p>
                            <p>E-mail: <input type="text" placeholder="jankowalski@wp.pl"/></p>
                            <p>Login: <input type="text" placeholder="jankowalski"/></p>
                            <p>Hasło: <input type="text" placeholder="********"/></p>
                            <button>Zapisz</button>
                            <button>Anuluj</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default TwojeKonto;