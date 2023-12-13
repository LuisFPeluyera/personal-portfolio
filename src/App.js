import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";



function App() {
  return (
    <div className="App">

        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/about" element={<Skills /> } />
                <Route path="/projects" element={<Projects /> } />
                <Route path="/projects/:id" element={ <ProjectDisplay /> } />
                <Route path="/contact" element={<Contact /> } />

            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
