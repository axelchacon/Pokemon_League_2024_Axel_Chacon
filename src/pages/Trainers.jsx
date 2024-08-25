import React, { useEffect, useState } from "react";
import TrainerRow from "../components/TrainerRow";

function Trainers() {
	const [regions, setRegions] = useState([]);
	const [selectedRegion, setSelectedRegion] = useState(null);
	const [trainersData, setTrainersData] = useState([]);

	useEffect(() => {
		const fetchRegions = async () => {
			try {
				const response = await fetch("https://pokeapi.co/api/v2/region");
				const data = await response.json();
				setRegions(data.results);
			} catch (error) {
				console.error("Error fetching regions:", error);
			}
		};

		fetchRegions();
	}, []);

	useEffect(() => {
		if (selectedRegion) {
			// Define los entrenadores para cada región
			const trainersByRegion = {
				kanto: [
					{
						id: 1,
						name: "Ash Ketchum",
						image:
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUxdu-6R3onIYWQCon1ZkQVezCxjW0PCuKiFRslzV2uo8HqD6-KC-pV9d1Z50LicTRZE&usqp=CAU",
						mainPokemon: "pikachu",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Misty",
						image:
							"https://w7.pngwing.com/pngs/766/545/png-transparent-misty-pokemon-x-and-y-pokemon-omega-ruby-and-alpha-sapphire-ash-ketchum-pokemon-misty-hand-human-cartoon-thumbnail.png",
						mainPokemon: "starmie",
						totalPokemon: 4,
						score: 480,
					},
					{
						id: 3,
						name: "Brock",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/3/3b/latest/20180812021535/Brock_LGPE.png",
						mainPokemon: "onix",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Lt. Surge",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/2/20/latest/20110403010512/Caballero_RFVH.png",
						mainPokemon: "raichu",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Erika",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/7/70/latest/20110403010059/Campista_RFVH.png",
						mainPokemon: "vileplume",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Sabrina",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/6/61/latest/20070113132052/Domador_RFVH.png",
						mainPokemon: "alakazam",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Koga",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/4/4c/latest/20070113131354/Malabarista_RFVH.png",
						mainPokemon: "venomoth",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Blaine",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/e/e1/latest/20110403010918/Nadadora_RFVH.png",
						mainPokemon: "arcanine",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Giovanni",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/a/a5/latest/20080502041444/Bella_DP.png",
						mainPokemon: "nidoqueen",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Lorelei",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/7/79/latest/20080813164151/Chica_DP.png",
						mainPokemon: "lapras",
						totalPokemon: 4,
						score: 400,
					},
				],
				johto: [
					{
						id: 1,
						name: "Ethan",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/1/15/latest/20081219204925/Bella_RAA.png",
						mainPokemon: "typhlosion",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Kris",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/2/2c/latest/20230930070149/Chica_RAA.png",
						mainPokemon: "feraligatr",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Silver",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/6/6b/latest/20081219205138/Entrenadora_guay_RAA.png",
						mainPokemon: "sneasel",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Whitney",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/2/22/latest/20230930070851/Joven_RAA.png",
						mainPokemon: "miltank",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Morty",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20081219205636/Malabarista_RAA.png",
						mainPokemon: "gengar",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Chuck",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/1/1a/latest/20231002172351/Monta%C3%B1ero_RAA.png",
						mainPokemon: "primeape",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Jasmine",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/d/d8/latest/20240101120140/Pescador_RAA.png",
						mainPokemon: "steelix",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Pryce",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/d/de/latest/20231229151320/Caballero_RAA.png",
						mainPokemon: "piloswine",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Clair",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/d/d4/latest/20081219204926/Cient%C3%ADfico_RAA.png",
						mainPokemon: "kingdra",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Karen",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/3/32/latest/20081219205420/Jug%C3%B3n_RAA.png",
						mainPokemon: "umbreon",
						totalPokemon: 4,
						score: 400,
					},
				],
				hoenn: [
					{
						id: 1,
						name: "Brendan",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/9/9c/latest/20240101115320/Marinero_RAA.png",
						mainPokemon: "swampert",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "May",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/9/92/latest/20081219205637/Motorista_RAA.png",
						mainPokemon: "blaziken",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Roxanne",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/f/fd/latest/20081219205929/Pok%C3%A9man%C3%ADaco_RAA.png",
						mainPokemon: "nosepass",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Brawly",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/9/94/latest/20081219204926/Calvo_RAA.png",
						mainPokemon: "hariyama",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Wattson",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/e/ec/latest/20081219205138/Domador_RAA.png",
						mainPokemon: "manectric",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Flannery",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/e/e5/latest/20231013142904/Dominguera_RAA.png",
						mainPokemon: "torkoal",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Norman",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/9/95/latest/20080818105853/Mec%C3%A1nico_RAA.png",
						mainPokemon: "slaking",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Winona",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/7/7a/latest/20231013142827/Nadador_RAA.png",
						mainPokemon: "altaria",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Tate & Liza",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/f/f0/latest/20240301215450/Rockero_RAA.png",
						mainPokemon: "lunatone",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Wallace",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/c/c9/latest/20230920051814/Cazabichos_RAA.png",
						mainPokemon: "milotic",
						totalPokemon: 4,
						score: 400,
					},
				],
				sinnoh: [
					{
						id: 1,
						name: "Lucas",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/0/01/latest/20080814171105/Chica_OPC.png",
						mainPokemon: "infernape",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Dawn",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/8/84/latest/20080818010202/Comefuego_OPC.png",
						mainPokemon: "empoleon",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Barry",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/a/ac/latest/20080814170833/Karateka_OPC.png",
						mainPokemon: "staraptor",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Roark",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/9/91/latest/20080814171316/Nadador_OPC.png",
						mainPokemon: "rampardos",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Gardenia",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/3/36/latest/20080814170820/Pescador_OPC.png",
						mainPokemon: "roserade",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Maylene",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/1/1e/latest/20080814171352/Profesora_OPC.png",
						mainPokemon: "lucario",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Crasher Wake",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/8/8f/latest/20080818144230/Medium_OPC.png",
						mainPokemon: "floatzel",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Fantina",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/b/b7/latest/20080814171341/Gemelas_OPC.png",
						mainPokemon: "mismagius",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Byron",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/6/62/latest/20080814171043/Campista_OPC.png",
						mainPokemon: "bastiodon",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Candice",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/3/3a/latest/20080814170900/Entrenador_guay_OPC.png",
						mainPokemon: "abomasnow",
						totalPokemon: 4,
						score: 400,
					},
				],
				unova: [
					{
						id: 1,
						name: "Hilbert",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/1/1e/latest/20080814185323/Guitarrista_OPC.png",
						mainPokemon: "emboar",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Hilda",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/8/85/latest/20080814171037/Malabarista_OPC.png",
						mainPokemon: "serperior",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Cheren",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/c/c9/latest/20080818083936/Snow-boarder_OPC.png",
						mainPokemon: "stoutland",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Bianca",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/4/48/latest/20080814185430/Cazabichos_OPC.png",
						mainPokemon: "musharna",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Lenora",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/c/c9/latest/20080822144302/Joven_OPC.png",
						mainPokemon: "watchog",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Burgh",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/1/1a/latest/20080818000824/Motorista_OPC.png",
						mainPokemon: "leavanny",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Elesa",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/e/e3/latest/20080818001927/Pok%C3%A9man%C3%ADaco_OPC.png",
						mainPokemon: "zebstrika",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Clay",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/e/eb/latest/20080814171304/Supernecio_OPC.png",
						mainPokemon: "excadrill",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Skyla",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/7/74/latest/20080814183628/Damisela_RZE.png",
						mainPokemon: "swanna",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Drayden",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/f/fa/latest/20080814183452/Marinero_RZE.png",
						mainPokemon: "haxorus",
						totalPokemon: 4,
						score: 400,
					},
				],
				kalos: [
					{
						id: 1,
						name: "Calem",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/d/d9/latest/20080813165320/Artista_DP.png",
						mainPokemon: "chesnaught",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Serena",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/5/51/latest/20080813165630/Camarera_DP.png",
						mainPokemon: "delphox",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Shauna",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/5/58/latest/20080813165337/Criadora_DP.png",
						mainPokemon: "goodra",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Tierno",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/b/be/latest/20080813170139/Esquiador_DP.png",
						mainPokemon: "talonflame",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Trevor",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/a/a6/latest/20080813164348/Obrero_DP.png",
						mainPokemon: "aerodactyl",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Viola",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/3/3e/latest/20080813170219/Playera_DP.png",
						mainPokemon: "vivillon",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Grant",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/1/1e/latest/20080813164619/Gemelas_DP.png",
						mainPokemon: "tyrunt",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Korrina",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/1/1a/latest/20080813165353/Ranchero_DP.png",
						mainPokemon: "lucario",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Ramos",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/5/53/latest/20110630150751/Veterano_DP.png",
						mainPokemon: "gogoat",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Valerie",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/5/55/latest/20080813170626/D%C3%BAo_DP.png",
						mainPokemon: "sylveon",
						totalPokemon: 4,
						score: 400,
					},
				],
				alola: [
					{
						id: 1,
						name: "Elio",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/d/d7/latest/20090913215506/Comefuego_HGSS.png",
						mainPokemon: "decidueye",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Selene",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/7/72/latest/20091104003411/Entrenadora_guay_HGSS.png",
						mainPokemon: "primarina",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Hau",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/7/7b/latest/20090913230622/Marinero_HGSS.png",
						mainPokemon: "raichu-alola",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Gladion",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20090913233436/Pok%C3%A9fan_%28hombre%29_HGSS.png",
						mainPokemon: "silvally",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Ilima",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/2/2a/latest/20091104003411/Snow-boarder_HGSS.png",
						mainPokemon: "gumshoos",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Kiawe",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/2/2a/latest/20090914225140/Calvo_HGSS.png",
						mainPokemon: "marowak-alola",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Mallow",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/9/9a/latest/20110429152417/Chica_Kimono_HGSS.png",
						mainPokemon: "tsareena",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Lana",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20090913214519/Escolar_%28chico%29_HGSS.png",
						mainPokemon: "wishiwashi",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Sophocles",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/5/5e/latest/20090913232124/Monta%C3%B1ero_HGSS.png",
						mainPokemon: "togedemaru",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Acerola",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/f/f7/latest/20090913233502/Pok%C3%A9fan_%28mujer%29_HGSS.png",
						mainPokemon: "palossand",
						totalPokemon: 4,
						score: 400,
					},
				],
				galar: [
					{
						id: 1,
						name: "Victor",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/8/83/latest/20100418182636/Motorista_HGSS.png",
						mainPokemon: "cinderace",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Gloria",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/a/a6/latest/20090913232518/Pensador_HGSS.png",
						mainPokemon: "zacian",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Hop",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/f/f0/latest/20090913234221/Pok%C3%A9man%C3%ADaco_HGSS.png",
						mainPokemon: "dubwool",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Marnie",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/7/77/latest/20090913220211/Gemelas_HGSS.png",
						mainPokemon: "morpeko",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Bede",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/4/41/latest/20090913213240/Cazabichos_HGSS.png",
						mainPokemon: "hatterene",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Nessa",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/4/43/latest/20090914153645/Supernecio_HGSS.png",
						mainPokemon: "drednaw",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Milo",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/f/fe/latest/20091104003410/Entrenador_guay_HGSS.png",
						mainPokemon: "eldegoss",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Kabu",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/9/99/latest/20090913225925/Malabarista_HGSS.png",
						mainPokemon: "centiskorch",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Bea",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/d/d0/latest/20090913205621/Nadador_HGSS.png",
						mainPokemon: "machamp",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Raihan",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/2/2f/latest/20100930194934/Artista_NB.png",
						mainPokemon: "duraludon",
						totalPokemon: 4,
						score: 400,
					},
				],
				paldea: [
					{
						id: 1,
						name: "Florian",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/a/af/latest/20080814184628/Pok%C3%A9guarda_%28mujer%29_RZE.png",
						mainPokemon: "skeledirge",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Juliana",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/f/fa/latest/20080814183452/Marinero_RZE.png",
						mainPokemon: "meowscarada",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Nemona",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/a/ad/latest/20080814183654/Playera_RZE.png",
						mainPokemon: "pawmi",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Arven",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/5/5b/latest/20080814184100/Playero_RZE.png",
						mainPokemon: "mabosstiff",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Penny",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/7/7c/latest/20080814183929/Ruinaman%C3%ADaco_RZE.png",
						mainPokemon: "sylveon",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Katy",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/7/76/latest/20080818020337/Pareja_mayor_RZE.png",
						mainPokemon: "lokix",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Brassius",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/e/ef/latest/20080814184941/Periodistas_RZE.png",
						mainPokemon: "arboliva",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Iono",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/3/3f/latest/20080814184620/Pok%C3%A9guarda_%28hombre%29_RZE.png",
						mainPokemon: "bellibolt",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Grusha",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/a/a8/latest/20080814183532/Guitarrista_RZE.png",
						mainPokemon: "cetitan",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Geeta",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/9/97/latest/20080502041434/Bella_RFVH.png",
						mainPokemon: "glimmora",
						totalPokemon: 4,
						score: 400,
					},
				],
				hisui: [
					{
						id: 1,
						name: "Akari",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/e/ea/latest/20110403011310/Cazabichos_RFVH.png",
						mainPokemon: "decidueye-hisui",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Rei",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/9/93/latest/20080814130029/Criadora_RFVH.png",
						mainPokemon: "typhlosion-hisui",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Irida",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/b/b0/latest/20110403010516/Entrenador_guay_RFVH.png",
						mainPokemon: "glaceon",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Adaman",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/b/b4/latest/20110403011252/Monta%C3%B1ero_RFVH.png",
						mainPokemon: "leafeon",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Lian",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/7/75/latest/20110403010020/Gemelas_RFVH.png",
						mainPokemon: "kleavor",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Arezu",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/5/5f/latest/20110403002226/Se%C3%B1orita_aroma_RFVH.png",
						mainPokemon: "ursaluna",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Melli",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/a/ad/latest/20070104172218/Supernecio_RFVH.png",
						mainPokemon: "skuntank",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Gaeric",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/a/a0/latest/20080818083556/D%C3%BAo_fuerte_RFVH.png",
						mainPokemon: "glalie",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Ingo",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/5/58/latest/20110403010854/Playera_RFVH.png",
						mainPokemon: "chandelure",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Cogita",
						image:
							"https://images.wikidexcdn.net/mwuploads/wikidex/5/5e/latest/20110403011301/Dominguera_RFVH.png",
						mainPokemon: "sneasler",
						totalPokemon: 4,
						score: 400,
					},
				],

				// Agrega aquí los entrenadores para más regiones...
			};

			setTrainersData(trainersByRegion[selectedRegion.name]);
		}
	}, [selectedRegion]);

	const handleRegionChange = (event) => {
		const selected = regions.find(
			(region) => region.name === event.target.value
		);
		setSelectedRegion(selected);
	};

	return (
		<div className="container mx-auto mt-10">
			<h2 className="text-3xl font-bold text-center text-white mb-8">
				Top Trainers by Region
			</h2>

			<div className="mb-8 text-center">
				<label htmlFor="region-select" className="mr-4 text-lg text-white">
					Select a Region:
				</label>
				<select
					id="region-select"
					onChange={handleRegionChange}
					className="px-4 py-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
					<option value="">-- Select a Region --</option>
					{regions.map((region) => (
						<option key={region.name} value={region.name}>
							{region.name}
						</option>
					))}
				</select>
			</div>

			{selectedRegion && (
				<div className="overflow-x-auto">
					<table className="min-w-full table-auto text-white rounded-lg">
						<thead>
							<tr className="bg-blue-700">
								<th className="px-4 py-2 border-r border-gray-300">ID</th>
								<th className="px-4 py-2 border-r border-gray-300">Image</th>
								<th className="px-4 py-2 border-r border-gray-300">Trainer</th>
								<th className="px-4 py-2 border-r border-gray-300">Pokemon</th>
								<th className="px-4 py-2 border-r border-gray-300">
									Total Pokemon
								</th>
								<th className="px-4 py-2">Score</th>
							</tr>
						</thead>
						<tbody className="bg-blue-600">
							{trainersData.map((trainer, index) => (
								<TrainerRow key={index} trainer={trainer} />
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}

export default Trainers;
