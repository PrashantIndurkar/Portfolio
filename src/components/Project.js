import React from 'react';

const Project = ({
	name,
	img,
	icon,
	twitterCloneLink,
	stackOne,
	stackTwo,
	stackThree,
	stackFour,
}) => {
	return (
		<div className="mx-10 mt-4 text-center mb-12">
			<h1 className="text-2xl font-bold text-center tracking-wide">{name}</h1>
			<div className="mx-auto mt-5 shadow-xl">
				<img className="rounded-xl cursor-pointer" src={img} alt="" />
			</div>

			<div className="flex justify-center items-center gap-10 mt-6">
				<a href={twitterCloneLink}>
					<button className="action__button">
						<img className="h-6" src={icon} alt="" />
						<h1 className="font-bold ml-1">Github</h1>
					</button>
				</a>

				<a href="https://vercel.com">
					<button className="action__button">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
								clip-rule="evenodd"
							/>
						</svg>
						<h1 className="font-bold ml-1">In Action</h1>
					</button>
				</a>
			</div>
			<p className="mt-6 ">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
				voluptate earum nostrum quibusdam possimus quo omnis minus eius cum
				beatae expedita perferendis quae consequatur suscipit enim eligendi
				placeat. Sit, incidunt?
			</p>
			<div>
				<h2 className="text-center mt-8 text-lg underline underline-offset-4 decoration-lightBlue tracking-wide">
					Tech Stack
				</h2>
				<div className="mt-2">
					<button className="tech__button">
						<a href="https://tailwindcss.com/">{stackOne}</a>
					</button>
					<button className="tech__button">{stackTwo}</button>
					<button className="tech__button">{stackThree}</button>
					<button className="tech__button">{stackFour}</button>
				</div>
			</div>
		</div>
	);
};

export default Project;
