import { Link } from "react-router-dom";
import ZadaniaTable from "../Tables/ZadaniaTable";

import AsideGospodarz from "../AsideGospodarz";

function ZadaniaGospodarz() {
    return (
        <div className="App">
            <AsideGospodarz></AsideGospodarz>
            <main id="czescglownaGospodarz">
                <div className="zadania_gospodarz">
                    <div className="zadania_naglowek">
                        <h1>Zadania</h1>
                        <Link to="/dodajzadanie">Dodaj zadanie</Link>
                    </div>
                    <div className="zadania_tabela">
                        <ZadaniaTable />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ZadaniaGospodarz;