import './App.css';
import AboutMe from './components/AboutMe';
import GetInTouch from './components/GetInTouch';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import ProjectSection from './components/ProjectSection';
import Skills from './components/Skills';
function App() {
	return (
		<div>
			<Navbar />
			<Header />
			<ProjectSection />
			<AboutMe />
			<Skills />
			<GetInTouch />
		</div>
	);
}

export default App;
