import React from 'react';
import { DocumentDownloadIcon } from '@heroicons/react/outline';

const AboutMe = () => {
	return (
		<div
			id="about"
			className="bg-[#eef0f8] rounded-xl pb-6 mx-6 mt-8 md:mt-12 about__header mb-12 "
		>
			<div className="mx-10 pb-14">
				<h1 className="font-bold text-center text-3xl md:text-4xl text-indigo-500 pt-12 tracking-wide">
					About Me
				</h1>
				<div className="sm:mx-20 md:mx-28 lg:mx-48 xl:mx-96 mt-8 md:mt-10 space-y-8 sm:space-y-12 leading-normal tracking-wide font-normal text-base md:text-lg">
					<p>
						I'm 22 years old computer science student passionate about
						<span className="font-bold"> Web development</span> completed a
						masters from University Nanded Maharashtra India.
					</p>
					<p>
						I learned Programming when I was in high school the subject was C++.
						I didn't find that interesting. After that at my graduation, I
						learned a lot about the core fundamentals of computer science.
					</p>
					<p>
						I was interested in design, UI, UX. I spent my time learning UI, UX,
						layout, color theory, typography, and a lot more... in my spare
						time.
					</p>
					<p>
						Doing design I got introduced to the world of front-end development.
						and Boom, I liked that because I can design + code. I spent time
						building websites with HTML, CSS, Javascript,
						<span className="bg-[#c0ebf7] px-1 py-0.5 font-bold ">React</span>.
					</p>
					<p>
						After that I learn JS libraries. and Built some Amazing, powerful
						websites. doing that I fall in
						<span className="text-[#fa56c1] font-bold"> Love</span> with
						<span className="bg-[#fffbc3] font-bold"> Javascript.</span> &{' '}
						<span className="bg-[#c0ebf7] px-1 py-0.5 font-bold ">React</span>.
					</p>

					<p>
						Lastly, I'm planning to learn AR, VR, WEB 3 kinds of stuff. I think
						it is promising tech for the future. I definitely share when I build
						some cool stuff with it. I listen a lot of lofi, striming music and
						podcasts all the time. Here is my profile on{' '}
						<a href="https://open.spotify.com/user/h0zw2h4earqhkyv7le06o5038">
							<span className=" underline decoration-dotted underline-offset-4 font-bold cursor-pointer hover:decoration-[#21c45a] hover:text-[#21c45a] transition duration-100 ease-in">
								Spotify.
							</span>
						</a>
					</p>
				</div>
			</div>
			<div className="text-center mb-16">
				<a
					href="https://drive.google.com/uc?export=download&id=1RPmlzsAp8HzBWCGtSVvOiLQSCRHASuOJ"
					class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-xl group"
				>
					<span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
						<span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
					</span>
					<span class="absolute bottom-0 left-0 w-full h-full transition-all duration-300 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
					<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white font-bold">
						<DocumentDownloadIcon className="h-6 w-6 inline align-middle" />
						Resume.pdf
					</span>
				</a>
			</div>
		</div>
	);
};

export default AboutMe;
