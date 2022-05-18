import React from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
const GetInTouch = () => {
	return (
		<div
			id="contact"
			className="bg-[#c2bbeb4b] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl mb-4"
		>
			<div className="mx-10">
				<h1 className="font-black text-center text-3xl text-primary pt-12 tracking-wide">
					Get In Touch
				</h1>
				<div className="mt-10">
					<h1>
						I’m currently looking for opportunities full time in India or remote
						jobs all around the world, my inbox is always open. if you want to
						say Hi feel free to do, I’ll try my best to get back to you! asap
						Thank You!
					</h1>
				</div>
				<div className=" flex flex-col justify-center items-center mt-10">
					<RiSendPlaneFill className="h-8 w-8 text-primary" />
					<h1 className="text-primary text-lg font-semibold tracking-wide underline underline-offset-4  decoration-lightBlue cursor-pointer">
						prashantindurkarr@gmail.com
					</h1>
				</div>
				<div className="mt-10 pb-10">
					<ul className="flex justify-between w-full cursor-pointer font-medium">
						<li className="underline underline-offset-4 decoration-dotted hover:decoration-lightBlue hover:text-lightBlue transition duration-100 ease-in">
							Twitter
						</li>
						<li className="underline underline-offset-4 decoration-dotted hover:decoration-lightBlue hover:text-lightBlue transition duration-100 ease-in">
							LinkedIn
						</li>
						<li className="underline underline-offset-4 decoration-dotted hover:decoration-lightBlue hover:text-lightBlue transition duration-100 ease-in">
							Dribbble
						</li>
						<li className="underline underline-offset-4 decoration-dotted hover:decoration-lightBlue hover:text-lightBlue transition duration-100 ease-in">
							Instagram
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;
