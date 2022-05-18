import React from 'react';
import { Link } from 'react-scroll/modules';

const NavLinks = ({ isMobile, closeMobileMenu }) => {
	return (
		<ul className="space-y-4 pt-4">
			<li>
				<Link
					onClick={() => isMobile && closeMobileMenu()}
					to="project"
					smooth="true"
					duration={1000}
					className="cursor-pointer hover:text-primary font-light transition duration-200 underline underline-offset-4 decoration-dotted"
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
					className="cursor-pointer hover:text-primary font-light transition duration-200 underline underline-offset-4 decoration-dotted"
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
					className="cursor-pointer hover:text-primary font-light transition duration-200 underline underline-offset-4 decoration-dotted"
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
					className="cursor-pointer hover:text-primary font-light transition duration-200 underline underline-offset-4 decoration-dotted"
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
					className="cursor-pointer hover:text-primary font-light transition duration-200 underline underline-offset-4 decoration-dotted"
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
					className="cursor-pointer hover:text-primary font-light transition duration-200 underline underline-offset-4 decoration-dotted"
					to="project"
				>
					Designs
				</Link>
			</li>
		</ul>
	);
};

export default NavLinks;
