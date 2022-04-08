import React from 'react';
import { Link } from 'react-router-dom';

function AsidePracownik() {

    return (
        <aside>
            <div id="panel">
                <div id="panel_logo">
                    <img src={require('../img/profile.jpg')} alt="logo" />
                    <div id="nazwa_uzytkownika">Jan Kowalski</div>
                    <div id="zalogowany_jako">PRACOWNIK</div>
                </div>
                <div id="panel_menu">
                    <ul className="menu_pracownik">
                        <li><Link to="/">Wyloguj się</Link></li>
                        <li><Link to="/Pracownik">Główny panel</Link></li>
                        <li><Link to="/ZadaniaPracownik">Zadania</Link></li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default AsidePracownik;
