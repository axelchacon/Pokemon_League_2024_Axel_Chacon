import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import Trainers from "./pages/Trainers";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tickets" element={<Tickets />} />
				<Route path="/trainers" element={<Trainers />} />
			</Routes>
		</Router>
	);
}

export default App;
