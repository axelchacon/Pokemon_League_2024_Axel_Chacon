import React from "react";

function Cart({ cart }) {
	const total = cart.reduce((acc, ticket) => acc + ticket.price, 0);

	return (
		<div className="mt-10 p-4 bg-gray-100 rounded shadow">
			<h3 className="text-xl font-bold">Shopping Cart</h3>
			{cart.length === 0 ? (
				<p>Your cart is empty</p>
			) : (
				<div>
					<ul>
						{cart.map((item, index) => (
							<li key={index} className="border-b py-2">
								{item.type} - ${item.price}
							</li>
						))}
					</ul>
					<p className="mt-4 text-lg font-bold">Total: ${total}</p>
				</div>
			)}
		</div>
	);
}

export default Cart;
