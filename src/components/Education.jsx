import React from "react";
import { Container } from "react-bootstrap";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SectionWrapper from "./SectionWrapper";

import srkr from "../assets/img/Education/SRKR logo.png";
import narayana from "../assets/img/Education/Narayana logo.png";
import CSN from "../assets/img/Education/CSN_logo.png";

const educationData = [
  {
    year: "2020-24",
    title: "Bachelor's of Technology | ECE",
    logo: srkr,
    description:
      "Pursued my Bachelor's of Technology in Electronics and Communication Engineering at SRKR Engineering College, Bhimavaram.",
  },
  {
    year: "2018-20",
    title: "Intermediate | MPC",
    logo: narayana,
    description:
      "Completed my Higher Secondary Education in the MPC stream at Narayana Junior College, Bhimavaram.",
  },
  {
    year: "2018",
    title: "High School",
    logo: CSN,
    description:
      "Completed my High School from Dr. CSN English Medium School, Bhimavaram.",
  },
];

const Education = () => {
  return (
    <SectionWrapper id="education" direction="left" className="education pt-5">

      <Container className="education-journey pb-5">

        <h1 className="head pt-4 pb-4 text-white">Education</h1>

        <div className="timeline px-2">

          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">

              <div
                className="timeline-content d-flex flex-column flex-md-row mb-5 rounded-4 p-3"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* IMAGE */}
                <div className="d-flex align-items-center justify-content-center p-2">
                  <img
                    src={item.logo}
                    alt={item.title}
                    style={{
                      width: "140px",
                      height: "110px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* TEXT */}
                <div className="my-auto p-3">
                  <h4 className="fs-4 m-0 pb-1 text-white">
                    {item.title}
                    <span className="year ms-1">
                      ({item.year})
                      <TaskAltIcon className="ms-1 text-success" />
                    </span>
                  </h4>

                  <p className="fs-6 m-0 text-white-50">{item.description}</p>
                </div>

              </div>

            </div>
          ))}

        </div>
      </Container>

    </SectionWrapper>
  );
};

export default Education;
