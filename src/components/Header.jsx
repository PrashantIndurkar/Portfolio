import React from "react";
import foldedHands from "../img/foldedHands.svg";
import { DownloadIcon } from "@heroicons/react/solid";
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
                Hey i'm,
              </p>
              <h1 className="text-white text-3xl font-bold leading-normal sm:text-4xl md:text-5xl lg:text-6xl ">
                Prashant Indurkar
              </h1>
            </div>
            <h1 className="text-xl font-semibold tracking-wide text-[#c7c5f2]  sm:text-2xl md:text-3xl xl:text-4xl">
              Front End Developer.
            </h1>
          </div>
          <div className="mt-8 space-x-16 text-center md:mt-10">
            {/* <button className="bg-secondary text-white drop-shadow-indigo-800 rounded-sm border border-[#c7c5f2] px-4 py-1 text-base font-bold tracking-wide shadow-lg duration-150 hover:bg-[#3a3846] md:rounded-md md:px-8 md:py-2 md:text-lg ">
              <a href="#">Hire Me</a>
            </button> */}
            <a
              href="https://www.dropbox.com/s/v6lpmoc5s64yi3l/Prashant%20Indurkar%20Front%20End%20Developer%20Resume%20V1.pdf?dl=0"
              target="_blank"
            >
              <button className="drop-shadow-dark rounded-sm border border-dark_light bg-[#3a3846] px-4 py-1 text-base font-semibold tracking-wide text-[#c7c5f2] shadow-lg duration-150 hover:bg-[#2d2b36]  rounded-md md:px-4 md:py-2 md:text-lg">
                {/* <a href="https://drive.google.com/uc?export=download&id=1D1vpyT9Gsqv5IzmQWIpDp2hymAOx2nCK"> */}
                <DownloadIcon className=" inline h-6 w-6 align-middle" /> Resume
              </button>
            </a>
            {/* <a
              href="https://www.dropbox.com/s/v6lpmoc5s64yi3l/Prashant%20Indurkar%20Front%20End%20Developer%20Resume%20V1.pdf?dl=0"
              class="bg-green-600 group relative inline-flex items-center justify-start overflow-hidden rounded-md px-6 py-3 font-medium transition-all"
            >
              <span class="bg-green-700 absolute top-0 right-0 inline-block h-4 w-4 rounded transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
                <span class="bg-white absolute top-0 right-0 h-5 w-5 translate-x-1/2 -translate-y-1/2 rotate-45"></span>
              </span>
              <span class="bg-green-700 absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-md transition-all delay-200 duration-200 ease-in-out group-hover:mb-12 group-hover:translate-x-0"></span>
              <span class="text-white group-hover:text-white relative w-full text-left text-base font-bold tracking-wide transition-colors duration-300 ease-in-out md:text-lg">
                Resume
                <DownloadIcon className="ml-1 inline h-6 w-6 align-middle" />
              </span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
