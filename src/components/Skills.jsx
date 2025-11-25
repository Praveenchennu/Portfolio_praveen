import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import htmlicon from "../assets/img/skills icons/HTMLicon.png";
import cssicon from "../assets/img/skills icons/cssicon.png";
import jsicon from "../assets/img/skills icons/jsicon.png";
import pythonicon from "../assets/img/skills icons/pythonicon.png";
import github from "../assets/img/skills icons/github icon.png";
import git from "../assets/img/skills icons/git icon.png";
import C from "../assets/img/skills icons/c++ icon.png";
import java from "../assets/img/skills icons/java icon.png";
import springboot from "../assets/img/skills icons/spring boot logo.png";
import API from "../assets/img/skills icons/API icon.webp";
import Reactjs from "../assets/img/reactjs.png";
import Node from "../assets/img/nodejs.png";
import Express from "../assets/img/expressjs.png";
import GitLab from "../assets/img/gitlab.png";
import Minio from "../assets/img/minio.png";
import cassandra from "../assets/img/cassandra.png";
import sql from "../assets/img/sql.png";

const skillsData = [
    { title: 'C++', icon: C },
    { title: 'Java', icon: java },
    { title: 'Python', icon: pythonicon },
    { title: 'HTML', icon: htmlicon },
    { title: 'CSS', icon: cssicon },
    { title: 'Spring Boot', icon: springboot },
    { title: 'JavaScript', icon: jsicon },
    { title: 'Reactjs', icon: Reactjs },
    { title: 'Node', icon: Node },
    { title: 'express', icon: Express },
    { title: 'APIs', icon: API },
    { title: 'Git', icon: git },
    { title: 'Gitlab', icon: GitLab },
    { title: 'GitHub', icon: github },
    { title: 'Minio', icon: Minio },
    { title: 'Cassandra', icon: cassandra },
    { title: 'SQL', icon: sql },
    
];

const Skills = () => {
    return (
        <div className="App px-4 pb-5" id="skills">
            <Container>
                <Row className='pb-4'>
                    <h1 className="head py-5">My Skills</h1>
                    <div className="skillscards d-flex flex-wrap justify-content-evenly ">
                        {skillsData.map((skill, index) => (
                            <Card
                                key={index}
                                className="skillcard col-4 col-sm-3 col-md-2 col-lg-2  m-2 ">

                                <Card.Img
                                    variant="top"
                                    className='animate__animated animate__zoomIn text-center mx-auto rounded'
                                    src={skill.icon}
                                    style={{ width: "70px ", height: "70px" }}
                                />
                                <Card.Title className='text-white text-center pt-3'><h5>{skill.title}</h5></Card.Title>

                            </Card>
                        ))}
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;
