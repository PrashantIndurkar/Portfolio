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
		<div className="bg-neutral -mt-5 rounded-tl-3xl">
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
		</div>
	);
}

export default ProjectSection;
