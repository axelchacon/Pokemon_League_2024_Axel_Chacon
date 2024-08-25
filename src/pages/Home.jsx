import React from "react";
import { Link } from "react-router-dom";
import portadaHome from "../assets/PokemonLeague2024Portada.jpeg"; // Asegúrate de que la ruta y el nombre de la imagen sean correctos

function Home() {
	return (
		<div className="relative w-full h-screen bg-gradient-to-b from-blue-700 to-green-500">
			<div className="container mx-auto flex flex-col items-center justify-center h-full">
				<img
					src={portadaHome}
					alt="Pokemon League Portada"
					className="w-64 h-auto mb-8"
				/>
				<h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
					Welcome to the Pokemon League 2025!
				</h1>
				<p className="text-lg md:text-2xl text-white text-center mb-8">
					Get your tickets and check out the top trainers!
				</p>
				<div className="flex space-x-4">
					<Link to="/trainers">
						<button className="px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transition duration-300">
							See Top 10 Trainers
						</button>
					</Link>
					<Link to="/tickets">
						<button className="px-6 py-3 bg-yellow-600 text-white text-lg font-semibold rounded-full hover:bg-yellow-700 transition duration-300">
							Buy Tickets
						</button>
					</Link>
				</div>
			</div>
			<footer className="w-full bg-gray-900 text-white py-8 mt-auto">
				<div className="container mx-auto text-center">
					<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
					<p className="mb-2">
						For any inquiries or questions about the event, please contact us:
					</p>
					<a
						href="mailto:info@pokemonleague.com?subject=Event Inquiry"
						className="text-blue-400 hover:text-blue-600">
						axelchacon200@gmail.com
					</a>
					<div className="mt-4">
						<p>&copy; 2024 Axel Diego Chacón Pérez. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Home;
