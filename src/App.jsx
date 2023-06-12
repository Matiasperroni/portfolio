import "./App.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
// import { useEffect } from 'react';

function App() {
    // useEffect(() => {
    //     console.log("asd");
    //   }, [])
      
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
