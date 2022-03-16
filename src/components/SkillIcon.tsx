import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface SkillIconProps {
    skill : {
        name : string;
        icon : string;
    }
}

function SkillIcon( {skill} : SkillIconProps ) {
    return (
        <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInUp">
            <div className="icon-grid__item">
                <i className={ `${ skill.icon } dev-icon` }/>
                <p>{ skill.name }</p>
            </div>
        </AnimationOnScroll>
    )
}

export default SkillIcon;
