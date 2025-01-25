import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';

import miniorange from '../assets/img/Experience/miniorange-logo.png';
import henotic_logo from '../assets/img/Experience/henotic_logo.jpg';
import destination from '../assets/img/Experience/destination.png';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Engineer | Intern',
      company: 'Miniorange',
      date: 'july - Dec 2024',
      icon: miniorange,
    },
    {
      title: 'Full Stack Developer | Summer Intern',
      company: 'Henotic technologies',
      date: 'Mar - May 2023',
      icon: henotic_logo,
    },
  ];

  return (
    <div className="App" id="experience">
      <Container className='py-5'>
        <h1 className="head pb-5 text-start text-white m-0">Work Experience</h1>
        <VerticalTimeline className="py-5">
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                color: '#000',
                padding: '17px',
                borderRadius: '30px',
                boxShadow: '0px 0px 5px rgb(198, 198, 198)',
                border:'7px solid rgb(111, 113, 120)',
                minWidth:'46%'
              }}
              contentArrowStyle={{
                borderRight: '7px solid rgb(211, 211, 211)',
              }}

              iconStyle={{
                background: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              icon={
                <div className="text-center bg-dark rounded-circle w-75">
                  <img
                    src={destination}
                    alt={`${experience.title} icon`}
                    style={{
                      objectFit: 'contain',
                      padding: '3px',
                    }}
                  />
                </div>
              }
            >
              <div className="d-flex rounded-lg">
                {/* Left Section: Image */}
                <div className="w-25 flex-shrink-0">
                  <img
                    src={experience.icon}
                    alt={experience.title}
                    className="w-75 object-cover"
                  />
                </div>

                {/* Right Section: Content */}
                <div className="w-75 p-6 flex flex-col justify-center">
                  <p className='fs-6 m-0'>
                    {experience.title}
                  </p>

                  <p
                    className="text-sm font-medium m-0"
                    style={{ fontFamily: 'Comic Neue' }}
                  >
                    {experience.company}
                  </p>
                  <p className="text-secondary mt-1">
                    {experience.date}
                  </p>

                </div>

              </div>


            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </div>
  );
};

export default Experience;
