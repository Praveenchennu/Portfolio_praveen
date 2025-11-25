import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionWrapper from "./SectionWrapper";
import { Container } from "react-bootstrap";

// IMAGES
import Meril from "../assets/img/Experience/Meril.png";
import chaturaIT from "../assets/img/Experience/chaturaIT.png";
import Byts from "../assets/img/Experience/Bytslogo.png";
import destination from "../assets/img/Experience/destination.png";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer-1 | Full Time",
      company: "Meril (NUVO AI)",
      date: "September 2025 – Present",
      icon: Meril,
    },
    {
      title: "Software Development & Instructor | Full Time",
      company: "ChaturaIT Learnings",
      date: "June 2025 – Sep 2025",
      icon: chaturaIT,
    },
    {
      title: "Graduate Engineering Trainee | Internship",
      company: "Byts India",
      date: "Oct 2024 – Jan 2025",
      icon: Byts,
    },
  ];

  return (
    <SectionWrapper
      id="experience"
      direction="right"
      className="experience-section"
    >
      <Container className="py-5">
        <h1 className="head pb-5 text-start text-white m-0">
          Work Experience
        </h1>

        <VerticalTimeline className="py-4">

          {experiences.map((exp, i) => (
            <VerticalTimelineElement
              key={i}
              contentStyle={{
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(12px)",
                color: "#fff",
                padding: "22px",
                borderRadius: "22px",
                boxShadow: "0px 0px 20px rgba(0,255,255,0.15)",
                border: "1px solid rgba(0,255,255,0.15)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(0,255,255,0.2)",
              }}
              iconStyle={{
                background: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(0,255,255,0.5)",
              }}
              icon={
                <div className="text-center bg-dark rounded-circle w-75">
                  <img
                    src={destination}
                    alt="icon"
                    style={{
                      padding: "4px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              }
            >
              {/* CARD CONTENT */}
              <div
                className="d-flex flex-wrap gap-3"
                style={{ alignItems: "center" }}
              >
                {/* LEFT LOGO */}
                <div
                  className="flex-shrink-0"
                  style={{
                    width: "80px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={exp.icon}
                    alt={exp.title}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "contain",
                      filter: "drop-shadow(0px 0px 8px rgba(0,255,255,0.4))",
                    }}
                  />
                </div>

                {/* RIGHT TEXT */}
                <div
                  className="flex-grow-1"
                  style={{ minWidth: "220px" }}
                >
                  <p className="m-0 fs-5 fw-bold" style={{ color: "#ffffff" }}>
                    {exp.title}
                  </p>

                  <p
                    className="m-0 fs-6"
                    style={{
                      color: "#00eaff",
                      fontWeight: 600,
                      marginTop: "2px",
                    }}
                  >
                    {exp.company}
                  </p>

                  <p
                    className="mt-2 fs-6"
                    style={{
                      color: "#bfbfbf",
                      letterSpacing: "0.3px",
                    }}
                  >
                    {exp.date}
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}

        </VerticalTimeline>
      </Container>
    </SectionWrapper>
  );
};

export default Experience;
