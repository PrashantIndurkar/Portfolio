import React from "react";

import Reddit from "../img/projectThumbnail/reddit2.png";
import pureBeauty from "../img/projectThumbnail/pureBeauty.png";
import pingMedia from "../img/projectThumbnail/pingMedia.png";
import Spotify from "../img/projectThumbnail/spotify1.png";
import github from "../img/projectThumbnail/github-clone.png";
import moveTime from "../img/projectThumbnail/movieTime.png";

import Project from "./Project";

function ProjectSection() {
  const pingMediaLiveLink = "https://ping-media.vercel.app/";
  const redditLiveLink = "https://reddit-ish.vercel.app/";
  const spotifyLiveLink = "https://spotify-ui-puce.vercel.app/";
  const pureBeautyLiveLink = "https://pure-beauty.vercel.app/";
  const githubLiveLink = "https://github-repo-ui-clone.vercel.app/";
  const movieTimeLiveLink = "https://movie-time-navy.vercel.app/";

  const pingDescription =
    "Open-source full stack social network and job hunting platform for developers and designers to connect and have fun.  Designed and implemented a comprehensive Social Network website with robust login and register functionalities. Ensured accurate error handling, data security, and privacy by integrating protected routes. Optimized code structure by splitting it into reusable components, facilitating easy integration and maintenance across the project. Tech: TypeScript, NextJs, React, Prisma, TailwindCSS, Tanstack-query, NextAuth ...";
  const pingGithubLink = "https://github.com/PrashantIndurkar/ping.media";

  const RedditDescription =
    "Performed CRUD operations. They can Join, Create Communities upVote/downVote posts. They can leave comments and delete them also. Tech Stack: TypeScript, NEXT.js, React.js, Recoil, and ChakraUI, for backend  Firebase V9 with the help of React-firebase-hook. Authentication: Sign up with Google, Email & Password, & Forgot password.";
  const redditGithubLink = "https://github.com/PrashantIndurkar/Reddit-Clone";

  const spotifyDescription =
    "React.js, TailwindCss, React-icons, Tailwind-Scrollbar, Git & Github, Deployed on Vercel. Clone are almost similar to the original sites achieved using TailwindCss Grid Flex-box, Media Queries, and Configuration. Everything is fully Responsive.";
  const spotifyGithubLink = "https://github.com/PrashantIndurkar/Spotify-Ui";

  const pureBeautyDescription =
    "Full-Stack Application with Next.js for the Front-End and Sanity.io as a Back-End. It has 6+ pages including Home, Products, Product Details, Checkout, Stripe payment, and Order history page. It's a Beauty Tech cosmetic eCommerce App.  Tech Stack TypeScript, Next.js, Redux, Redux-toolkit, TailwindCss, Framer Motion, Sanity.io.";
  const pureBeautyGithubLink = "https://github.com/PrashantIndurkar/pureBeauty";

  const githubDescription =
    "React.js, TailwindCss, React-icons, Tailwind-Scrollbar, Git & Github, Deployed on Vercel. Github Clone are almost similar to the original sites achieved using TailwindCss Grid Flex-box, Media Queries, and Configuration. Everything is fully Responsive.";
  const githubGithubLink =
    "https://github.com/PrashantIndurkar/github-repo-ui-clone";

  const moveTimeDescription =
    "It's a movie time app. It has a list of movies and their ratings and lot of details about movie. It also has a search bar to search for movies. Tech Stack: TypeScript, Next.js, React, Redux, TailwindCSS, and Vercel. Fun fact: this app is made with my friend to learn how real world app is made in team environment.";
  const movieTimeGithubLink = "https://github.com/PrashantIndurkar/movie-time";

  return (
    <div className="bg-white bg-dark mx-6 rounded-xl mt-8 md:mt-12  md:pb-8 ">
      <div className="md:mx-32 ">
        <h1 className="mx-10 md:mb-16 pt-12 text-3xl md:text-5xl font-bold text-center text-purple_light tracking-wide lg:tracking-wide">
          Selected Projects
        </h1>
        <Project
          name={"Social Media for developers and designers"}
          img={pingMedia}
          githubLiveLink={pingGithubLink}
          liveLink={pingMediaLiveLink}
          rightSideImage={"rightSideImage"}
          projectDescription={pingDescription}
        />
        <Project
          name={"Spotify Desktop Ui Clone"}
          img={Spotify}
          githubLiveLink={spotifyGithubLink}
          liveLink={spotifyLiveLink}
          projectDescription={spotifyDescription}
        />

        <Project
          name={"Beauty Tech E-Commerce"}
          img={pureBeauty}
          githubLiveLink={pureBeautyGithubLink}
          liveLink={pureBeautyLiveLink}
          rightSideImage={"rightSideImage"}
          projectDescription={pureBeautyDescription}
        />
        <Project
          name={"Full-stack Reddit clone"}
          img={Reddit}
          githubLiveLink={redditGithubLink}
          liveLink={redditLiveLink}
          projectDescription={RedditDescription}
        />
        <Project
          name={"Fully Responsive Github Ui Clone"}
          img={github}
          githubLiveLink={githubGithubLink}
          liveLink={githubLiveLink}
          rightSideImage={"rightSideImage"}
          projectDescription={githubDescription}
        />
        <Project
          name={"Movie Time App to research about movies"}
          img={moveTime}
          githubLiveLink={movieTimeGithubLink}
          liveLink={movieTimeLiveLink}
          projectDescription={moveTimeDescription}
        />
      </div>
    </div>
  );
}

export default ProjectSection;
