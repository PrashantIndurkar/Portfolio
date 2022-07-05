import './App.css';
import AboutMe from './components/AboutMe';
import GetInTouch from './components/GetInTouch';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import ProjectSection from './components/ProjectSection';
import Skills from './components/Skills';
import Notice from './components/Navbar/Notice';
import { SiVercel } from 'react-icons/si';

function App() {
	const today = new Date();
	return (
		<div>
			{/* <Notice /> */}
			<Navbar />
			<Header />
			<ProjectSection />
			<AboutMe />
			<Skills />
			<GetInTouch />
			<div className="my-4 text-center text-sm md:text-base mx-10 ">
				<p>
					Build With <span className="font-medium">React</span>,{' '}
					<span className="font-medium">TailwindCss</span> & Deploy{' '}
					<span className="font-medium">Vercel</span>
				</p>

				<p className="">Copyright &#169; {today.getFullYear()} OpenSource</p>
			</div>
		</div>
	);
}

export default App;
