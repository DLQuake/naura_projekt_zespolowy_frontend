import { Link } from 'react-router-dom';
import AsidePracownik from '../AsidePracownik';

function Pracownik() {

    return (
		<div className="App">
            <AsidePracownik></AsidePracownik>

			<main id='czescglownaPracownik'>
                <div className="opcje">
                    <div className="Pracownik_opcja1">
                        <div id="tytul_opcji">Zadania do wykonania</div>
                        <div id="zawartoscOpcji">
                            <ul>
                                <li>lorem</li>
                                <li>ipsum</li>
                                <li>lorem</li>
                                <li>ipsum</li>
                            </ul>
                        </div>
                        <div id="pokazWiecej"><Link to="/zadaniaPracownik">Pokaż więcej</Link></div>
                    </div>
                    <div className="Pracownik_opcja2">
                        <div id="tytul_opcji">Zakończone zadania</div>
                        <div id="zawartoscOpcji">
                            <ul>
                                <li>lorem</li>
                                <li>ipsum</li>
                                <li>lorem</li>
                                <li>ipsum</li>
                            </ul>
                        </div>
                        <div id="pokazWiecej"><Link to="/zadaniaPracownik">Pokaż więcej</Link></div>
                    </div>
                </div>
                <div className="Pracownik_opcja3">
                    <div id="tytul_opcji">Raporty o postępie oraz wykonaniu zadania</div>
                    <div id="zawartoscOpcji">
                        <ul>
                            <li>lorem</li>
                            <li>ipsum</li>
                            <li>lorem</li>
                            <li>ipsum</li>
                        </ul>
                    </div>
                    <div id="pokazWiecej"><Link to="/zadaniaPracownik">Pokaż więcej</Link></div>
                </div >
			</main >
		</div >
	);
}

export default Pracownik;
