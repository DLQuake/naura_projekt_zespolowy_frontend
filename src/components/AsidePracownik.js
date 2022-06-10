import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function clearAll() {
    window.localStorage.clear();
    window.sessionStorage.clear();
}

function AsidePracownik() {
    const [login, setLogin] = useState({});

    useEffect(() => {
    fetch('http://localhost:8080/api/imie_nazwisko', {
        method: 'GET',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+localStorage.getItem('token')
        }
      }).then(response => response.json()).then(post => setLogin(post));
    }, []);
    
    return (
        <aside>
            <div id="panel">
                <div id="panel_logo">
                    <div id="nazwa_uzytkownika">{login['imie_nazwisko']}</div>
                    <div id="zalogowany_jako">PRACOWNIK</div>
                </div>
                <div id="panel_menu">
                    <ul className="menu_pracownik">
                        <li onClick={clearAll}><Link to="/">Wyloguj się</Link></li>
                        {/* <li><Link to="/Pracownik">Główny panel</Link></li> */}
                        <li><Link to="/ZadaniaPracownik">Zadania</Link></li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default AsidePracownik;
