import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./css/Pracownik.css";
import "./css/Gospodarz.css";

import Stronaglowna from "./components/CzescGlowna/Stronaglowna";
import Kontakt from "./components/CzescGlowna/Kontakt";
import Login from "./components/CzescGlowna/Login";
import Register from "./components/CzescGlowna/Register";

import Gospodarz from "./components/Gospodarz/Gospodarz";
import TwojeKonto from "./components/Gospodarz/TwojeKonto";
import Pracownicy from "./components/Gospodarz/Pracownicy";
import DodajPracownika from "./components/Gospodarz/DodajPracownika";
import ZadaniaGospodarz from "./components/Gospodarz/ZadaniaGospodarz";
import DodajZadanie from "./components/Gospodarz/DodajZadanie";

import Pracownik from "./components/Pracownik/Pracownik";
import ZadaniaPracownik from "./components/Pracownik/ZadaniaPracownik";
import Raporty from "./components/Pracownik/Raporty";

// for testing
import data from "./data.json";
import task from "./task.json";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Stronaglowna />} />
				<Route path="/kontakt" element={<Kontakt />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route path="/gospodarz" element={<Gospodarz />} />
				<Route path="/twojekonto" element={<TwojeKonto />} />
				<Route path="/pracownicy" element={<Pracownicy data={data} />} />
				<Route path="/dodajpracownika" element={<DodajPracownika />} />
				<Route path="/zadaniaGospodarz" element={<ZadaniaGospodarz data={task}/>} />
				<Route path="/dodajzadanie" element={<DodajZadanie />} />


				<Route path="/pracownik" element={<Pracownik />} />
				<Route path="/zadaniaPracownik" element={<ZadaniaPracownik />} />
				<Route path="/raporty" element={<Raporty />} />
			</Routes>
		</Router>
	);
}

export default App;