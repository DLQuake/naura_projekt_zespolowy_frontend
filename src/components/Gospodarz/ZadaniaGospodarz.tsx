import React from "react";
import AsideGospodarz from "../AsideGospodarz";

function ZadaniaGospodarz() {
    return (
        <div className="App">
            <AsideGospodarz></AsideGospodarz>
            <main id="czescglownaGospodarz">
                <div className="zadania_gospodarz">
                    <h1>Zadania</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        doloremque, quidem, quisquam doloremque.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default ZadaniaGospodarz;