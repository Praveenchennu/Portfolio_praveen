import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import bannerimg from "../assets/img/header-img.png";
import "animate.css";

const Banner = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200);
  const fullText = "Full Stack Developer | System Design Enthusiast!!";
  const period = 2000;

  useEffect(() => {
    async function trackVisitor() {
      const browserName = navigator.userAgent;

      try {
        await fetch("https://portfolio-backend-fois.onrender.com/track-visitor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ browser: browserName }),
        });
      } catch (error) {
        console.log("Tracking failed:", error);
      }
    }

    trackVisitor();
  }, []);

  // Typewriter effect
  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    const updated = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updated);

    setDelta(isDeleting ? 60 : 120);

    if (!isDeleting && updated === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updated === "") {
      setIsDeleting(false);
    }
  };

  return (
    <SectionWrapper id="banner" direction="left" className="banner">
      <Container>
        <Row className="flex-column-reverse flex-lg-row align-items-center">

          {/* LEFT TEXT BLOCK */}
          <Col xs={12} lg={7} className="animate__animated animate__fadeIn">
            <motion.span
              className="tagline fs-5 mt-4 d-inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to my portfolio ..!
            </motion.span>

            <motion.h1
              className="name"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Hi... 👋 I’m Praveen Chennu.
              <br />
              <span className="txt-rotate">
                <span className="wrap">{text}</span>
              </span>
            </motion.h1>

            <motion.p
              className="des fs-5 pb-4 justify-text"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="tagline pb-0 mb-0 fs-5">
                
              </span>{" "}
              I’m a results-oriented Full Stack Developer currently contributing to @Meril, a global product-based company, where I build scalable systems, optimize end-to-end performance, and deliver clean, maintainable, production-grade code.

              With a deep interest in architecture design, API engineering, and high-quality UI/UX, I focus on creating solutions that are technically sound, user-focused, and aligned with real business impact. I thrive on learning, innovating, and building technology that truly makes a difference.
            </motion.p>

            <motion.a
              href="#connect"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <button className="border letsconnect p-3 rounded-3 fs-5 d-inline-flex align-items-center">
                Let’s Connect
                <ArrowRightCircle className="arrow ms-2 fs-4" />
              </button>
            </motion.a>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} lg={5} className="p-5 d-flex justify-content-center">
            <motion.div
              className="neon-ring-wrapper"
              whileHover={{ scale: 1.03, rotateY: 8, rotateX: -4 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
            >
              <motion.img
                src={bannerimg}
                alt="portrait"
                className="bannerimg m-auto"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
              />
            </motion.div>
          </Col>

        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default Banner;
