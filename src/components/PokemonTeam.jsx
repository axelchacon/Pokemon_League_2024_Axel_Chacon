import React from "react";

function PokemonTeam({ pokemonTeam }) {
	return (
		<ul className="list-disc list-inside mt-2">
			{pokemonTeam.map((pokemon, index) => (
				<li key={index} className="ml-4">
					{pokemon}
				</li>
			))}
		</ul>
	);
}

export default PokemonTeam;
