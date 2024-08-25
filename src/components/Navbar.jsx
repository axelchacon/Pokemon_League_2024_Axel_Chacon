import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/LogoPokemon.jpeg"; // Asegúrate de que el logo esté guardado en esta ruta

function Navbar() {
	return (
		<nav className="bg-green-700 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center">
					<Link to="/">
						<img
							src={logo}
							alt="Pokemon League Logo"
							className="h-12 w-12 mr-4"
						/>
					</Link>
					<Link to="/" className="text-white text-xl font-bold">
						Pokemon League 2025
					</Link>
				</div>
				<div className="flex space-x-8">
					<Link
						to="/"
						className="text-white text-lg font-semibold hover:text-gray-200">
						Home
					</Link>
					<Link
						to="/tickets"
						className="text-white text-lg font-semibold hover:text-gray-200">
						Tickets
					</Link>
					<Link
						to="/trainers"
						className="text-white text-lg font-semibold hover:text-gray-200">
						Top Trainers
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
