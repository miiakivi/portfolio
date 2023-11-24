import React from "react";
import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import DarkModeToggle from "react-dark-mode-toggle";
import logo from "../assets/logo.png";

import checkBrowserThemePreference from "../helpers/checkBrowserThemePreference";
import changePageThemeColors from "../helpers/changePageTheme";
import toggleNavigation from "../helpers/toggleNavigation";

import LanguageBtn from "./LanguageBtn";

import type { NavItem as NavItemProps } from "../../types";

function Navigation() {
  const { t, i18n } = useTranslation();

  const [ isDarkMode, setIsDarkMode ] = useState<boolean | undefined>( undefined );
  const [ navIsOpen, setNavIsOpen ] = useState( false );

  useEffect( () => {
    checkBrowserThemePreference( setIsDarkMode );
  }, [] );

  // When theme state changes, change pages color scheme as well
  useEffect( () => {
    changePageThemeColors( isDarkMode );
  }, [ isDarkMode ] );

  const [ windowWidth, setWindowWidth ] = useState( window.innerWidth );

  const handleResize = () => {
    setWindowWidth( window.innerWidth );
  };

  useEffect( () => {
    // Add event listener to window resize
    window.addEventListener( 'resize', handleResize );

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener( 'resize', handleResize );
    };
  }, [] ); // Empty dependency array ensures that this effect runs once after initial render

  const [ isRotated, setIsRotated ] = useState( false );

  const handleClick = () => {
    // Toggle the state to add/remove the 'rotate' class
    setIsRotated( !isRotated );
    console.log( 'handleing click' )
  };

function ToggleContainer() {

  const transform = navIsOpen && windowWidth < 800;
  if ( windowWidth < 800 ) {
    return (
      <>
          <div className="toggle-container">
            <i
              onClick={() => {
                handleClick();
                toggleNavigation( navIsOpen );
                setNavIsOpen( ( prevValue ) => !prevValue );
              }}
              className={`fas fa-solid fa-angles-right nav__toggle-btn ${transform ? 'rotate' : ''}`}

            />
        </div>
      </>
    )
  } else return <></>
}

  function NavItem( { name }: NavItemProps ) {
    return (
      <li className="nav-item">
        <a
          onClick={() => {
            if( windowWidth < 800 ) {
              setTimeout( () => toggleNavigation( navIsOpen ), 300 );
              setNavIsOpen( ( prevValue ) => !prevValue );
            }

          }}
          className="nav-link active"
          aria-current="page"
          href={`#${name}`}
        >
          <Trans i18nKey={`navigation.${name}`} />
        </a>
      </li>
    );
  }

  return (
    <>
      <div className="navigation-content">
        <ToggleContainer/>
        <div className="nav-container">
          <nav>
            <div className="nav ">
              <a className="navbar-brand" aria-current="page">
                <img
                  width="50"
                  src={logo}
                  alt="portfolio logo"
                  className="mx-auto"
                />
              </a>
            </div>
            <ul className="nav nav-list">
              <NavItem name="about" />
              <NavItem name="experience" />
              <NavItem name="projects" />
              <NavItem name="skills" />
              <NavItem name="contact" />
            </ul>
            <div className="nav__extra">
              <div className="dark-mode-toggle">
                <DarkModeToggle
                  onChange={setIsDarkMode}
                  checked={isDarkMode}
                  size={50}
                />
              </div>
              <div className="languages__container">
                <LanguageBtn language={"en"} />
                <LanguageBtn language={"fin"} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navigation;
