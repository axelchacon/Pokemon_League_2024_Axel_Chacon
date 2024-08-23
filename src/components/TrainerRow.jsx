import React, { useEffect, useState } from "react";

function TrainerRow({ trainer }) {
	const [pokemonImage, setPokemonImage] = useState("");

	useEffect(() => {
		const fetchPokemonImage = async () => {
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${trainer.mainPokemon}`
				);
				const data = await response.json();
				setPokemonImage(data.sprites.front_default);
			} catch (error) {
				console.error("Error fetching Pokemon image:", error);
			}
		};

		fetchPokemonImage();
	}, [trainer.mainPokemon]);

	return (
		<tr className="border-b border-primary-dark">
			<td className="px-4 py-2 border text-center">{trainer.id}</td>
			<td className="px-4 py-2 border text-center">
				<img
					src={trainer.image}
					alt={trainer.name}
					className="w-12 h-12 mx-auto"
				/>
			</td>
			<td className="px-4 py-2 border text-center">{trainer.name}</td>
			<td className="px-4 py-2 border text-center">
				<img
					src={pokemonImage}
					alt={trainer.mainPokemon}
					className="w-12 h-12 mx-auto"
				/>
				<p>
					{trainer.mainPokemon.charAt(0).toUpperCase() +
						trainer.mainPokemon.slice(1)}
				</p>
			</td>
			<td className="px-4 py-2 border text-center">{trainer.totalPokemon}</td>
			<td className="px-4 py-2 border text-center">{trainer.score}</td>
		</tr>
	);
}

export default TrainerRow;
