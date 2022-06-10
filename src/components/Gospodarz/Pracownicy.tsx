import { Link } from "react-router-dom";
import AsideGospodarz from "../AsideGospodarz";
import PracownicyTable from "../Tables/PracownicyTable";

function Pracownicy() {
    return (
        <div className="App">
            <AsideGospodarz></AsideGospodarz>
            <main id="czescglownaGospodarz">
                <div className="pracownicy">
                    <div className="pracownicy_naglowek">
                        <h1>Pracownicy</h1>
                        <Link to="/dodajpracownika">Dodaj pracownika</Link>
                    </div>
                    <div className="pracownicy_tabela">
                        <PracownicyTable/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Pracownicy;