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
            description: " The Smart Vehicle Sales System is an online platform that enables users to buy and sell vehicles efficiently. Developed using Java, Spring Boot, SQL, HTML, and CSS, javascript it provides a seamless user experience with a secure and dynamic environment. In real-time, this system connects sellers who want to list their vehicles with buyers looking to purchase, similar to popular e-commerce platforms but specialized in vehicle transactions.The backend is built using Java and Spring Boot, making the system scalable and efficient for handling various requests such as adding new listings, updating vehicle details, and processing orders. The Spring Boot framework simplifies the development of the web application by providing built-in tools for creating APIs, managing databases, and securing user data. SQL is used for managing the relational database, where all information about users, vehicle listings, orders, and reviews is stored. This structured approach is used for fast retrieval of information, especially when buyers search for vehicles based on filters like brand, price, year of manufacture, and condition.On the frontend, HTML and CSS , javascript are used to build a responsive and visually appealing user interface. Buyers can easily browse the platform, view detailed vehicle information, and add vehicles to their cart. The design adapts to different screen sizes, ensuring an optimal experience on both desktop and mobile devices.The system also includes an admin panel, which allows administrators to monitor and manage transactions, user activity, and vehicle listings in real time. This helps in maintaining the integrity of the platform, preventing fraudulent activities, and ensuring that all transactions are secure. Spring Security is integrated to provide robust user authentication and authorization, ensuring that data privacy is maintained and only authorized users have access to specific features based on their roles, whether as buyers, sellers, or administrators.In real-world applications, this system can be used by dealerships to manage their inventory, track sales, and communicate with customers.PAYMENT GATEWAY INTEGRATION(Razorpay)The backend will generate an order ID using Razorpay APIs.The frontend captures payment details and sends them to Razorpay.Razorpay processes the payment and returns a payment success/failure response.The backend verifies the payment status and updates the order in the database.RAZORPAY(Best for Indian Market & Simple to Integrate)Ease of Integration: Provides Java SDK and REST APIs that work well with Spring Boot.Supports Multiple Payment Methods: UPI, Cards, Net Banking, and Wallets.Secure Transactions: Comes with built-in PCI DSS(Payment Card Industry Data Security Standard)compliance.",
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
