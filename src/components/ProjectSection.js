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
			<h1 className="mx-10 pt-12 text-3xl font-black text-center text-primary">
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
			<div className="mb-5">
				<a href="#_" class="relative inline-block px-4 py-2 font-medium group">
					<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#444445] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
					<span class="absolute inset-0 w-full h-full bg-white border-2 border-[#292929] group-hover:bg-[#292929]"></span>
					<span class="relative text-[#292929] group-hover:text-white">
						See More
					</span>
				</a>
			</div>
		</div>
	);
}

export default ProjectSection;
