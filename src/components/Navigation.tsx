import { useEffect, useState } from "react";


function Navigation() {
    const [theme, setTheme] = useState<string | null>( null );

    // Check users browser preference and assign theme accordingly
    useEffect( () => {
        if ( theme === null ) {
            setTheme( 'dark' );
        }
    }, [] );


    useEffect( () => {
        const root = document.documentElement;

        if ( theme === 'light' ) {
            root.style.setProperty('--main-theme-color', "rgba(128, 8, 254, 0.78)");
            root.style.setProperty('--theme-bg', "#f6f2ff");
            root.style.setProperty('--theme-bg-accent', "#eee8ff");
            root.style.setProperty('--theme-text-color', "#262b2f");
            root.style.setProperty('--project-overlay-color', "#8008FEC6");
            root.style.setProperty('--theme-footer-color', "#eee8ff");



        } else {
            root.style.setProperty('--main-theme-color', "#9c5ee1");
            root.style.setProperty('--theme-bg', "#23252d");
            root.style.setProperty('--theme-bg-accent', "#252b34");
            root.style.setProperty('--theme-text-color', "#f1f1f1");
            root.style.setProperty('--project-overlay-color', "rgba(156,94,225,0.85)");
            root.style.setProperty('--theme-footer-color', "#1E1E1E");


        }
    }, [theme] );

    return (
        <div className="navigation-container">
            <nav className="nav">
                <div className="nav ">
                    <a className="navbar-brand" aria-current="page" href="#">🌟</a>
                </div>
                <ul className="nav nav-list">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
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

    );
}


export default Navigation;
