
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

export default checkBrowserThemePreference;
