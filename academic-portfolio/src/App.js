import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import Research from './components/Research/Research';
import Teaching from './components/Teaching/Teaching';
import Publications from './components/Publications/Publications';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
        <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/research" element={<Research/>} />
        <Route path="/teaching" element={<Teaching/>} />
        <Route path="/publications" element={<Publications/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
