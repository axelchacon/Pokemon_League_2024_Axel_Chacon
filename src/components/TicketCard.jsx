import React from "react";

function TicketCard({ ticket, addToCart }) {
	return (
		<div className="border p-4 rounded shadow">
			<h3 className="text-2xl font-bold">{ticket.type}</h3>
			<p className="text-lg">${ticket.price}</p>
			<button
				onClick={() => addToCart(ticket)}
				className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
				Add to Cart
			</button>
		</div>
	);
}

export default TicketCard;
