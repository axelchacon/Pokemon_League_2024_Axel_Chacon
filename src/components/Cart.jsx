import React from "react";

function Cart({ cart, removeFromCart }) {
	const total = cart.reduce((sum, ticket) => sum + ticket.price, 0);

	return (
		<div className="mt-8">
			<h3 className="text-2xl font-bold text-center mb-4 text-white">
				Shopping Cart
			</h3>
			<div className="bg-white rounded-lg shadow-lg p-6">
				{cart.length > 0 ? (
					<ul>
						{cart.map((ticket, index) => (
							<li
								key={index}
								className="flex justify-between items-center py-2">
								<span>{ticket.name}</span>
								<span className="flex items-center">
									<span className="mr-4">-${ticket.price}</span>
									<button
										className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
										onClick={() => removeFromCart(index)}>
										Remove
									</button>
								</span>
							</li>
						))}
						<li className="flex justify-between items-center font-bold mt-4">
							<span>Total:</span>
							<span>${total}</span>
						</li>
					</ul>
				) : (
					<p className="text-center">Your cart is empty</p>
				)}
			</div>
		</div>
	);
}

export default Cart;
