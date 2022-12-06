import React from "react";

import Reddit from "../img/projectThumbnail/reddit2.png";
import pureBeauty from "../img/projectThumbnail/pureBeauty.png";
import Spotify from "../img/projectThumbnail/spotify1.png";
// import Taskit from "../img/projectThumbnail/Taskit.png";

import Project from "./Project";

function ProjectSection() {
  const redditLiveLink = "https://reddit-ish.vercel.app/";
  const spotifyLiveLink = "https://spotify-ui-puce.vercel.app/";
  const pureBeautyLiveLink = "https://pure-beauty.vercel.app/";

  const RedditDescription =
    "Performed CRUD operations. They can Join, Create Communities upVote/downVote posts. They can leave comments and delete them also. Tech Stack: TypeScript, NEXT.js, React.js, Recoil, and ChakraUI, for backend  Firebase V9 with the help of React-firebase-hook. Authentication: Sign up with Google, Email & Password, & Forgot password.";
  const redditGithubLink = "https://github.com/PrashantIndurkar/Reddit-Clone";

  const spotifyDescription =
    "React.js, TailwindCss, React-icons, Tailwind-Scrollbar, Git & Github, Deployed on Vercel. Clones are almost similar to the original sites achieved using TailwindCss Grid Flex-box, Media Queries, and Configuration. Everything is fully Responsive.";
  const spotifyGithubLink = "https://github.com/PrashantIndurkar/Spotify-Ui";

  const pureBeautyDescription =
    "Full-Stack Application with Next.js for the Front-End and Sanity.io as a Back-End. It has 6+ pages including Home, Products, Product Details, Checkout, Stripe payment, and Order history page. It's a Beauty Tech cosmetic eCommerce App.  Tech Stack TypeScript, Next.js, Redux, Redux-toolkit, TailwindCss, Framer Motion, Sanity.io.";
  const pureBeautyGithubLink = "https://github.com/PrashantIndurkar/pureBeauty";

  // const slickersDiscription =
  //   "This project is Twitter Clone. Next.js Authantication. Also it has emoji selected using package. Next.js is used for front end and database is firebase and recoil is for state management";
  // const slickersGithubLink = "https://github.com/PrashantIndurkar/Reddit-Clone";

  return (
    <div className="bg-white bg-dark mx-6 rounded-xl mt-8 md:mt-12  md:pb-8 ">
      <div className="md:mx-32 ">
        <h1 className="mx-10 md:mb-16 pt-12 text-3xl md:text-5xl font-bold text-center text-purple_light tracking-wide lg:tracking-wide">
          Personal Work
        </h1>
        <Project
          name={"Full Stack Social Media Clone"}
          img={Reddit}
          githubLiveLink={redditGithubLink}
          liveLink={redditLiveLink}
          projectDescription={RedditDescription}
        />
        <Project
          name={"Beauty Tech E-Commerce App"}
          img={pureBeauty}
          githubLiveLink={pureBeautyGithubLink}
          liveLink={pureBeautyLiveLink}
          rightSideImage={"rightSideImage"}
          projectDescription={pureBeautyDescription}
        />
        <Project
          name={"Spotify Ui Clone"}
          img={Spotify}
          githubLiveLink={spotifyGithubLink}
          liveLink={spotifyLiveLink}
          projectDescription={spotifyDescription}
        />

        {/* <Project
          name={"Task Organizer Taskit."}
          img={Taskit}
          githubLiveLink={github}
          liveLink={taskitLink}
          rightSideImage={"rightSideImage"}
          projectDiscription={taskitDiscription}
        /> */}
        {/* <div className="mb-12">
          <a
            href="#_"
            class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden  font-medium tracking-wider text-white bg-gray-800 group"
          >
            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
            <span class="relative">See More...</span>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default ProjectSection;
