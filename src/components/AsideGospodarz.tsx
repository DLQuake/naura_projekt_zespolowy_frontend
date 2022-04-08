import React from 'react';
import { Link } from 'react-router-dom';

function AsideGospodarz() {

    return (
        <aside>
            <div id="panel">
                <div id="panel_logo">
                    <img src={require('../img/profile.jpg')} alt="logo" />
                    <div id="nazwa_uzytkownika">Jan Kowalski</div>
                    <div id="zalogowany_jako">GOSPODARZ</div>
                </div>
                <div id="panel_menu">
                    <ul className="menu_gospodarz">
                        <li><Link to="/">Wyloguj się</Link></li>
                        <li><Link to="/Gospodarz">Główny panel</Link></li>
                        <li><Link to="/TwojeKonto">Twoje konto</Link></li>
                        <li><Link to="/Pracownicy">Pracownicy</Link></li>
                        <li><Link to="/ZadaniaGospodarz">Zadania</Link></li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default AsideGospodarz;
