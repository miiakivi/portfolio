import { useTranslation } from "react-i18next";
import React from "react";

interface LanguageBtnProps {
    language : string
}
// Changes pages language. Fin or eng
function LanguageBtn( {language} : LanguageBtnProps ) {
    const {t, i18n} = useTranslation();

    function changeLanguage( language : string ) {
        i18n.changeLanguage( language )
            .then( () => console.log( 'language changed' ) )
    }

    return (
        <small className="language"
               style={ {
                   fontWeight: i18n.resolvedLanguage === language ? 'bold' : 'normal',
                   opacity: i18n.resolvedLanguage === language ? '1' : '0.8'
               } }
               onClick={ () => changeLanguage( language ) }>
            { language }
        </small>
    )
}

export default LanguageBtn;
