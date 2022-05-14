import './App.css';
import AboutMe from './components/AboutMe';
import GetInTouch from './components/GetInTouch';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProjectSection from './components/ProjectSection';
import Skills from './components/Skills';
function App() {
	return (
		<div>
			<Navigation />
			<Header />
			<ProjectSection />
			<AboutMe />
			<Skills />
			<GetInTouch />
		</div>
	);
}

export default App;
