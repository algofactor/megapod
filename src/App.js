import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
	// Logic
	const [nav, setNav] = useState(false);
	const showNav = () => {
		setNav(!nav);
	};
	const closeNav = () => {
		setNav(false);
	};
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home nav={nav} showNav={showNav} closeNav={closeNav} />} />
			</Routes>
		</Router>
	);
};

export default App;
