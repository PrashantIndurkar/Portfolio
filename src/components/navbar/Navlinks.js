import React from 'react';

const Navlinks = ({ mobileStyles, styles }) => {
	return (
		// className={(mobileStyles, styles)}
		<ul className="flex gap-4 cursor-pointer ">
			<li className="hover:underline hover:underline-offset-4 hover:decoration-dotted transition duration-200">
				About
			</li>
			<li className="transition duration-200 hover:underline underline-offset-4 hover:decoration-dotted hover:text-primary">
				Project
			</li>
			<li className="transition duration-200 hover:underline underline-offset-4 hover:decoration-dotted hover:text-primary">
				Contact
			</li>
			<li className="transition duration-200 hover:underline underline-offset-4 hover:decoration-dotted hover:text-primary">
				Articles
			</li>
			<li className="transition duration-200 hover:underline underline-offset-4 hover:decoration-dotted hover:text-primary">
				Designs
			</li>
			<i></i>
		</ul>
	);
};

export default Navlinks;
