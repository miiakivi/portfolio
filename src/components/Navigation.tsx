import { useEffect, useState } from "react";

function changePageThemeColors( currentTheme : string | null ) {
    const root = document.documentElement;

    if ( currentTheme === 'light' ) {
        root.style.setProperty( '--main-theme-color', "rgba(128, 8, 254, 0.78)" );
        root.style.setProperty( '--theme-bg', "#f6f2ff" );
        root.style.setProperty( '--theme-bg-accent', "#eee8ff" );
        root.style.setProperty( '--theme-text-color', "#262b2f" );
        root.style.setProperty( '--project-overlay-color', "#8008FEC6" );
        root.style.setProperty( '--theme-footer-color', "#eee8ff" );


    } else {
        root.style.setProperty( '--main-theme-color', "#9c5ee1" );
        root.style.setProperty( '--theme-bg', "#23252d" );
        root.style.setProperty( '--theme-bg-accent', "#252b34" );
        root.style.setProperty( '--theme-text-color', "#f1f1f1" );
        root.style.setProperty( '--project-overlay-color', "rgba(156,94,225,0.85)" );
        root.style.setProperty( '--theme-footer-color', "#1E1E1E" );
    }
}

function Navigation() {
    const [theme, setTheme] = useState<string | null>( null );
    const [navIsOpen, setNavIsOpen] = useState( false );

    // Check users browser preference and assign theme accordingly
    useEffect( () => {
        if ( theme === null ) {
            setTheme( 'dark' );
        }
    }, [] );


    // When theme state changes, change pages color scheme as well
    useEffect( () => {
        changePageThemeColors( theme );
    }, [theme] );

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
                            <button
                                onClick={ () => setTheme( ( prevValue ) => prevValue === 'dark' ? 'light' : 'dark' ) }>
                                Change theme
                            </button>
                        </div>
                    </nav>

                </div>
            </div>


        </>

    );
}

function openNavigation( navIsOpen : boolean ) {
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

    // Rotate toggle button
    toggleButton.style.transform = navIsOpen ? 'rotate(360deg)' : 'rotate(180deg)';
}

export default Navigation;
