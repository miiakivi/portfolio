import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Trans, useTranslation } from "react-i18next";

function Experience() {
  return (
    <>
      <div className="section-header">
        <p className="section-subtitle accent-subtitle">
          <Trans i18nKey="experience.subtitle" />
        </p>
        <h2 className="section-title accent-title">
          <Trans i18nKey="experience.title" />
        </h2>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="2018 - present"
          iconStyle={{ background: "#f1c40f", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">ABC Company</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            mollis diam vel dui malesuada hendrerit. Vestibulum ut mauris et
            tortor fermentum maximus.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="2015 - 2018"
          iconStyle={{ background: "#f1c40f", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">XYZ Company</h4>
          <p>
            Fusce eu dolor vel diam aliquet commodo eget at nibh. Suspendisse
            potenti. Aliquam erat volutpat. Nullam id justo risus. Sed finibus
            arcu eget metus posuere malesuada.
          </p>
        </VerticalTimelineElement>
        {/* Add more VerticalTimelineElement components for each work experience */}
      </VerticalTimeline>
    </>
  );
}

export default Experience;
