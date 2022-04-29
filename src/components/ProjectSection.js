import React from 'react';

import hashnodeClone from '../img/hashnodeClone.png';
import twitterClone from '../img/twitterClone.png';
import linkedinClone from '../img/linkedinClone.png';

import Project from './Project';

function ProjectSection() {
	return (
		<div className="bg-neutral -mt-5 rounded-tl-3xl">
			<h1 className="mx-10 pt-6 text-2xl font-bold">Selected Projects</h1>
			<div className="mt-4 text-center">
				<button className="project__button bg-primary">JavaScript</button>
				<button className="project__button bg-primary">Front End</button>
				<button className="project__button bg-primary">Full-Stack</button>
				<button className="project__button bg-primary">TypeScript</button>
			</div>
			<Project name={'Twitter Clone'} img={twitterClone} />
			<Project name={'Linkedin Clone'} img={linkedinClone} />
			<Project name={'HashNode Clone'} img={hashnodeClone} />
		</div>
	);
}

export default ProjectSection;
