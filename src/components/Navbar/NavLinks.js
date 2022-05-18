import React from 'react';
import { Link } from 'react-scroll/modules';

const NavLinks = () => {
	return (
		<ul className="space-y-4 ">
			<li className="">
				<Link
					to="project"
					smooth="true"
					duration={1000}
					className="cursor-pointer hover:text-primary font-light transition duration-200 underline underline-offset-4 decoration-dotted"
				>
					Projects
				</Link>
			</li>

			<li>
				<Link
					smooth="true"
					duration={1000}
					className="cursor-pointer hover:text-primary font-light transition duration-200 underline underline-offset-4 decoration-dotted"
					to="about"
				>
					About
				</Link>
			</li>
			<li>
				<Link
					smooth="true"
					duration={1000}
					className="cursor-pointer hover:text-primary font-light transition duration-200 underline underline-offset-4 decoration-dotted"
					to="skill"
				>
					Skills
				</Link>
			</li>
			<li>
				<Link
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
					smooth="true"
					duration={1000}
					className="cursor-pointer hover:text-primary font-light transition duration-200 underline underline-offset-4 decoration-dotted"
					to="project"
				>
					Articles
				</Link>
			</li>
			<li>
				<Link
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
