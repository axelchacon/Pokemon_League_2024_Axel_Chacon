import React from "react";

function TicketCard({ ticket, addToCart }) {
	return (
		<div className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
			<h3 className="text-2xl font-bold mb-4 text-center text-white">{`$${ticket.price}`}</h3>
			<button
				onClick={() => addToCart(ticket)}
				className="bg-blue-600 text-white px-4 py-2 rounded-md w-full font-bold hover:bg-blue-700 transition-colors duration-300">
				Add to Cart
			</button>
		</div>
	);
}

export default TicketCard;
