import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/LogoPokemon.jpeg";

function Home() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Welcome to the Pokemon League 2025!</h1>
				<p>Get your tickets and check out the top trainers!</p>
				<div className="cta-buttons">
					<Link to="/trainers" className="cta-button cta-red">
						See Top 10 Trainers
					</Link>
					<Link to="/tickets" className="cta-button cta-yellow">
						Buy Tickets
					</Link>
				</div>
			</header>

			{/* Footer Section */}
			<footer className="App-footer">
				<div className="footer-container">
					<div className="footer-left">
						<img src={logo} alt="Pokemon League Logo" className="footer-logo" />
						<p className="footer-company-name">Pokemon League 2025</p>
					</div>
					<div className="footer-right">
						<p className="footer-contact">Contact us:</p>
						<p>Phone: +1-800-POKEMON</p>
						<p>Email: support@pokemonleague.com</p>
						<p>Address: 123 Pokemon Street, Pallet Town, Kanto Region</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Home;
