import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProjectSection from './components/ProjectSection';
function App() {
	return (
		<div>
			<Navigation />
			<Header />
			<ProjectSection />
			<AboutMe />
		</div>
	);
}

export default App;
