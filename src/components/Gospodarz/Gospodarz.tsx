import React from 'react';
import { Link } from 'react-router-dom';
import AsideGospodarz from '../AsideGospodarz';

function Pracownik() {

    return (
		<div className="App">
            <AsideGospodarz></AsideGospodarz>
			<main id="czescglownaGospodarz">
                <div className="opcje">
                    <div className="opcja1">
                        <div id="tytul_opcji">Zatrudnieni pracownicy: 40</div>
                        <div id="zawartoscOpcji">
                            <ul>
                                <li>lorem</li>
                                <li>ipsum</li>
                                <li>lorem</li>
                                <li>ipsum</li>
                            </ul>
                        </div>
                        <div id="pokazWiecej"><Link to="/Pracownicy">Pokaż więcej</Link></div>
                    </div>
                    <div className="opcja2">
                        <div id="tytul_opcji">Nadchodzące zadania</div>
                        <div id="zawartoscOpcji">
                            <ul>
                                <li>lorem</li>
                                <li>ipsum</li>
                                <li>lorem</li>
                                <li>ipsum</li>
                            </ul>
                        </div>
                        <div id="pokazWiecej"><Link to="/Zadania">Pokaż więcej</Link></div>
                    </div>
                    <div className="opcja3">
                        <div id="tytul_opcji">Trwające zadania</div>
                        <div id="zawartoscOpcji">
                            <ul>
                                <li>lorem</li>
                                <li>ipsum</li>
                                <li>lorem</li>
                                <li>ipsum</li>
                            </ul>
                        </div>
                        <div id="pokazWiecej"><Link to="/Zadania">Pokaż więcej</Link></div>
                    </div >
                    <div className="opcja4">
                        <div id="tytul_opcji">Zakończone zadania</div>
                        <div id="zawartoscOpcji">
                            <ul>
                                <li>lorem</li>
                                <li>ipsum</li>
                                <li>lorem</li>
                                <li>ipsum</li>
                            </ul>
                        </div>
                        <div id="pokazWiecej"><Link to="/Zadania">Pokaż więcej</Link></div>
                    </div>
                </div>
			</main >
		</div >
	);
}

export default Pracownik;
