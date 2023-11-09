import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">

        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/about" element={<About /> } />
                <Route path="/projects" element={<Projects /> } />
                <Route path="/contact" element={<Contact /> } />

            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
