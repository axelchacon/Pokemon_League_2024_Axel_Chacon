import React from "react";

function TrainerRow({ trainer }) {
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
					src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${trainer.mainPokemon}.gif`}
					alt={trainer.mainPokemon}
					className="w-16 h-16 mx-auto"
				/>
			</td>
			<td className="px-4 py-2 text-center">{trainer.totalPokemon}</td>
			<td className="px-4 py-2 text-center">{trainer.score}</td>
		</tr>
	);
}

export default TrainerRow;
