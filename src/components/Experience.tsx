import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Trans, useTranslation } from "react-i18next";

import workExperience from "../data/workExperience";

interface JobProps {
  job: {
    date: string;
    company: string;
    text: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
  index: number;
}

function Experience() {
  const { t, i18n } = useTranslation();

  return (
    <div id="experience" className="section-container">
      <div className="section-header">
        <p className="section-subtitle">
          <Trans i18nKey="experience.subtitle" />
        </p>
        <h2 className="section-title section-title--light">
          <Trans i18nKey="experience.title" />
        </h2>
      </div>
      <VerticalTimeline>
        {workExperience.map( ( work, index ) => {
          return <Job job={work} index={index} key={index} />;
        } )}
      </VerticalTimeline>
    </div>
  );
}

function Job( { job, index }: JobProps ) {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage;
  const locale = currentLanguage === "en" ? job.text.en : job.text.fin;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#fff",
        color: "#000",
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      date={job.date}
      dateClassName="vertical-timeline-element--first-date"
      iconStyle={{ background: "#f1c40f", color: "#fff" }}
    >
      <h3 className="vertical-timeline-element-title">{locale.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{job.company}</h4>
      <p>{locale.description}</p>
    </VerticalTimelineElement>
  );
}

export default Experience;
