import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import Homepage from "./components/homepage";
import About from "./components/about";

import { TRACKING_ID } from "./data/tracking";
import './App.css';

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);
  return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route exact path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
