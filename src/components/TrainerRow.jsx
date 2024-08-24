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
				setPokemonImage(data.sprites.other["official-artwork"].front_default);
			} catch (error) {
				console.error("Error fetching Pokémon data:", error);
			}
		};

		fetchPokemonImage();
	}, [trainer.mainPokemon]);

	return (
		<tr className="border-b border-gray-300">
			<td className="px-4 py-2 text-center border-r border-gray-300">
				{trainer.id}
			</td>
			<td className="px-4 py-2 text-center border-r border-gray-300">
				<img
					src={trainer.image}
					alt={trainer.name}
					className="w-16 h-16 mx-auto rounded-full"
					onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
				/>
			</td>
			<td className="px-4 py-2 text-center border-r border-gray-300">
				{trainer.name}
			</td>
			<td className="px-4 py-2 text-center border-r border-gray-300">
				{pokemonImage ? (
					<img
						src={pokemonImage}
						alt={trainer.mainPokemon}
						className="w-20 h-20 mx-auto object-contain"
						onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
					/>
				) : (
					<span>Loading...</span>
				)}
			</td>
			<td className="px-4 py-2 text-center border-r border-gray-300">
				{trainer.totalPokemon}
			</td>
			<td className="px-4 py-2 text-center">{trainer.score}</td>
		</tr>
	);
}

export default TrainerRow;
