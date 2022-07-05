import React, { useState } from 'react';
import { MenuAlt2Icon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/outline';
import MobileNav from './MobileNav';
import { Link } from 'react-scroll/modules';

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
	const closeMobileMenu = () => setNavOpen(false);

	return (
		<nav className="px-10 shadow-md p-4 md:p-4 w-full bg-neutral fixed mb-5 z-50 text-center">
			<div className="flex justify-between">
				<h1 className="font-light">
					<Link
						smooth="true"
						duration={1000}
						className="cursor-pointer font-light transition duration-150 ease-linear"
						to="header"
					>
						Prashant Indurkar
					</Link>
				</h1>
				<div className="md:hidden">{navOpen ? navClose : navOpenIcon}</div>
				<div></div>
			</div>
			<div className="relative">
				{navOpen && (
					<MobileNav isMobile={true} closeMobileMenu={closeMobileMenu} />
				)}
			</div>
		</nav>
	);
};

export default Navbar;
