import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AboutMe } from './pages/AboutMe';
import { Projects } from './pages/Projects';
import { Education } from './pages/Education';
import { Extras } from './pages/Extras';
import { Archive } from './pages/Archive';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/extras" element={<Extras />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
