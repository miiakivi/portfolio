import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Socials from "./components/Socials";

import translationEn from "./locales/locale-en";
import translationFin from "./locales/locale-fin";

i18n
  .use( initReactI18next ) //passes i18n down to react-i18next
  .init( {
    resources: {
      en: { translation: translationEn },
      fin: { translation: translationFin }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  } );

function App() {
  return (
    <div className="App">
      <Socials />
      <Navigation />
      <main>
        <Hero />
        <div className="background-image__accent">
          <About />
          <Experience />
        </div>
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
