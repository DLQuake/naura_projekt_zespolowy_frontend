import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';

function clearAll() {
    window.localStorage.clear();
    window.sessionStorage.clear();
}

function AsideGospodarz() {
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
                    <div id="zalogowany_jako">GOSPODARZ</div>
                </div>
                <div id="panel_menu">
                    <ul className="menu_gospodarz">
                        <li onClick={clearAll} ><Link to="/">Wyloguj się</Link></li>
                        {/* <li><Link to="/Gospodarz">Główny panel</Link></li> */}
                        {/* <li><Link to="/TwojeKonto">Twoje konto</Link></li> */}
                        <li><Link to="/Pracownicy">Pracownicy</Link></li>
                        <li><Link to="/ZadaniaGospodarz">Zadania</Link></li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default AsideGospodarz;