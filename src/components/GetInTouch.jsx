import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import prashantProfile from "../img/resume_pic.jpg";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const GetInTouch = () => {
  return (
    <div
      id="contact"
      className=" mx-6 rounded-xl mt-8 md:mt-12 rounded-br-3xl contact__background"
    >
      <div className="mx-10 sm:mx-20 md:mx-36 lg:mx-36 xl:mx-96 ">
        <div className="md:flex gap-x-10 mb-12 lg:mb-20 pt-20 items-center">
          <div className="space-y-10 w-[100%]">
            <h1 className="font-bold text-center text-3xl md:text-4xl text-purple_light tracking-wide">
              Get In Touch
            </h1>
            <div className="">
              <h1 className="leading-normal tracking-wide font-normal lg:leading-loose text-white_text">
                I absolutely love designing websites and creating things. Right
                now, I'm allways looking for opportunities all over the world 🌍
                or in office India 🇮🇳 from anywhere in the world. My inbox is
                always open, so please don't hesitate to say hi. I promise to
                get back to you as soon as possible.
                <br />
                <br />
                <span className="font-bold text-[#fadfc1]">
                  {" "}
                  &#128591; Thank You &#128591;
                </span>
                !
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <RiSendPlaneFill className="h-8 w-8 text-purple_light" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=prashantindurkarr@gmail"
                className="text-purple_light text-lg font-semibold tracking-wide underline underline-offset-4  decoration-indigo-300 cursor-pointer hover:text-indigo-300 transition duration-150"
              >
                prashantindurkarr@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-10 md:mt-0 flex items-center justify-center w-full">
            <img
              src={prashantProfile}
              alt=""
              className="object-contain rounded-md h-96"
            />
          </div>
        </div>
        <div className="pb-12 text-purple_light">
          <ul className="flex justify-between cursor-pointer ">
            <li className="hover:text-indigo-300 transition duration-150 ease-in">
              <a href="https://twitter.com/prashant2weet" target="_blank">
                <FaXTwitter className="h-6 w-6" />
              </a>
            </li>
            <li className="hover:text-indigo-300 transition duration-150 ease-in">
              <a href="https://www.instagram.com/prashantt.in/" target="_blank">
                <FaInstagram className="h-6 w-6" />
              </a>
            </li>
            <li className="hover:text-indigo-300 transition duration-150 ease-in">
              <a href="https://github.com/PrashantIndurkar" target="_blank">
                <FaGithub className="h-6 w-6" />
              </a>
            </li>
            <li className="hover:text-indigo-300 transition duration-150 ease-in">
              <a
                href="https://www.linkedin.com/in/prashant-indurkar-19a447150/"
                target="_blank"
              >
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
