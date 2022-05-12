import './App.css';
import AboutMe from './components/AboutMe';
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
		</div>
	);
}

export default App;
