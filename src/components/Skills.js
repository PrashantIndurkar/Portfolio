import React from 'react';
import HtmlLogo from '../img/icons/icons8-html-5.svg';
import cssLogo from '../img/icons/css.svg';
import jsLogo from '../img/icons/javascript.svg';
import tsLogo from '../img/icons/typescript.svg';
import reactLogo from '../img/icons/react.svg';
import reduxLogo from '../img/icons/redux.svg';
import nextLogo from '../img/icons/nextjs.svg';
import graphQlLogo from '../img/icons/graphql.svg';
import nodeJsLogo from '../img/icons/nodejs-icon.svg';

const Skills = () => {
	return (
		<div className="pb-6 rounded-tl-3xl">
			<h1 className="font-black text-center text-3xl text-primary pt-12">
				Skills
			</h1>
			{/* ROW 1 */}
			<div className="grid grid-cols-[repeat(3,auto)] space-x-4 mx-10 gap-x-4 gap-y-10 mt-6">
				<div className="skill__container flex items-center flex-col ">
					<img className="h-10 w-10" src={HtmlLogo} alt="" />
					<h1>Html</h1>
				</div>
				<div className="skill__container flex items-center flex-col ">
					<img className="h-10 w-10" src={cssLogo} alt="" />
					<h1>Css</h1>
				</div>
				<div className="skill__container flex items-center flex-col ">
					<img className="h-10 w-10" src={jsLogo} alt="" />
					<h1>JavaScript</h1>
				</div>
				{/* ROW 2 */}
				<div className="skill__container flex items-center flex-col ">
					<img className="h-10 w-10" src={tsLogo} alt="" />
					<h1>TypeScript</h1>
				</div>
				<div className="skill__container flex items-center flex-col ">
					<img className="h-10 w-10" src={reactLogo} alt="" />
					<h1>React</h1>
				</div>
				<div className="skill__container flex items-center flex-col ">
					<img className="h-10 w-10" src={reduxLogo} alt="" />
					<h1>Redux</h1>
				</div>
				{/* 3rd Row */}
				<div className="skill__container flex items-center flex-col ">
					<img className="h-10 w-10" src={nextLogo} alt="" />
					<h1>Next.js</h1>
				</div>
				<div className="skill__container flex items-center flex-col ">
					<img className="h-10 w-10" src={nodeJsLogo} alt="" />
					<h1>Node.js</h1>
				</div>
			</div>
		</div>
	);
};

export default Skills;
