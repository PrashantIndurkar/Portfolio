import React from 'react';

import hashnodeClone from '../img/hashnodeClone.png';
import twitterClone from '../img/twitterClone.png';
import linkedinClone from '../img/linkedinClone.png';
import github from '../img/icons8-github-128.svg';

import Project from './Project';

function ProjectSection() {
	const twitterCloneLink = 'https://github.com/PrashantIndurkar/twitter-clone';
	const linkedinCloneLink = 'https://linkedin.com';
	const hashnodeCloneLink = 'https://hashnode.com';

	return (
		<div className="bg-neutral -mt-5 rounded-tl-3xl text-center">
			<h1 className="mx-10 pt-12 text-3xl font-black text-center text-primary tracking-wide">
				Selected Projects
			</h1>
			<Project
				name={'Twitter Clone'}
				img={twitterClone}
				icon={github}
				twitterCloneLink={twitterCloneLink}
				stackOne={'Next.js'}
				stackTwo={'TailwindCss'}
				stackThree={'Recoil'}
				stackFour={'Firebase'}
			/>
			<Project
				name={'Linkedin Clone'}
				img={linkedinClone}
				icon={github}
				linkedinCloneLink={linkedinCloneLink}
				stackOne={'Next.js'}
				stackTwo={'TailwindCss'}
				stackThree={'Redux'}
				stackFour={'Mongodb'}
			/>
			<Project
				name={'HashNode Clone'}
				img={hashnodeClone}
				icon={github}
				hashnodeCloneLink={hashnodeCloneLink}
				stackOne={'Next.js'}
				stackTwo={'TailwindCss'}
				stackThree={'Redux'}
				stackFour={'firebase'}
			/>
			<div className="mb-10">
				<a
					href="#_"
					class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden  font-medium tracking-wider text-white bg-gray-800 group"
				>
					<span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-lightBlue rounded-full group-hover:w-56 group-hover:h-56"></span>
					<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
					<span class="relative">See More...</span>
				</a>
			</div>
		</div>
	);
}

export default ProjectSection;
