import React from "react";
import { FiExternalLink } from "react-icons/fi";
import github from "../img/icons8-github-128.svg";

const Project = ({
  name,
  img,
  githubLiveLink,
  liveLink,
  rightSideImage,
  projectDescription,
}) => {
  return (
    <div id="project" className="mx-10 mt-12 md:mb-40 mb-20 md:mx-16 ">
      {/* md:screen */}
      <div className="lg:flex lg:gap-x-12 mt-12">
        {/* IMAGE PATH */}
        <div
          className={`shadow-lg md:my-auto lg:w-1/2 ${
            rightSideImage && "order-2"
          }`}
        >
          <a href={liveLink}>
            <img className="rounded-lg cursor-pointer" src={img} alt={name} />
          </a>
        </div>
        <div className="lg:w-1/2 ">
          {/* TITLE NAME*/}
          <h1 className="text-2xl  md:text-3xl lg:text-4xl text-secondary font-bold  tracking-wide lg:leading-relaxed mt-8 mb-6 lg:mt-0 lg:mb-0 text-white ">
            {name}
          </h1>
          {/* PROJECT DISCRIPTION PARAGRAPH */}
          <p className="md:my-auto md:mt-8 leading-loose tracking-wide text-[#7d7d7d]">
            {projectDescription}
          </p>
        </div>
      </div>
      {/* GITHUB & ACTION BUTTONS */}
      <div className="flex justify-center items-center gap-8 mt-16 order-2">
        <a href={githubLiveLink} target="_blank">
          <button className="ml-2 py-2 px-4 items-center font-medium rounded-md  cursor-pointer focus:outline-none flex bg-secondary border border-[#3a3a3a] text-white justify-center hover:text-[#cbc9c9] transition duration-150 ease-in-out">
            <img className="size-5" src={github} alt="" />
            <h1 className="text-sx font-bold ml-1 sm:text-lg">Github</h1>
          </button>
        </a>

        <a href={liveLink} target="_blank">
          <button className="ml-2 py-2 px-4 rounded-lg border border-[#a3c19f] text-[#a3c19f] cursor-pointer  justify-center items-center focus:outline-none text-white flex hover:text-white transition duration-150 ease-in-out">
            <h1 className="text-sm sm:text-lg font-semibold ml-1 whitespace-nowrap">
              Live Demo
            </h1>
            <FiExternalLink className="ml-2 size-4" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
