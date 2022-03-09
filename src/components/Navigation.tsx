import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from 'react-i18next';

import DarkModeToggle from "react-dark-mode-toggle";

import logo from "../assets/logo.png"

function changePageThemeColors( isDarkMode : boolean | undefined ) {
    const root = document.documentElement;

    if ( isDarkMode ) {
        root.style.setProperty( '--main-theme-color', "#9c5ee1" );
        root.style.setProperty( '--theme-bg', "#23252d" );
        root.style.setProperty( '--theme-bg-accent', "#252b34" );
        root.style.setProperty( '--theme-text-color', "#f1f1f1" );
        root.style.setProperty( '--project-overlay-color', "rgba(156,94,225,0.85)" );
        root.style.setProperty( '--theme-footer-color', "#1E1E1E" );
    } else {
        root.style.setProperty( '--main-theme-color', "rgb(128,8,254)" );
        root.style.setProperty( '--theme-bg', "#f6f2ff" );
        root.style.setProperty( '--theme-bg-accent', "#eee8ff" );
        root.style.setProperty( '--theme-text-color', "#262b2f" );
        root.style.setProperty( '--project-overlay-color', "#8008FEC6" );
        root.style.setProperty( '--theme-footer-color', "#eee8ff" );
    }
}

// Check users browser preference and assign theme accordingly
function checkBrowserThemePreference( setIsDarkMode : Function ) {
    // Check to see if Media-Queries are supported
    if ( window.matchMedia ) {
        // Check if the dark-mode Media-Query matches
        if ( window.matchMedia( '(prefers-color-scheme: dark)' ).matches ) {
            // Dark
            setIsDarkMode( true );
            console.log( 'prefers dark mode' )

        } else {
            // Light
            setIsDarkMode( false );
            console.log( 'prefers light mode' )
        }
    } else {
        // Default (when Media-Queries are not supported)
        setIsDarkMode( false );
        console.log( 'not preferences' )

    }
}

const languages = {
    en: {nativeName: 'English'},
    fin: {nativeName: 'Suomi'}
};

function Navigation() {
    const {t, i18n} = useTranslation();


    const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>( undefined );
    const [navIsOpen, setNavIsOpen] = useState( false );

    useEffect( () => {
        checkBrowserThemePreference( setIsDarkMode );
    }, [] );


    // When theme state changes, change pages color scheme as well
    useEffect( () => {
        changePageThemeColors( isDarkMode );
    }, [isDarkMode] );

    return (
        <>
            <div className="navigation-content">
                <div className="toggle-container">
                    <i onClick={ () => {
                        openNavigation( navIsOpen );
                        setNavIsOpen( ( prevValue ) => !prevValue );
                    } }
                       className="fas fa-solid fa-angles-right nav__toggle-btn"/>
                </div>

                <div className="nav-container">
                    <nav className="">
                        <div className="nav ">
                            <a className="navbar-brand" aria-current="page" href="#">
                                <img width="50" src={ logo } alt="portfolio logo" className="mx-auto"/>
                            </a>
                        </div>
                        <ul className="nav nav-list">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#about">
                                    <Trans i18nKey="navigation.about"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">
                                    <Trans i18nKey="navigation.projects"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">
                                    <Trans i18nKey="navigation.skills"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    <Trans i18nKey="navigation.cv"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    <Trans i18nKey="navigation.contactMe"/>
                                </a>
                            </li>

                        </ul>
                        <div className="nav">
                            <div className="dark-mode-toggle">
                                <p>{ isDarkMode ? "dark" : "light" }</p>
                                <DarkModeToggle
                                    onChange={ setIsDarkMode }
                                    checked={ isDarkMode }
                                    size={ 50 }
                                />
                            </div>
                        </div>
                    </nav>

                    <div className="nav">
                        { Object.keys( languages ).map( ( lng, index ) => {
                            return (
                                <small key={ lng } className="languages"
                                       style={ {fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal', opacity: i18n.resolvedLanguage === lng ? '1' : '0.8'} }
                                       onClick={ () => i18n.changeLanguage( lng ) }>
                                    {lng}
                                </small>
                            )
                            }
                        ) }
                    </div>
                </div>
            </div>


        </>

    );
}

function openNavigation( navIsOpen : boolean | undefined ) {
    const navContent = document.querySelector<HTMLElement>( ".navigation-content" );
    const navContainer = document.querySelector<HTMLElement>( ".nav-container" );
    const toggleButton = document.querySelector<HTMLElement>( ".nav__toggle-btn" );

    if ( !navContainer || !navContent || !toggleButton ) {
        throw new ReferenceError( "Navigation element not found." );
    }

    navContainer.style.display = navIsOpen ? 'none' : 'block';

    // Make nav content smaller or larger depending on is the nav already open or not
    navContent.style.width = navIsOpen ? '50px' : '100%';
    navContent.style.height = navIsOpen ? '50px' : '100%';
    navContent.style.borderRadius = navIsOpen ? '0 10px 10px 0' : '0';
    navContent.style.marginTop = navIsOpen ? '1em' : '0';

    // Rotate toggle button
    toggleButton.style.transform = navIsOpen ? 'rotate(360deg)' : 'rotate(180deg)';
}

export default Navigation;
