import React from 'react';
import HtmlLogo from '../img/icons/icons8-html-5.svg';
import cssLogo from '../img/icons/css.svg';
import jsLogo from '../img/icons/javascript.svg';
import tsLogo from '../img/icons/typescript.svg';
import reactLogo from '../img/icons/react.svg';
import reduxLogo from '../img/icons/redux.svg';
import nextLogo from '../img/icons/nextjs.svg';
import nodeJsLogo from '../img/icons/nodejs-icon.svg';
// importing Design and Development icons
import figmaIcon from '../img/icons/figma-1.svg';
import sassIcon from '../img/icons/sass-1.svg';
import tailwindCssIcon from '../img/icons/tailwind-css-2.svg';
import vsCodeIcon from '../img/icons/vsCode.svg';
import gitIcon from '../img/icons/git-icon.svg';
import mongoDbIcon from '../img/icons/mongodb-icon-1.svg';
import firebaseIcon from '../img/icons/firebase-1.svg';

const Skills = () => {
	return (
		<div
			id="skill"
			className="pb-6 rounded-tl-3xl overflow-x-hidden mb-10 mx-10"
		>
			<div className="">
				<h1 className="font-black text-center text-3xl text-primary pt-12 tracking-wide">
					Skills
				</h1>
				{/* ROW 1 */}
				<div className="mt-12">
					<h1 className="font-bold tracking-wide">Development</h1>
					<div className="grid grid-cols-[repeat(3,auto)] justify-between gap-y-8 mt-6">
						<div className="skill__container">
							<img className="h-10 w-10" src={HtmlLogo} alt="" />
							<h1 className="hidden sm:inline">Html</h1>
						</div>
						<div className="skill__container">
							<img className="h-10 w-10" src={cssLogo} alt="" />
							<h1 className="hidden sm:inline">Css</h1>
						</div>
						<div className="skill__container">
							<img className="h-10 w-10" src={jsLogo} alt="" />
							<h1 className="hidden sm:inline">JavaScript</h1>
						</div>
						{/* ROW 2 */}
						<div className="skill__container">
							<img className="h-10 w-10" src={tsLogo} alt="" />
							<h1 className="hidden sm:inline">TypeScript</h1>
						</div>
						<div className="skill__container">
							<img className="h-10 w-10" src={reactLogo} alt="" />
							<h1 className="hidden sm:inline">React</h1>
						</div>
						<div className="skill__container">
							<img className="h-10 w-10" src={reduxLogo} alt="" />
							<h1 className="hidden sm:inline">Redux</h1>
						</div>
						{/* 3rd Row */}
						<div className="skill__container">
							<img className="h-10 w-10" src={nextLogo} alt="" />
							<h1 className="hidden sm:inline">Next.js</h1>
						</div>
						<div className="skill__container">
							<img className="h-10 w-10" src={nodeJsLogo} alt="" />
							<h1 className="hidden sm:inline">Node.js</h1>
						</div>
					</div>
				</div>
				{/* Development */}
				<h1 className="mt-12 font-bold tracking-wide">Others</h1>
				{/* ROW 1 */}
				<div className="grid grid-cols-[repeat(3,auto)] justify-between gap-y-8 mt-6">
					<div className="skill__container">
						<img className="h-10 w-10" src={figmaIcon} alt="" />
						<h1 className="hidden sm:inline">Figma</h1>
					</div>
					<div className="skill__container">
						<img className="h-10 w-10" src={mongoDbIcon} alt="" />
						<h1 className="hidden sm:inline">MongoDB</h1>
					</div>
					<div className="skill__container">
						<img className="h-10 w-10" src={sassIcon} alt="" />
						<h1 className="hidden sm:inline">Sass</h1>
					</div>
					{/* ROW 2 */}
					<div className="skill__container">
						<img className="h-10 w-10" src={tailwindCssIcon} alt="" />
						<h1 className="hidden sm:inline">TailwindCss</h1>
					</div>
					<div className="skill__container">
						<img className="h-10 w-10" src={firebaseIcon} alt="" />
						<h1 className="hidden sm:inline">Firebase</h1>
					</div>
					<div className="skill__container">
						<img className="h-10 w-10" src={vsCodeIcon} alt="" />
						<h1 className="hidden sm:inline">VsCode</h1>
					</div>
					{/* 3rd Row */}
					<div className="skill__container">
						<img className="h-10 w-10" src={gitIcon} alt="" />
						<h1 className="hidden sm:inline">Git</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
