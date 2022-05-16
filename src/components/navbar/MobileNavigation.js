import React, { useState } from 'react';
import Navlinks from './Navlinks';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/outline';

const MobileNavigation = () => {
	const [navOpen, setNavOpen] = useState(false);

	// buttons
	const hamburgerIcon = (
		<MenuAlt2Icon
			className="text-secondary h-6 w-6 cursor-pointer"
			onClick={() => setNavOpen(!navOpen)}
		/>
	);
	const closeIcon = (
		<XIcon
			className="text-secondary h-6 w-6 cursor-pointer"
			onClick={() => setNavOpen(!navOpen)}
		/>
	);

	return (
		<>
			<nav className="md:hidden">
				{navOpen ? closeIcon : hamburgerIcon}
				{navOpen && (
					<Navlinks
						mobileStyles={
							'flex flex-col absolute mt-4 left-0 gap-y-5 bg-secondary text-white rounded-md w-full h-full p-6 font-bold overflow-hidden'
						}
					/>
				)}
			</nav>
		</>
	);
};

export default MobileNavigation;
