import React from "react";
import foldedHands from "../img/foldedHands.svg";
import { DocumentDownloadIcon, DownloadIcon } from "@heroicons/react/solid";
function Header() {
  return (
    <div className="mx-4 mt-4 ">
      <div
        id="header"
        className="header__background text-secondary z-50 flex flex-col items-center justify-center  tracking-wide"
      >
        <div className="text-center md:-mt-8 ">
          <div className="space-y-2 md:space-y-8">
            <div>
              <p className="text-start text-xs tracking-wider text-[#c7c5f2] md:text-base lg:mb-4">
                <span className="md:text-xl text-lg">&#128075;</span> Hey, I'm,
              </p>
              <h1 className="text-white text-3xl font-bold tracking-wide  sm:text-4xl md:text-5xl lg:text-[5.5rem] ">
                Prashant Indurkar
              </h1>
            </div>
            <h1 className="text-xl font-bold tracking-wide text-[#c7c5f2] sm:text-4xl md:text-5xl lg:text-[4rem]">
              Full Stack Developer
            </h1>
          </div>
          <div className="flex items-center mt-16 justify-center gap-x-8">
            <div className="text-center">
              <a
                href="https://www.dropbox.com/scl/fi/3ajhu0fsbf4uf4hcpatth/Front-End-Developer-Prashant-Indurkar.pdf?rlkey=r5z62sw0spd07zg6tbbqns8nl&st=7y07zkxf&dl=0"
                class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-xl group"
                target="_blank"
              >
                <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-300 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white font-bold">
                  Resume
                  <DocumentDownloadIcon className="h-6 w-6 inline pb-1" />
                </span>
              </a>
            </div>
            <a
              href="https://cal.com/prashant-indurkar/15min"
              target="_blank"
              className="bg-white_text text-black font-bold px-6 py-3 rounded-xl hover:bg-[#eeece1] transition duration-150 ease-in-out"
            >
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
