import React from "react";
import { DocumentDownloadIcon } from "@heroicons/react/outline";
import { FiExternalLink } from "react-icons/fi";
const AboutMe = () => {
  return (
    <div
      id="about"
      className=" rounded-xl pb-6 mx-6 mt-8 md:mt-12 about__header mb-12 "
    >
      <div className="mx-10 pb-14">
        <h1 className="font-bold text-center text-3xl md:text-5xl text-purple_light pt-12 tracking-wide">
          About Me
        </h1>
        <div className="sm:mx-20 md:mx-28 lg:mx-48 xl:mx-96 mt-8 md:mt-10 space-y-8 sm:space-y-12 leading-relaxed lg:leading-loose tracking-wide font-normal text-base md:text-lg text-white_text">
          <p>
            I'm 22 years old computer science student passionate about
            <span className="font-bold text-[#fec7c7]">
              {" "}
              Web development
            </span>{" "}
            completed a masters from University of Nanded Maharashtra India.
          </p>
          <p>
            I learned Programming when I was in high school and the language was{" "}
            <span className="font-bold text-[#8fb4fe]"> C++</span>. ... fast
            forward to Graduation, I learned a lot about the core fundamentals
            of computer science.
          </p>
          <p>
            I was interested in design, UI, UX. I spent my time learning UI, UX,
            layout,{" "}
            <span className="font-bold text-[#da9df8]">Color Theory</span>,
            <span className="font-bold italic"> Typography</span>, and a lot
            more... in my spare time.
          </p>
          <p>
            Doing design I got introduced to the world of front-end development.
            and Boom, I liked that because I can design + code. I spent time
            building websites with HTML, CSS, Javascript,
            <span className="text-[#81d8f0] px-1 py-0.5 font-bold ">React</span>
            see on my{" "}
            <span className="hover:text-[#9cb3ff] cursor-pointer">
              Github <FiExternalLink className=" inline h-4 w-4" />
            </span>
            .
          </p>
          <p>
            After that I learn JS libraries. and Built some Amazing, powerful
            websites. doing that I fall in
            <span className="text-[#f78fd3] font-bold"> Love</span> with
            <span className="text-[#ece474] font-bold">
              {" "}
              Javascript.
            </span> &{" "}
            <span className="text-[#81d8f0] px-1 py-0.5 font-bold ">React</span>
            .
          </p>

          <p>
            At the end, I'm planning to go Back End Dev as well with Golang. I
            definitely share when I build some cool stuff with it. I listen a
            lot of LoFi, k-pop, Streaming music and podcasts all the time. Here
            is my profile on{" "}
            <a
              href="https://open.spotify.com/user/h0zw2h4earqhkyv7le06o5038"
              target="_blank"
            >
              <span className=" underline decoration-dotted underline-offset-4 font-bold cursor-pointer hover:decoration-[#21c45a] hover:text-[#21c45a] transition duration-100 ease-in">
                Spotify.
              </span>
            </a>
          </p>
        </div>
      </div>
      <div className="text-center mb-16">
        <a
          href="https://www.dropbox.com/s/2bp65fkzsnvw1j5/Prashant%20Indurkar%20Front%20End%20Developer%20Resume%20V1.pdf?dl=0"
          class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-xl group"
          target="_blank"
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
