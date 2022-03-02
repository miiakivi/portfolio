import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {

    return (
        <div  className="App">
            <Navigation/>
            <main>
                <Hero/>
                <About/>
                <Projects/>
                <Skills/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
