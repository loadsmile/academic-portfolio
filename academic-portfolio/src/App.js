import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import Research from './components/Research/Research';
import Teaching from './components/Teaching/Teaching';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/research" element={<Research/>} />
        <Route path="/teaching" element={<Teaching/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
