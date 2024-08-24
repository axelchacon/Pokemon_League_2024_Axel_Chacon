import React, { useState } from "react";
import Cart from "../components/Cart";

const ticketsData = [
	{ id: 1, price: 50, name: "VIP Ticket", description: "Access to all areas" },
	{
		id: 2,
		price: 150,
		name: "Premium Ticket",
		description: "Access to premium areas and goodies",
	},
	{
		id: 3,
		price: 200,
		name: "Elite Ticket",
		description: "Access to VIP and Premium areas",
	},
];

function Tickets() {
	const [cart, setCart] = useState([]);

	const addToCart = (ticket) => {
		setCart([...cart, ticket]);
	};

	const removeFromCart = (index) => {
		const newCart = [...cart];
		newCart.splice(index, 1);
		setCart(newCart);
	};

	return (
		<div className="container mx-auto mt-10">
			<h2 className="text-3xl font-bold text-center text-white mb-8">
				Select Your Tickets
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{ticketsData.map((ticket) => (
					<div
						key={ticket.id}
						className="border p-6 rounded-lg shadow-lg bg-gradient-to-r from-yellow-400 to-red-500 text-center transform transition-transform duration-300 hover:scale-105">
						<h3 className="text-xl font-bold mb-4 text-white">{ticket.name}</h3>
						<p className="text-lg font-semibold mb-4 text-white">
							${ticket.price}
						</p>
						<p className="text-sm mb-6 text-white">{ticket.description}</p>
						<button
							className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
							onClick={() => addToCart(ticket)}>
							Add to Cart
						</button>
					</div>
				))}
			</div>
			<Cart cart={cart} removeFromCart={removeFromCart} />
		</div>
	);
}

export default Tickets;
