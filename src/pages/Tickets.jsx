import React, { useState } from "react";
import TicketCard from "../components/TicketCard";
import Cart from "../components/Cart";
import ticketsData from "../data/ticketsData"; // Importar el archivo correctamente

function Tickets() {
	const [cart, setCart] = useState([]);

	const addToCart = (ticket) => {
		setCart([...cart, ticket]);
	};

	return (
		<div className="container mx-auto mt-10">
			<h2 className="text-3xl font-bold text-center mb-8">
				Select Your Tickets
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{ticketsData.map((ticket) => (
					<TicketCard key={ticket.id} ticket={ticket} addToCart={addToCart} />
				))}
			</div>
			<Cart cart={cart} />
		</div>
	);
}

export default Tickets;
