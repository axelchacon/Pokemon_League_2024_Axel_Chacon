import React, { useEffect, useState } from "react";

function TrainerRow({ trainer }) {
	const [pokemonImage, setPokemonImage] = useState("");

	useEffect(() => {
		const fetchPokemonImage = async () => {
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${trainer.mainPokemon.toLowerCase()}/`
				);
				const data = await response.json();
				setPokemonImage(data.sprites.other.home.front_default);
			} catch (error) {
				console.error("Error fetching Pokémon data:", error);
			}
		};

		fetchPokemonImage();
	}, [trainer.mainPokemon]);

	return (
		<tr>
			<td className="px-4 py-2 text-center">{trainer.id}</td>
			<td className="px-4 py-2 text-center">
				<img
					src={trainer.image}
					alt={trainer.name}
					className="w-16 h-16 mx-auto rounded-full"
				/>
			</td>
			<td className="px-4 py-2 text-center">{trainer.name}</td>
			<td className="px-4 py-2 text-center">
				<img
					src={pokemonImage}
					alt={trainer.mainPokemon}
					className="w-20 h-20 mx-auto object-contain"
				/>
			</td>
			<td className="px-4 py-2 text-center">{trainer.totalPokemon}</td>
			<td className="px-4 py-2 text-center">{trainer.score}</td>
		</tr>
	);
}

export default TrainerRow;
