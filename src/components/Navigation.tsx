import { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

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

function Navigation() {
    const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>( undefined );
    const [navIsOpen, setNavIsOpen] = useState( false );

    // Check users browser preference and assign theme accordingly
    useEffect( () => {
        checkBrowserThemePreference( setIsDarkMode );
        /*
        if ( isDarkMode === undefined ) {
            setIsDarkMode( true );
        }*/
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
                    <nav className="nav">
                        <div className="nav ">
                            <a className="navbar-brand" aria-current="page" href="#">🌟</a>
                        </div>
                        <ul className="nav nav-list">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact me</a>
                            </li>
                        </ul>
                        <div className="nav">

                            <DarkModeToggle
                                onChange={ setIsDarkMode }
                                checked={ isDarkMode }
                                size={ 60 }
                            />
                        </div>
                    </nav>

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


    // Rotate toggle button
    toggleButton.style.transform = navIsOpen ? 'rotate(360deg)' : 'rotate(180deg)';
}

export default Navigation;
