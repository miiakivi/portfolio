// Changed CSS variables so user can decide is the page dark or light theme
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
        root.style.setProperty( '--theme-bg-accent', " " );
        root.style.setProperty( '--theme-text-color', "#262b2f" );
        root.style.setProperty( '--project-overlay-color', "#8008FEC6" );
        root.style.setProperty( '--theme-footer-color', "#eee8ff" );
    }
}

export default changePageThemeColors;
