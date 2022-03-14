import React from 'react';
import './App.css';

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';


import translationEn from "./locales/en/translation";
import translationFin from "./locales/fin/translation";


i18n
    .use( initReactI18next ) //passes i18n down to react-i18next
    .init( {
        resources: {
            en: {translation: translationEn},
            fin: {translation: translationFin}
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {escapeValue: false},
    } )


function App() {
    const {t} = useTranslation();

    return (
        <div className="App">
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
