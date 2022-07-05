import React from 'react';

import HashDevClone from '../img/projectThumbnail/HashnodeNew.png';
import twitterClone from '../img/projectThumbnail/TwitterClone.png';
import Slickers from '../img/projectThumbnail/Slickers.png';
import Taskit from '../img/projectThumbnail/Taskit.png';
import github from '../img/icons8-github-128.svg';

import Project from './Project';

function ProjectSection() {
	const twitterCloneLink = 'https://github.com/PrashantIndurkar/twitter-clone';
	const SlickersLink = 'https://Slickers.comm';
	const hashnodeCloneLink = 'https://hashnode.com';
	const taskitLink = 'https://hashnode.com';

	const twitterDiscription =
		"In this project I build twitter. it's completely responsive. I have used recoil state management with firebase v9 and firebase Storage. For emoji used the emoji picker package to add emojis functionality.And for Authantication used NextAuth Beta version.";
	const taskitDiscription =
		'This project is LinkedIn Clone. Next.js Authantication. Also it has emoji selected using package. Next.js is used for front end and database is firebase and recoil is for state management';
	const hashnodeDiscription =
		'This project is Twitter Clone. Next.js Authantication. Also it has emoji selected using package. Next.js is used for front end and database is firebase and recoil is for state management';
	const slickersDiscription =
		'This project is Twitter Clone. Next.js Authantication. Also it has emoji selected using package. Next.js is used for front end and database is firebase and recoil is for state management';

	return (
		<div className="bg-white bg-[#f7f4f4] mx-6 rounded-xl mt-8 md:mt-12 text-center pb-4 md:pb-8 ">
			<div className="md:mx-32">
				<h1 className="mx-10 md:mb-16 pt-12 text-3xl md:text-5xl font-bold text-center text-indigo-500 tracking-wide">
					Projects
				</h1>
				<Project
					name={'Social Media Clone'}
					img={twitterClone}
					icon={github}
					liveLink={twitterCloneLink}
					stackOne={'Next.js'}
					stackTwo={'TailwindCss'}
					stackThree={'Recoil'}
					stackFour={'Firebase'}
					projectDiscription={twitterDiscription}
				/>
				<Project
					name={'HashDev Blogs'}
					img={HashDevClone}
					icon={github}
					liveLink={hashnodeCloneLink}
					stackOne={'Next.js'}
					stackTwo={'TailwindCss'}
					stackThree={'Redux'}
					stackFour={'firebase'}
					rightSideImage={'rightSideImage'}
					projectDiscription={hashnodeDiscription}
				/>
				<Project
					name={'Ecommers Slickers'}
					img={Slickers}
					icon={github}
					liveLink={Slickers}
					stackOne={'Next.js'}
					stackTwo={'TailwindCss'}
					stackThree={'Redux'}
					stackFour={'Mongodb'}
					projectDiscription={slickersDiscription}
				/>

				<Project
					name={'Task Organizer Taskit.'}
					img={Taskit}
					icon={github}
					liveLink={taskitLink}
					stackOne={'Next.js'}
					stackTwo={'TailwindCss'}
					stackThree={'Redux'}
					stackFour={'Mongodb'}
					rightSideImage={'rightSideImage'}
					projectDiscription={taskitDiscription}
				/>
				<div className="mb-12">
					<a
						href="#_"
						class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden  font-medium tracking-wider text-white bg-gray-800 group"
					>
						<span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
						<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
						<span class="relative">See More...</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectSection;
