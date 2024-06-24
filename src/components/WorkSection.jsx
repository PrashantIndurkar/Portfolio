import React from "react";

const WorkSection = () => {
  return (
    <section>
      <div className="bg-white bg-dark mx-6 mt-8 md:mt-12 md:pb-8 text-white_text">
        <div className="md:mx-32 ">
          <h1 className="mx-10 mb-6 md:mb-16 pt-12 text-3xl md:text-5xl font-bold text-center text-purple_light tracking-wide lg:tracking-wide">
            Work
          </h1>
          <p className="max-w-6xl mx-auto text-center leading-relaxed md:leading-loose text-sm text-white_text md:text-lg lg:mb-4">
            At this moment, I'm working on a side project called 🚀 ping.media.
            <br />
            It's a cool social media for developers and designers 🎒.
            <br />
            I've been lucky to work with some awesome international 🌏 remote
            companies, <br /> from early-stage startups to established ones.
            <span>
              {" "}
              but yeah I'm always excited for new ideas and companies ✌️!
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-6xl w-full mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            <div className="border rounded-md border-[#484848] p-8 ">
              <a
                href="https://pantryclub.co.za/"
                className="flex items-center justify-center h-28 bg-[#389b74] w-28 rounded-md border border-[#2a2929]"
              >
                <h2 className="font-bold text-white">Pantryclub</h2>
              </a>
              <div className="flex mt-6 gap-x-3 text-[#888888]">
                <h2>Pantryclub</h2>·<h2>Nov 23 - Current</h2>
              </div>
              <h1 className="text-xl mt-3 font-semibold">
                Full-stack engineer
              </h1>
            </div>
            <div className="border rounded-md border-[#484848] p-8 ">
              <div className="flex items-center justify-center h-28 bg-[#7070f5] w-28 rounded-md border border-[#2a2929]">
                <h2 className="font-bold text-white">Real Estate</h2>
              </div>
              <div className="flex mt-6 gap-x-3 text-[#888888]">
                <h2>Real Estate Company</h2>·<h2>Feb - Oct 2023</h2>
              </div>
              <h1 className="text-xl mt-3 font-semibold">
                Front-end developer
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
