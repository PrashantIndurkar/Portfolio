import React from 'react';

function Navigation() {
	return (
		<nav className="flex justify-between py-4 font-light mx-10">
			<h1 className="text-base">Prashant Indurkar</h1>
			<ul className="hidden md:flex gap-4">
				<li>About</li>
				<li>Project</li>
				<li>Contact</li>
				<i></i>
			</ul>
			<div className="md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</div>
		</nav>
	);
}

export default Navigation;
