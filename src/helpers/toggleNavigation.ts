
function toggleNavigation( navIsOpen : boolean | undefined ) {
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

export default toggleNavigation;
