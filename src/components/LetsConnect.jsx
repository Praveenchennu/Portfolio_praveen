import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import touch from "../assets/img/get_in_touch.png";

const LetsConnect = () => {
  const [send, setSend] = useState("Send");
  const [statusColor, setStatusColor] = useState();
  const [showAnimation, setShowAnimation] = useState(false);
  const my_access_key = import.meta.env.VITE_APP_ACCESS_KEY;

  const formdetails = async (event) => {
    event.preventDefault();
    setSend("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", my_access_key);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSend("Sent!");
        setShowAnimation(true);
        setTimeout(() => {
          setSend("Send");
          setStatusColor("black");
          setShowAnimation(false);
          event.target.reset();
        }, 3000);
      } else {
        setSend("Failed !!😢");
        setStatusColor("red");
        setTimeout(() => setSend("Send"), 3300);
      }
    } catch (error) {
      setSend("Failed !!😢");
      setStatusColor("red");
      setTimeout(() => setSend("Send"), 3000);
    }
  };

  return (
    <div className="connect App py-5 px-4" id="connect">
      <Container className="py-5">
        <Row>
          <div className="innerconnect d-flex justify-content-center border rounded-5 px-5 py-2">
            <form
              xs={12}
              md={6}
              className="col-lg-6 animate__animated animate__fadeIn"
              onSubmit={formdetails}
            >
              <div className="col-11">
                <h1 className="head pb-3 pt-3">Get In Touch</h1>

                <div className="ps-3 text-center">
                  <div className="fields d-flex justify-content-between w-100">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First name"
                      className="field form-control p-3"
                      style={{
                        background: "#f6f6f6",
                        color: "#000",
                        borderRadius: "12px",
                      }}
                      required
                    />

                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last name"
                      className="field form-control p-3"
                      style={{
                        background: "#f6f6f6",
                        color: "#000",
                        borderRadius: "12px",
                      }}
                      required
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="field form-control col-12 p-3 mt-3"
                    style={{
                      background: "#f6f6f6",
                      color: "#000",
                      borderRadius: "12px",
                    }}
                    required
                  />

                  <textarea
                    name="message"
                    placeholder="Message"
                    className="field form-control col-12 p-3 mt-3"
                    style={{
                      background: "#f6f6f6",
                      color: "#000",
                      minHeight: "140px",
                      borderRadius: "12px",
                    }}
                    required
                  ></textarea>

                  <div className="status-container pb-3 mt-4">
                    <button
                      type="submit"
                      className="letsconnect rounded col-4 w-auto border"
                      style={{ color: statusColor }}
                    >
                      <span>{send}</span>
                    </button>

                    {showAnimation && send === "Sent!" && (
                      <div className="sent-animation" style={{ color: "white", marginTop: "10px" }}>
                        ✔ Email Sent Successfully...!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>

            <div className="m-auto d-none d-md-block col-md-6 col-lg-6 col-xl-4 p-0">
              <img src={touch} alt="Get In Touch" className="getintouch" />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LetsConnect;
