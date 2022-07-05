import React from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import prashantProfile from '../img/prashantProfile.jpg';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

const GetInTouch = () => {
	return (
		<div
			id="contact"
			className="bg-[#dadef6] mx-6 rounded-xl mt-8 md:mt-12  rounded-br-3xl contact__background"
		>
			<div className="mx-10 sm:mx-20 md:mx-36 lg:mx-36 xl:mx-96 ">
				<div className="lg:flex gap-x-10 mb-12 lg:mb-20 pt-20 items-center">
					<div className="space-y-10">
						<h1 className="font-bold text-center text-3xl md:text-4xl text-indigo-500  tracking-wide">
							Get In Touch
						</h1>
						<div className="">
							<h1 className="leading-normal tracking-wide font-normal lg:leading-7">
								I love to Desing Websites and make things. I’m currently looking
								for opportunities full time in India or remote jobs all around
								the world, my inbox is always open. if you want to say Hi feel
								free to do, I’ll try my best to get back to you! asap Thank You!
							</h1>
						</div>
						<div className="flex flex-col justify-center items-center ">
							<RiSendPlaneFill className="h-8 w-8 text-indigo-500" />
							<a
								href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=prashantindurkarr@gmail"
								className="text-indigo-500 text-lg font-semibold tracking-wide underline underline-offset-4  decoration-indigo-500 cursor-pointer hover:text-indigo-600 transition duration-150"
							>
								prashantindurkarr@gmail.com
							</a>
						</div>
					</div>
					<div className="hidden lg:flex">
						<img src={prashantProfile} alt="" className="rounded-xl" />
					</div>
				</div>
				<div className="pb-12">
					<ul className="flex justify-between cursor-pointer ">
						<li className="hover:text-indigo-500 transition duration-150 ease-in">
							<a href="https://twitter.com/prashant2weet">
								<FaTwitter className="h-6 w-6" />
							</a>
						</li>
						<li className="hover:text-indigo-500 transition duration-150 ease-in">
							<a href="https://www.instagram.com/prashantt.in/">
								<FaInstagram className="h-6 w-6" />
							</a>
						</li>
						<li className="hover:text-indigo-500 transition duration-150 ease-in">
							<a href="https://github.com/PrashantIndurkar">
								<FaGithub className="h-6 w-6" />
							</a>
						</li>
						<li className="hover:text-indigo-500 transition duration-150 ease-in">
							<a href="https://www.linkedin.com/in/prashant-indurkar-19a447150/">
								<FaLinkedinIn className="h-6 w-6" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;
