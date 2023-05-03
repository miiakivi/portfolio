// Check users browser preference and assign theme accordingly
function checkBrowserThemePreference(
  setIsDarkMode: ( isDarkMode: boolean ) => void
) {
  // Check to see if Media-Queries are supported
  if ( window.matchMedia ) {
    // Check if the dark-mode Media-Query matches
    if ( window.matchMedia( "(prefers-color-scheme: dark)" ).matches ) {
      // Dark
      setIsDarkMode( true );
      return;
    } else {
      // Light
      setIsDarkMode( false );
      return;
    }
  }
  // Default (when Media-Queries are not supported)
  setIsDarkMode( true );
  console.log( "not preferences" );
}

export default checkBrowserThemePreference;
