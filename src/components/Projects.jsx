import React, { useState } from 'react';
import { Button, Card, Carousel, Container, Row } from 'react-bootstrap';

import smart from "../assets/img/Projects/Smart Vehicle Sales system/Smart Vehicle Sales system.jpg";
import smart2 from "../assets/img/Projects/Smart Vehicle Sales system/Smart Vehicle Sales system 2.jpg";

import atm1 from "..//assets/img/Projects/ATM/ATM PHOTO.jpeg";

import fake1 from "../assets/img/Projects/Fake Logo Detection/faklogo (1).png";
import fake2 from "../assets/img/Projects/Fake Logo Detection/faklogo (2).png";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: "Smart Vehicle Sales System ",
      description:
        "The Smart Vehicle Sales System is an online platform that enables users to buy and sell vehicles efficiently. Developed using Java, Spring Boot, SQL, HTML, and CSS, javascript it provides a seamless user experience with a secure and dynamic environment. In real-time, this system connects sellers who want to list their vehicles with buyers looking to purchase, similar to popular e-commerce platforms but specialized in vehicle transactions.The backend is built using Java and Spring Boot, making the system scalable and efficient for handling various requests such as adding new listings, updating vehicle details, and processing orders. The Spring Boot framework simplifies the development of the web application by providing built-in tools for creating APIs, managing databases, and securing user data. SQL is used for managing the relational database, where all information about users, vehicle listings, orders, and reviews is stored. This structured approach is used for fast retrieval of information, especially when buyers search for vehicles based on filters like brand, price, year of manufacture, and condition. On the frontend, HTML and CSS , javascript are used to build a responsive and visually appealing user interface. Buyers can easily browse the platform, view detailed vehicle information, and add vehicles to their cart. The system also includes an admin panel...",
      techStack: "Java Full Stack",
      imgurls: [smart, smart2],
    },
    {
      title: "ATM card pin security and Privacy",
      description:
        "This project introduces a DYNAMIC color pattern system for secure PIN management. With 40 unique color combinations, it ensures enhanced security. Built using open-source libraries like Eigen, QT, and advanced graphics.",
      techStack: "Full Stack (Eigen, QT)",
      imgurls: [atm1],
    },
  ];

  return (
    <div className="projects App py-5 px-4" id="projects">
      <Container>
        <Row>
          <h1 className="head pb-3 text-start text-white m-0">Projects</h1>

          <div className="text-end pe-3 d-block d-md-none">{`Scroll to see more>>`}</div>

          <div className="projectcards d-flex justify-content-evenly ps-3">
            {projects.map((item, index) => (
              <div
                key={index}
                className="flip-card col-12 col-sm-10 col-md-7 col-lg-4 m-3"
              >
                <div
                  className={`flip-card-inner ${
                    expandedProject === index ? "flipped" : ""
                  }`}
                >
                  {/* FRONT SIDE */}
                  <div className="flip-card-front projectcard text-center">
                    <Carousel interval={5000} style={{ height: "280px" }}>
                      {item.imgurls.map((img, i) => (
                        <Carousel.Item key={i}>
                          <img
                            src={img}
                            className="w-100 m-auto p-4"
                            style={{
                              height: "235px",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>

                    <Card.Body>
                      <Card.Title className="text-white">{item.title}</Card.Title>
                      <Card.Text className="techstack fs-6 pt-2">{item.techStack}</Card.Text>

                      <Button
                        variant="outline-light"
                        className="rounded border-0 col-5"
                        onClick={() =>
                          setExpandedProject(
                            expandedProject === index ? null : index
                          )
                        }
                      >
                        See More
                      </Button>
                    </Card.Body>
                  </div>

                  {/* BACK SIDE */}
                  <div className="flip-card-back projectcard text-center">
                    <Card.Body>
                      <Card.Title className="text-white">{item.title}</Card.Title>
                      <Card.Text className="techstack fs-6">{item.techStack}</Card.Text>

                      <div className="scroll-description mt-3">
                        {item.description}
                      </div>

                      <Button
                        variant="outline-light"
                        className="rounded border-0 col-5 mt-3"
                        onClick={() => setExpandedProject(null)}
                      >
                        See Less
                      </Button>
                    </Card.Body>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
