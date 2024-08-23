import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import Trainers from "./pages/Trainers";

function App() {
	return (
		<Router>
			<div className="app">
				<Navbar />
				<main className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/tickets" element={<Tickets />} />
						<Route path="/trainers" element={<Trainers />} />
					</Routes>
				</main>
				<footer className="footer">
					<p>&copy; 2025 Pokemon League. All rights reserved.</p>
				</footer>
			</div>
		</Router>
	);
}

export default App;
