import React, { useState } from 'react';
import { MenuAlt2Icon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/outline';
import MobileNav from './MobileNav';

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);

	const navOpenIcon = (
		<MenuAlt2Icon
			className="h-6 w-6 cursor-pointer"
			onClick={() => setNavOpen(!navOpen)}
		/>
	);
	const navClose = (
		<XIcon
			className="h-6 w-6 cursor-pointer"
			onClick={() => setNavOpen(!navOpen)}
		/>
	);
	return (
		<nav className="px-10 shadow-sm p-3 md:p-4 w-full bg-neutral fixed">
			<div className="flex justify-between">
				<h1 className="font-light">Prashant Indurkar</h1>
				{navOpen ? navClose : navOpenIcon}
			</div>
			<div>{navOpen && <MobileNav />}</div>
		</nav>
	);
};

export default Navbar;
