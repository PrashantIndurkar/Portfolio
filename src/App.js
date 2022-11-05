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
    <div>
      {/* <Notice /> */}
      {/* <Navbar /> */}
      <Header />
      <ProjectSection />
      <AboutMe />
      <Skills />
      <GetInTouch />
      <footer className="py-6  text-center text-sm md:text-base text-white_text bg-black">
        <p>
          Build With <span className="font-medium">React</span>,{" "}
          <span className="font-medium">TailwindCss</span> & Deployed on{" "}
          <span className="font-medium">Vercel</span>
        </p>

        <p className="">Copyright &#169; {today.getFullYear()} OpenSource</p>
      </footer>
    </div>
  );
}

export default App;
