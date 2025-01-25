import React, { useState } from 'react';
import { Button, Card, Carousel, Container, Row } from 'react-bootstrap';
import smart from "../assets/img/Projects/Smart Vehicle Sales system/Smart Vehicle Sales system.jpg"
import smart2 from "../assets/img/Projects/Smart Vehicle Sales system/Smart Vehicle Sales system 2.jpg"

import atm1 from "..//assets/img/Projects/ATM/ATM PHOTO.jpeg"

import fake1 from "../assets/img/Projects/Fake Logo Detection/faklogo (1).png";
import fake2 from "../assets/img/Projects/Fake Logo Detection/faklogo (2).png";

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState(null);

    const projects = [
        {
            title: "Smart Vehicle Sales System ",
            description: "The Smart Vehicle Sales System is a secure online platform connecting buyers and sellers in real time. Developed as a Java Full Stack project using HTML, CSS, JavaScript, Java, Spring Boot, and SQL, it streamlines vehicle transactions with easy listing, updates, and order management, powered by a scalable backend.",
            techStack: "Java Full Stack",
            imgurls: [smart,smart2],
        },
        {
            title: "ATM card pin security and Privacy",
            description: "This project introduces a DYNAMIC color pattern system for secure PIN management. With 40 unique color combinations, it ensures enhanced security. Built using open-source libraries like Eigen, QT, and advanced graphics, this project highlights innovation in user-centric security solutions.",
            techStack: "Full Stack (Eigen, QT)",
            imgurls: [atm1],
        },
    ];

    return (
        <div className="projects App py-5 px-4" id="projects">
            <Container>
                <Row>
                    <h1 className="head pb-3 text-start text-white m-0">Projects</h1>
                    <div className='text-end pe-3 d-block d-md-none'>{`Scroll to see more>>`}</div>
                    <div className="projectcards d-flex justify-content-evenly ps-3">
                        
                        {projects.map((item, index) => (
                            <Card
                                key={index}
                                className={`projectcard col-12 col-sm-10 col-md-7 col-lg-4 m-3 text-center ${expandedProject === index ? "expanded-card" : ""
                                    }`}
                                style={{
                                    backgroundColor: "#212529",
                                    color: "#fff",
                                    transition: "height 0.3s ease",
                                    height: expandedProject === index ? "auto" : "420px",
                                    overflow: expandedProject === index ? "visible" : "hidden",
                                }}
                            >
                                <Carousel interval={5000} style={{ height: '280px' }}>
                                    {item.imgurls.map((img, imgIndex) => (
                                        <Carousel.Item key={imgIndex}>
                                            <img
                                                src={img}
                                                className="w-100 m-auto p-4"
                                                alt={`Slide ${imgIndex}`}
                                                style={{ height: '235px', objectFit: 'cover', borderRadius: '10px' }}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                                <Card.Body>
                                    <Card.Title className="text-white">{item.title}</Card.Title>
                                    <Card.Text className="techstack fs-6 pt-2">{item.techStack}</Card.Text>
                                    {expandedProject === index && (
                                        <p className="pt-4">{item.description}</p>


                                    )}
                                    <div className="mt-3 d-flex justify-content-evenly">

                                        <Button
                                            variant="outline-light"
                                            className="rounded border-0 col-5"
                                            onClick={() =>
                                                setExpandedProject(
                                                    expandedProject === index ? null : index
                                                )
                                            }
                                        >
                                            {expandedProject === index ? "See Less" : "See More"}
                                        </Button>
                                        {/* <Button
                                            variant="outline-light"
                                            className="rounded border-0 col-5"
                                        >
                                            DEMO
                                        </Button> */}
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;
