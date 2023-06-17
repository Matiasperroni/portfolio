import "./App.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

function App() {      
    return (
        <>
       
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
