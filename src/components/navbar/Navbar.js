import React from 'react';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

function Navbar() {
	return (
		<nav className="flex justify-between py-4 font-light mx-10">
			<h1 className="text-base">Prashant Indurkar</h1>
			<Navigation />
			<MobileNavigation />
		</nav>
	);
}

export default Navbar;
