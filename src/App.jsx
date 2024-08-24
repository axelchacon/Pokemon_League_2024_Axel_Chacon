import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import Trainers from "./pages/Trainers";
import Navbar from "./components/Navbar";

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
