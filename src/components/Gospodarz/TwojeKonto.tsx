import React from "react";
import AsideGospodarz from "../AsideGospodarz";

function TwojeKonto() {
    return (
        <div className="App">
            <AsideGospodarz></AsideGospodarz>
            <main id="czescglownaGospodarz">
                <div className="twojekonto">
                    <h1>Twoje konto</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        doloremque, quidem, quisquam doloremque.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default TwojeKonto;