import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import type { SkillIcon as SkillIconProps } from "../../types";

function SkillIcon( { skill, delay }: SkillIconProps ) {
  return (
    <AnimationOnScroll
      animateOnce={true}
      delay={delay * 35}
      animateIn="animate__fadeInUp"
    >
      <div className="icon-grid__item">
        <i className={`${skill.icon} icon-grid__item-icon`} />
        <p>{skill.name}</p>
      </div>
    </AnimationOnScroll>
  );
}

export default SkillIcon;
