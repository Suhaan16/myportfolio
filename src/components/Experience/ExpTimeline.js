import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./ExpTimeline.css";
import { GrCertificate } from "react-icons/gr";
import { SiAwsorganizations } from "react-icons/si";
import { MdDeveloperBoard } from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineSettingsRemote } from "react-icons/md";

const ExpTimeline = () => {
  const iconStyle = { background: "#000", color: "#fff" };
  const cardContentCtyle = {
    background: "#000",
    color: "#fff",
    border: "2px solid rgba(128, 128, 128, 0.454)",
    boxShadow: "none",
  };
  const cardArrowStyle = {
    borderRight: "7px solid rgba(128, 128, 128, 0.454)",
  };

  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work test"
          contentStyle={cardContentCtyle}
          contentArrowStyle={cardArrowStyle}
          date="Sep 2024 - Present"
          dateClassName="what is this"
          iconStyle={iconStyle}
          icon={<SiAwsorganizations />}
        >
          <h3 className="vertical-timeline-element-title">Sofwatre Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            <CgOrganisation className="content-icon" /> Community Dreams Foundation{" "}
            <MdLocationOn className="content-icon" /> Tampa, FL
          </h4>
          <p>
            Typescript, Python, AWS, Lambda, Docker, Kubernetes, Terraform,
            Circle CI, Automation
          </p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={cardContentCtyle}
          contentArrowStyle={cardArrowStyle}
          date="Jan 2024 - May 2024"
          iconStyle={iconStyle}
          icon={<GrCertificate />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <CgOrganisation className="content-icon" />
            Info Data Worx {" "}
            <MdLocationOn className="content-icon" /> Mckinney, TX
          </h4>
          <p>
            Python, AWS, HTML, CSS, Java, Javascript, Flask, Django, React,
            Lambda, Docker, Kubernetes, Machine Learning
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={cardContentCtyle}
          contentArrowStyle={cardArrowStyle}
          date="Aug 2022 - May 2024"
          iconStyle={iconStyle}
          icon={<GrCertificate />}
        >
          <h3 className="vertical-timeline-element-title">
            Masters of Science in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <CgOrganisation className="content-icon" />
            University of South Florida at Tampa
          </h4>
          <p>
            Computer Architecture, Operating Systems, Web Development, Machine Learning,
            Deep Learning, LLM, Computer Vision, Natural Language Processing, Data Analytics
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={cardContentCtyle}
          contentArrowStyle={cardArrowStyle}
          date="May 2022 - July 2022"
          iconStyle={iconStyle}
          icon={<MdDeveloperBoard />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <CgOrganisation className="content-icon" /> Mobiezy Solutions{" "}
            <MdOutlineSettingsRemote className="content-icon" /> Bengaluru, IN
          </h4>
          <p>
            Python, React, Javascript, HTML, CSS, Java, AWS,
            Docker, Django, SpringBoot, ORM, Linux, Jenkins, ArgoCD, Nmap
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={cardContentCtyle}
          contentArrowStyle={cardArrowStyle}
          date="May 2018 - Aug 2022"
          iconStyle={iconStyle}
          icon={<GrCertificate />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Engineering in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <CgOrganisation className="content-icon" />
            Dayananda Sagar College of Engineering
          </h4>
          <p>Operating Systems, AI/ML, Web Engineer, Logic Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default ExpTimeline;
