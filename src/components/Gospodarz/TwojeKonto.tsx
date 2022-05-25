import React from "react";
import AsideGospodarz from "../AsideGospodarz";

function TwojeKonto() {
    return (
        <div className="App">
            <AsideGospodarz></AsideGospodarz>
            <main id="czescglownaGospodarz">
                <div className="twojekonto">
                    <h1>Twoje konto</h1>
                    <div className="twojekonto_informacje">
                        <div className="twojekonto_informacje_nazwa">
                            <h2>Nazwa użytkownika</h2>
                            <p>Jan Kowalski</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default TwojeKonto;