import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="bg-green-900 p-4 shadow-lg">
			<ul className="flex justify-around text-green-200">
				<li>
					<Link to="/" className="hover:text-green-400">
						Home
					</Link>
				</li>
				<li>
					<Link to="/tickets" className="hover:text-green-400">
						Tickets
					</Link>
				</li>
				<li>
					<Link to="/trainers" className="hover:text-green-400">
						Top Trainers
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
