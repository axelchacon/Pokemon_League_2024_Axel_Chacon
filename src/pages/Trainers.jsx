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
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/nivea.png",
						mainPokemon: "pikachu",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Misty",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/misty.png",
						mainPokemon: "starmie",
						totalPokemon: 4,
						score: 480,
					},
					{
						id: 3,
						name: "Brock",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/brock.png",
						mainPokemon: "onix",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Lt. Surge",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/lt_surge.png",
						mainPokemon: "raichu",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Erika",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/erika.png",
						mainPokemon: "vileplume",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Sabrina",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/sabrina.png",
						mainPokemon: "alakazam",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Koga",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/koga.png",
						mainPokemon: "venomoth",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Blaine",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/blaine.png",
						mainPokemon: "arcanine",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Giovanni",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/giovanni.png",
						mainPokemon: "nidoqueen",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Lorelei",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/lorelei.png",
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
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/ethan.png",
						mainPokemon: "typhlosion",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Kris",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/kris.png",
						mainPokemon: "feraligatr",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Silver",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/silver.png",
						mainPokemon: "sneasel",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Whitney",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/whitney.png",
						mainPokemon: "miltank",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Morty",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/morty.png",
						mainPokemon: "gengar",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Chuck",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/chuck.png",
						mainPokemon: "primeape",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Jasmine",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/jasmine.png",
						mainPokemon: "steelix",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Pryce",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/pryce.png",
						mainPokemon: "piloswine",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Clair",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/clair.png",
						mainPokemon: "kingdra",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Karen",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/karen.png",
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
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/brendan.png",
						mainPokemon: "swampert",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "May",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/may.png",
						mainPokemon: "blaziken",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Roxanne",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/roxanne.png",
						mainPokemon: "nosepass",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Brawly",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/brawly.png",
						mainPokemon: "hariyama",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Wattson",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/wattson.png",
						mainPokemon: "manectric",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Flannery",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/flannery.png",
						mainPokemon: "torkoal",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Norman",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/norman.png",
						mainPokemon: "slaking",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Winona",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/winona.png",
						mainPokemon: "altaria",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Tate & Liza",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/tate_liza.png",
						mainPokemon: "lunatone",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Wallace",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/wallace.png",
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
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/lucas.png",
						mainPokemon: "infernape",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Dawn",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/dawn.png",
						mainPokemon: "empoleon",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Barry",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/barry.png",
						mainPokemon: "staraptor",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Roark",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/roark.png",
						mainPokemon: "rampardos",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Gardenia",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/gardenia.png",
						mainPokemon: "roserade",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Maylene",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/maylene.png",
						mainPokemon: "lucario",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Crasher Wake",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/crasher_wake.png",
						mainPokemon: "floatzel",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Fantina",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/fantina.png",
						mainPokemon: "mismagius",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Byron",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/byron.png",
						mainPokemon: "bastiodon",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Candice",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/candice.png",
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
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/hilbert.png",
						mainPokemon: "emboar",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Hilda",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/hilda.png",
						mainPokemon: "serperior",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Cheren",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/cheren.png",
						mainPokemon: "stoutland",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Bianca",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/bianca.png",
						mainPokemon: "musharna",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Lenora",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/lenora.png",
						mainPokemon: "watchog",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Burgh",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/burgh.png",
						mainPokemon: "leavanny",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Elesa",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/elesa.png",
						mainPokemon: "zebstrika",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Clay",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/clay.png",
						mainPokemon: "excadrill",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Skyla",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/skyla.png",
						mainPokemon: "swanna",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Drayden",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/drayden.png",
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
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/calem.png",
						mainPokemon: "chesnaught",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Serena",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/serena.png",
						mainPokemon: "delphox",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Shauna",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/shauna.png",
						mainPokemon: "goodra",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Tierno",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/tierno.png",
						mainPokemon: "talonflame",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Trevor",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/trevor.png",
						mainPokemon: "aerodactyl",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Viola",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/viola.png",
						mainPokemon: "vivillon",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Grant",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/grant.png",
						mainPokemon: "tyrunt",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Korrina",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/korrina.png",
						mainPokemon: "lucario",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Ramos",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/ramos.png",
						mainPokemon: "gogoat",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Valerie",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/valerie.png",
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
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/elio.png",
						mainPokemon: "decidueye",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Selene",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/selene.png",
						mainPokemon: "primarina",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Hau",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/hau.png",
						mainPokemon: "raichu-alola",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Gladion",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/gladion.png",
						mainPokemon: "silvally",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Ilima",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/ilima.png",
						mainPokemon: "gumshoos",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Kiawe",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/kiawe.png",
						mainPokemon: "marowak-alola",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Mallow",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/mallow.png",
						mainPokemon: "tsareena",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Lana",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/lana.png",
						mainPokemon: "wishiwashi",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Sophocles",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/sophocles.png",
						mainPokemon: "togedemaru",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Acerola",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/acerola.png",
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
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/victor.png",
						mainPokemon: "cinderace",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Gloria",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/gloria.png",
						mainPokemon: "zacian",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Hop",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/hop.png",
						mainPokemon: "dubwool",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Marnie",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/marnie.png",
						mainPokemon: "morpeko",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Bede",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/bede.png",
						mainPokemon: "hatterene",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Nessa",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/nessa.png",
						mainPokemon: "drednaw",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Milo",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/milo.png",
						mainPokemon: "eldegoss",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Kabu",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/kabu.png",
						mainPokemon: "centiskorch",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Bea",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/bea.png",
						mainPokemon: "machamp",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Raihan",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/raihan.png",
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
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/florian.png",
						mainPokemon: "skeledirge",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Juliana",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/juliana.png",
						mainPokemon: "meowscarada",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Nemona",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/nemona.png",
						mainPokemon: "pawmi",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Arven",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/arven.png",
						mainPokemon: "mabosstiff",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Penny",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/penny.png",
						mainPokemon: "sylveon",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Katy",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/katy.png",
						mainPokemon: "lokix",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Brassius",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/brassius.png",
						mainPokemon: "arboliva",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Iono",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/iono.png",
						mainPokemon: "bellibolt",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Grusha",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/grusha.png",
						mainPokemon: "cetitan",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Geeta",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/geeta.png",
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
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/akari.png",
						mainPokemon: "decidueye-hisui",
						totalPokemon: 5,
						score: 500,
					},
					{
						id: 2,
						name: "Rei",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/rei.png",
						mainPokemon: "typhlosion-hisui",
						totalPokemon: 5,
						score: 480,
					},
					{
						id: 3,
						name: "Irida",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/irida.png",
						mainPokemon: "glaceon",
						totalPokemon: 4,
						score: 470,
					},
					{
						id: 4,
						name: "Adaman",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/adaman.png",
						mainPokemon: "leafeon",
						totalPokemon: 4,
						score: 460,
					},
					{
						id: 5,
						name: "Lian",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/lian.png",
						mainPokemon: "kleavor",
						totalPokemon: 4,
						score: 450,
					},
					{
						id: 6,
						name: "Arezu",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/arezu.png",
						mainPokemon: "ursaluna",
						totalPokemon: 4,
						score: 440,
					},
					{
						id: 7,
						name: "Melli",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/melli.png",
						mainPokemon: "skuntank",
						totalPokemon: 4,
						score: 430,
					},
					{
						id: 8,
						name: "Gaeric",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/gaeric.png",
						mainPokemon: "glalie",
						totalPokemon: 4,
						score: 420,
					},
					{
						id: 9,
						name: "Ingo",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/ingo.png",
						mainPokemon: "chandelure",
						totalPokemon: 4,
						score: 410,
					},
					{
						id: 10,
						name: "Cogita",
						image:
							"https://www.pokexperto.net/pokemonmasters/arte/entrenadores/cogita.png",
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
							<tr>
								<th className="px-4 py-2">ID</th>
								<th className="px-4 py-2">Image</th>
								<th className="px-4 py-2">Trainer</th>
								<th className="px-4 py-2">Pokemon</th>
								<th className="px-4 py-2">Total Pokemon</th>
								<th className="px-4 py-2">Score</th>
							</tr>
						</thead>
						<tbody>
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
