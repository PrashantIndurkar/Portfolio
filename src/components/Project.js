import React from 'react';

const Project = ({ name, img }) => {
	return (
		<div className="mx-10 mt-12">
			<h1 className="text-2xl font-extrabold">{name}</h1>
			<div className="mx-auto mt-5">
				<img className="rounded-2xl cursor-pointer" src={img} alt="" />
			</div>
			<h2 className="text-center mt-4 text-lg">Technologies Used</h2>
			<div className="text-center ">
				<button className="project__button tech__button">React</button>
				<button className="project__button tech__button">Next.js</button>
				<button className="project__button tech__button">TailwindCss</button>
				<button className="project__button tech__button">Recoil</button>
			</div>
		</div>
	);
};

export default Project;
