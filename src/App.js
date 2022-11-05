import "./App.css";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";
import Notice from "./components/Notice";

function App() {
  const today = new Date();
  return (
    <div className="scroll-smooth">
      {/* <Notice /> */}
      {/* <Navbar /> */}
      <Header />
      <ProjectSection />
      <AboutMe />
      <Skills />
      <GetInTouch />
      <footer className="py-6 space-y-2 text-center text-sm md:text-base text-white_text bg-black">
        <p>
          Build With <span className="font-medium text-[#00d8ff]">React</span>,{" "}
          <span className="font-medium text-[#06b6d4]">TailwindCss</span> &
          deployed to <span className="font-medium">Vercel</span>
        </p>

        <p>
          Get Source Code from{" "}
          <a
            href="https://github.com/PrashantIndurkar/Portfolio"
            target="_blank"
            className="underline decoration-dotted underline-offset-4 font-medium hover:text-purple_light"
          >
            Github
          </a>
        </p>
        <p className="">
          Build &#64; {today.getFullYear()} with{" "}
          <span className="text-[#f1b1ff] font-bold">&#10084;</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
