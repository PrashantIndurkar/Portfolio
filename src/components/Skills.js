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
import github from '../img/icons/github.svg';
import mongoDbIcon from '../img/icons/mongodb-icon-1.svg';
import firebaseIcon from '../img/icons/firebase-1.svg';

const Skills = () => {
	return (
		<div
			id="skill"
			className="pb-6 mx-6 rounded-xl  md:mt-12 mb-10 bg-[#f8f8fe]"
		>
			{/* Container */}
			<div className="mx-10 md:mx-20 xl:mx-80 ">
				<h1 className="text-center font-bold text-3xl md:text-4xl text-indigo-500 pt-12 tracking-wide ">
					Technologies
				</h1>

				{/* Development*/}
				<div className="mt-10 bg">
					{/* Title */}
					<h1 className="font-bold text-[#333333] tracking-widest text-lg ">
						Development
					</h1>

					<div className="mt-6 grid grid-cols-3 md:grid-cols-4 justify-items-center gap-y-6 font-semibold sm:gap-x-4">
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/HTML"
							className="skill__container"
						>
							<img className="h-10 w-10" src={HtmlLogo} alt="" />
							<h1 className=" hidden sm:flex">HTML</h1>
						</a>
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/CSS"
							className="skill__container"
						>
							<img className="h-10 w-10" src={cssLogo} alt="" />
							<h1 className="hidden sm:flex">CSS</h1>
						</a>
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
							className="skill__container"
						>
							<img className="h-10 w-10" src={jsLogo} alt="" />
							<h1 className="hidden">JavaScript</h1>
						</a>
						<a
							href="https://www.typescriptlang.org/"
							className="skill__container"
						>
							<img className="h-10 w-10 " src={tsLogo} alt="" />
							<h1 className="hidden  ">TypeScript</h1>
						</a>
						<a href="https://reactjs.org/" className="skill__container">
							<img className="h-10 w-10" src={reactLogo} alt="" />
							<h1 className="ml-1 hidden sm:flex">React</h1>
						</a>
						<a href="https://redux.js.org/" className="skill__container">
							<img className="h-10 w-10" src={reduxLogo} alt="" />
							<h1 className="ml-1 hidden sm:flex">Redux</h1>
						</a>
						<a href="https://nextjs.org/" className="skill__container">
							<img
								className="h-10 sm:h-14 sm:w-14 w-10"
								src={nextLogo}
								alt=""
							/>
						</a>
						<a href="https://nodejs.org/" className="skill__container">
							<img className="h-10 w-10" src={nodeJsLogo} alt="" />
							<h1 className="ml-1 hidden sm:flex">Node.js</h1>
						</a>
					</div>
				</div>

				{/* Others */}
				<h1 className="mt-12 font-bold text-[#333333] tracking-widest text-lg">
					Others
				</h1>
				{/* ROW 1  className="grid grid-cols-[repeat(3,auto)] justify-between gap-y-8 mt-6"*/}
				<div
					className="mt-6 grid grid-cols-3 md:grid-cols-4
				justify-items-center gap-y-6 font-semibold"
				>
					<a href="https://www.figma.com/" className="skill__container">
						<img className="h-10 w-10" src={figmaIcon} alt="" />
						<h1 className="hidden sm:flex">Figma</h1>
					</a>
					<a href="https://www.mongodb.com/" className="skill__container">
						<img className="h-10 w-10" src={mongoDbIcon} alt="" />
						<h1 className="hidden sm:flex -ml-2">MongoDb</h1>
					</a>
					<a href="https://sass-lang.com/" className="skill__container">
						<img className="h-10 w-10" src={sassIcon} alt="" />
						<h1 className="hidden sm:flex ml-1">Sass</h1>
					</a>
					<a href="https://tailwindcss.com/" className="skill__container">
						<img className="h-10 w-10" src={tailwindCssIcon} alt="" />
						<h1 className="hidden sm:flex ml-1">Tailwind</h1>
					</a>
					<a href="https://firebase.google.com/" className="skill__container">
						<img className="h-10 w-10" src={firebaseIcon} alt="" />
						<h1 className="hidden sm:flex">Firebase</h1>
					</a>
					<a href="https://code.visualstudio.com/" className="skill__container">
						<img className="h-10 w-10" src={vsCodeIcon} alt="" />
						<h1 className="hidden sm:flex ml-1">VsCode</h1>
					</a>
					{/* 3rd Row */}
					<a href="https://git-scm.com/" className="skill__container">
						<img className="h-10 w-10 " src={gitIcon} alt="" />
						<h1 className="hidden sm:flex ml-1">Git</h1>
					</a>
					<a href="https://github.com/" className="skill__container">
						<img className="h-10 w-10 " src={github} alt="" />
						<h1 className="hidden sm:flex ml-1">GitHub</h1>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Skills;
