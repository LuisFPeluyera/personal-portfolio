import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Experience from "./pages/Experience";
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
                <Route path="/experience" element={<Experience /> } />
                <Route path="/projects" element={<Projects /> } />
                <Route path="/project/:id" element={ <ProjectDisplay /> } />
                <Route path="/contact" element={<Contact /> } />

            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
