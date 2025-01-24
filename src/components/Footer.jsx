import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";


const Footer = () => {
    return (
        <div className='App ' id='footer'>
            <Container>

                <Row>
                    <Col size={12} sm={6}>
                        <h1 className="foothead pt-5 pb-4 d-none d-md-block">My Profile</h1>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end py-4">
                        <h2 className='head py-2'> Follow Me on...</h2>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/chennu-anu-praveen-kumar-6a5733249"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://github.com/Shankarkasarapu"><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://www.instagram.com/__praveen_chennu/?utm_source=ig_web_button_share_sheet"><img src={navIcon3} alt="Icon" /></a>
                            <a href="https://leetcode.com/praveenchennu439/"><img src={navIcon4} alt="Icon" /></a>

                            
                        </div>
                        <p className='pt-3'>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Footer