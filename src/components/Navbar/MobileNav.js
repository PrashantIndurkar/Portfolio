import React from 'react';
import { Link } from 'react-scroll/modules';

const NavLinks = ({ isMobile, closeMobileMenu }) => {
	return (
		<ul className="space-y-4 pt-4 absolute ">
			<li>
				<Link
					onClick={() => isMobile && closeMobileMenu()}
					to="project"
					smooth="true"
					duration={1000}
					className="cursor-pointer hover:text-indigo-500  font-light"
					offset={-150}
					spy={true}
				>
					Projects
				</Link>
			</li>

			<li>
				<Link
					onClick={() => isMobile && closeMobileMenu()}
					smooth="true"
					offset={-50}
					duration={1000}
					className="cursor-pointer transition duration-200 hover:text-indigo-500 font-light"
					to="about"
				>
					About
				</Link>
			</li>
			<li>
				<Link
					onClick={() => isMobile && closeMobileMenu()}
					smooth="true"
					duration={1000}
					offset={-50}
					className="cursor-pointer transition duration-200 hover:text-indigo-500 font-light"
					to="skill"
				>
					Skills
				</Link>
			</li>
			<li>
				<Link
					onClick={() => isMobile && closeMobileMenu()}
					smooth="true"
					duration={1000}
					className="cursor-pointer transition duration-200 hover:text-indigo-500 font-light"
					to="contact"
				>
					Contact
				</Link>
			</li>
			<li>
				<Link
					onClick={() => isMobile && closeMobileMenu()}
					smooth="true"
					duration={1000}
					offset={-50}
					className="cursor-pointer transition duration-200 hover:text-indigo-500 font-light"
					to="project"
				>
					Articles
				</Link>
			</li>
			<li>
				<Link
					onClick={() => isMobile && closeMobileMenu()}
					smooth="true"
					duration={1000}
					className="cursor-pointer transition duration-200 hover:text-indigo-500 font-light"
					to="project"
				>
					Designs
				</Link>
			</li>
		</ul>
	);
};

export default NavLinks;
