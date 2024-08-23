import React from "react";

function TopTrainers({ region, trainer }) {
	return (
		<div className="border p-4 rounded shadow mb-4">
			<h3 className="text-xl font-bold mb-2">{region.name.toUpperCase()}</h3>
			<h4 className="text-lg font-bold">{trainer.name}</h4>
			<p>Pokemon Team:</p>
			<ul className="list-disc list-inside">
				{trainer.pokemonTeam.map((pokemon, index) => (
					<li key={index}>{pokemon}</li>
				))}
			</ul>
		</div>
	);
}

export default TopTrainers;
