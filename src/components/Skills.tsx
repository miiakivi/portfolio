import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Trans, useTranslation } from "react-i18next";
import skills from "../data/skills";
import SkillIcon from "./SkillIcon";

function Skills() {
    const {t, i18n} = useTranslation();

    return (
        <div id="skills" className="section-container">
            <div className="skills-container section">

                <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInUp">
                    <div className="section-header">
                        <p className="section-subtitle">
                            <Trans i18nKey="skills.subtitle"/>
                        </p>
                        <h2 className="section-title">
                            <Trans i18nKey="skills.title"/>
                        </h2>
                    </div>
                </AnimationOnScroll>

                <div className="icon-grid">
                    { skills.map( ( skill ) => {
                        return <SkillIcon skill={ skill }/>
                    } )
                    }
                </div>
            </div>
        </div>
    );
}


export default Skills;
