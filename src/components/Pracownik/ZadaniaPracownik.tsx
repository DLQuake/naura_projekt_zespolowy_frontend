import React from "react";
import AsidePracownik from "../AsidePracownik";
function ZadaniaPracownik() {
    return (
        <div className="App">
            <AsidePracownik></AsidePracownik>
            <main id="czescglownaPracownik">
                <div className="zadania_pracownik">
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

export default ZadaniaPracownik;