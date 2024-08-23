import React from "react";
import PokemonTeam from "./PokemonTeam";

function TrainerCard({ trainer }) {
	return (
		<div className="border p-4 rounded shadow mb-4">
			<h4 className="text-xl font-bold">{trainer.name}</h4>
			<p className="mt-2">Pokemon Team:</p>
			<PokemonTeam pokemonTeam={trainer.pokemonTeam} />
		</div>
	);
}

export default TrainerCard;
