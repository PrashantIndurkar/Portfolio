import React from 'react';

const Project = ({
	name,
	img,
	icon,
	liveLink,
	stackOne,
	stackTwo,
	stackThree,
	stackFour,
	rightSideImage,
	projectDiscription,
}) => {
	return (
		<div id="project" className="mx-10 mt-4 text-center mb-20 md:mx-16 ">
			{/* TITLE NAME*/}
			<h1 className="text-2xl mb-8 md:mb-14 md:text-3xl text-secondary font-semibold text-center tracking-wide mt-8 md:mt-10">
				{name}
			</h1>

			{/* md:screen */}
			<div className="lg:flex gap-8 md:gap-y-4 md:mt-10">
				{/* IMAGE PATH */}
				<div
					className={`shadow-lg md:my-auto lg:w-1/2 ${
						rightSideImage && 'order-2'
					}`}
				>
					<img className="rounded-lg cursor-pointer" src={img} alt={name} />
				</div>
				<div className="md:flex md:flex-col mt-8 lg:mt-0 md lg:w-1/2">
					{/* PROJECT DISCRIPTION PARAGRAPH */}
					<p className="md:my-auto">{projectDiscription}</p>
				</div>
			</div>
			{/* GITHUB & ACTION BUTTONS */}
			<div className="flex justify-center items-center gap-12 mt-16 order-2">
				<a href={liveLink}>
					<button className="ml-2 py-2 px-4 items-center font-medium rounded-md  cursor-pointer focus:outline-none flex bg-secondary border border-secondary text-white justify-center">
						<img className="h-4 sm:h-6" src={icon} alt="" />
						<h1 className="text-sx font-bold ml-1 sm:text-lg">Github</h1>
					</button>
				</a>

				<a href="https://vercel.com">
					<button className="ml-2 py-2 px-4 rounded-md border border-green-600 bg-green-600 cursor-pointer  justify-center items-center focus:outline-none text-white flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 sm:h-6 sm:w-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
								clip-rule="evenodd"
							/>
						</svg>
						<h1 className="text-sm sm:text-lg font-bold ml-1 whitespace-nowrap">
							See Live
						</h1>
					</button>
				</a>
			</div>
		</div>
	);
};

export default Project;
