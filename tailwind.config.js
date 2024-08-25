/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				primary: {
					light: "#b2fab4", // Verde claro
					DEFAULT: "#00c853", // Verde medio
					dark: "#004d40", // Verde oscuro
				},
				background: {
					light: "#b2fab4", // Fondo verde claro
					dark: "#004d40", // Fondo verde oscuro
				},
				accent: "#00c853", // Color de acento
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
