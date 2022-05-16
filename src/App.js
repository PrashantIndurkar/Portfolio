import './App.css';
import AboutMe from './components/AboutMe';
import GetInTouch from './components/GetInTouch';
import Header from './components/Header';
import Navbar from './components/navbar/Navbar';
import Notice from './components/Notice';
import ProjectSection from './components/ProjectSection';
import Skills from './components/Skills';
function App() {
	return (
		<div>
			<Notice />
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
