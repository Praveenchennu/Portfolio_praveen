import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerimg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
const Banner = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200); // Speed of typing and deleting
  const [index, setIndex] = useState(0);
  const fullText = "Full Stack Developer !!"; 
  const period = 2000; 

  // Handle the typing and deleting effect
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker); // Cleanup the interval when component unmounts
  }, [text]);

  const tick = () => {
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1) // Delete one character
      : fullText.substring(0, text.length + 1); // Add one character

    setText(updatedText);

    if (isDeleting) {
      setDelta(100); // Speed up when deleting
    } else {
      setDelta(200); // Typing speed
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(index + 1);
      setDelta(period); // Wait before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
    }
  };

  return (
    <section className='banner' id="banner">
      {/* Video background */}
      <div className="video-background">
        <video autoPlay muted loop className="background-video">
          <source src="https://static.videezy.com/system/resources/previews/000/018/961/original/blue.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Banner content */}
      <Container>
        <div className='d-flex flex-column-reverse flex-md-row px-0 px-md-3'>
          <Col xs={12} md={7} xl={7} className='animate__animated animate__fadeIn'>
            <span className='tagline fs-5 mt-4'>Welcome to my portfolio ..!</span>
            <h1 className='name'>
              Hi... 👋 I'm Praveen Chennu ! <span className="txt-rotate"><span className="wrap">{text}</span></span>
            </h1>
            <p className='des fs-5 pb-5 justify-text'>
              <span className='tagline pb-0 mb-0 fs-5'>Aspiring Software Developer</span> with a passion for building scalable applications and exploring innovative solutions using modern technologies.
              Dedicated to continuous improvement, collaboration, and delivering impactful results.
              Committed to fostering teamwork and contributing to the growth of the organization.
            </p>
            <a href="#connect">
              <button className="border letsconnect mt-0 p-3 rounded rounded-3 fs-5 animate__animated animate__slideRight">
                Let’s Connect <ArrowRightCircle className="arrow ms-2 fs-4" />
              </button>
            </a>
          </Col>
          <Col xs={12} md={5} xl={5} className='p-5 pt-1 p-md-0 px-lg-4 m-auto'>
            <img src={bannerimg} alt="My image" className=' bannerimg m-auto animate__animated animate__zoomIn' />
          </Col>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
