import React from 'react';
import foldedHands from '../img/foldedHands.svg';
import { DownloadIcon } from '@heroicons/react/solid';
function Header() {
	return (
		<div className="pt-8 mx-4 md:mx-6">
			<div
				id="header"
				className="header__background rounded-xl flex flex-col justify-center items-center tracking-wide text-secondary mt-10 z-50"
			>
				<div className="text-center md:-mt-10 ">
					<div className="space-y-2 md:space-y-4">
						<p className="md:pb-2 text-base text-center md:text-lg tracking-wider ">
							Hello, from <span className="font-bold">INDIA.</span>
						</p>
						<h1 className="text-3xl sm:text-4xl leading-normal font-bold md:text-5xl lg:text-7xl text-indigo-500 ">
							Prashant Indurkar
						</h1>
						<div>
							<h1 className="text-xl sm:text-2xl md:text-3xl font-semibold  tracking-wide xl:text-4xl text-[#373a46]">
								Front End Developer.
							</h1>
						</div>
					</div>
					<div className="space-x-16 text-center mt-8 md:mt-16">
						<button className="border-2 border-secondary bg-secondary text-white px-4 py-1 md:px-8 md:py-2 md:text-lg font-bold tracking-wide rounded-sm md:rounded-md text-base shadow-lg drop-shadow-indigo-800 hover:bg-[#252525] duration-150 ">
							<a href="#">Hire Me</a>
						</button>
						<button className="border-2 border-indigo-500 text-indigo-500 px-4 py-1 md:px-4 md:py-2 md:text-lg font-bold tracking-wide rounded-sm md:rounded-md text-base shadow-lg drop-shadow-indigo-800 hover:border-indigo-800 duration-150">
							<a href="https://drive.google.com/uc?export=download&id=1RPmlzsAp8HzBWCGtSVvOiLQSCRHASuOJ">
								<DownloadIcon className=" h-6 w-6 inline align-middle" /> Resume
							</a>
						</button>
						{/* <a
							href="https://drive.google.com/uc?export=download&id=1RPmlzsAp8HzBWCGtSVvOiLQSCRHASuOJ"
							class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-600 rounded-md group"
						>
							<span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
								<span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
							</span>
							<span class="absolute bottom-0 left-0 w-full h-full transition-all duration-200 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-700 rounded-md group-hover:mb-12 group-hover:translate-x-0"></span>
							<span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white font-bold text-base md:text-lg tracking-wide">
								Resume
								<DownloadIcon className="ml-1 h-6 w-6 inline align-middle" />
							</span>
						</a> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
