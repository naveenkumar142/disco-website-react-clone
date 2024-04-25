import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Firstpage.css";
import dibble from "../assets/logo-dribble-removebg-preview.png";
import women from "../assets/1_EiB-Raq2FJz8Tn5XYxZ10Q_2x-removebg-preview.png";
import yspace from "../assets/york.png";
import foun from "../assets/in1.png";
import monitor from "../assets/214-2145755_deloitte-monitor-logo-hd-png-download-removebg-preview.png";
import clar from "../assets/6488bc341100eea8ecae2177_Disco-Showcase_Cilar-Logo-removebg-preview.png";
import pp5 from "../assets/tesla_logo_PNG8.png";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Firstpage() {
  const [showAnnually, setShowAnnually] = useState(true);

  const handleToggle = () => {
    setShowAnnually(!showAnnually);
  };
  return (
    <Container fluid className="mt-5 pt-5">
      <div className="text-center">
        <h1 className="heading-style display-4">Build your community </h1>
        <h1 className="heading-style display-4">end-to-end</h1>
        <p className="first-p">
          The world’s top communities use Disco to build, operate, and scale
          their community.
        </p>
        <Row className="justify-content-center">
          <Col xs={3} md={2}>
            <img src={dibble} alt="Image 1" className="img-fluid custom-img" />
          </Col>
          <Col xs={3} md={2}>
            <img src={women} alt="Image 2" className="img-fluid custom-img" />
          </Col>
          <Col xs={3} md={2}>
            <img src={yspace} alt="Image 3" className="img-fluid custom-img" />
          </Col>
          <Col xs={3} md={2}>
            <img src={foun} alt="Image 4" className="img-fluid custom-img" />
          </Col>
        </Row>
        <div></div>
        <Row className="justify-content-center">
          <Col className="mt-3" xs={3} md={2}>
            <img src={pp5} alt="Image 5" className="img-fluid custom-img" />
          </Col>
          <Col className="mt-4" xs={3} md={2}>
            <img src={monitor} alt="Image 6" className="img-fluid custom-img" />
          </Col>

          <Col className="mt-3" xs={3} md={2}>
            <img src={clar} alt="Image 7" className="img-fluid custom-img" />
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col xs={6} md={3} className="d-flex justify-content-center">
            <Button
              variant={showAnnually ? "primary" : "outline-primary"}
              onClick={handleToggle}
              className="me-3"
              style={{ borderRadius: "30px" }}
            >
              Annually
            </Button>
            <Button
              variant={!showAnnually ? "primary" : "outline-primary"}
              onClick={handleToggle}
              style={{ borderRadius: "30px" }}
            >
              Monthly
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          {showAnnually && (
            <Row className="justify-content-around">
              <Col xs={12} md={3} className="first1 mb-4 mb-md-4">
                <div className="content-box  text-center pt-4">
                  <h2 style={{ fontWeight: 600, fontSize: "1.25rem" }}>Pro</h2>
                  <div className="price-info">
                    <p>
                      <span style={{ fontSize: "3.5rem", fontWeight: 600 }}>
                        $76
                      </span>
                      <span style={{ fontWeight: 600 }}>/mo</span>
                    </p>
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: ".875rem",
                        lineHeight: "0",
                        opacity: ".6",
                      }}
                    >
                      Billed annually
                    </p>
                  </div>
                  <p style={{ fontWeight: 400, fontSize: "1.125rem" }}>
                    Launch your community
                  </p>
                  <hr className="my-4" style={{ color: "#71717a" }} />
                  <div
                    className="features text-left ps-4"
                    style={{ fontSize: ".875rem", fontWeight: 400 }}
                  >
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>1</span> Community
                    </p>
                    <p className="feature">
                      {" "}
                      <span style={{ fontWeight: 600 }}>10 </span>Learning
                      Products
                    </p>
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>14 </span> Admins
                    </p>
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>20 </span> Members
                    </p>
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>29 </span>Automations
                    </p>
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>5 </span> Deep Slack
                      integration
                    </p>
                  </div>
                  <hr className="my-4" />
                  <div className="text-left">
                    <p className="ms-4">
                      <strong>Pro includes:</strong>
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        textAlign: "left",
                        lineHeight: 1.8,
                      }}
                    >
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Basic
                        Branding
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Channels,
                        Threads & DM’s
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Deep Slack
                        integration
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Basic
                        Analytics
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Host Events
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Member groups
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Stripe,
                        Zapier, and Zoom integration
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Global Search
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Library
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Roles and
                        Permissions
                      </li>
                    </ul>
                  </div>
                  <button
                    className=" mt-5 ps-5 pe-5"
                    style={{
                      textAlign: "center",
                      paddingTop: ".5rem",
                      paddingBottom: ".55rem",
                      border: "1px solid #e4e4e7",
                      color: "#000",
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontSize: "14px",
                      width: "280px",
                    }}
                  >
                    Start your 14-day trial
                  </button>
                  <div className="divider my-2"></div>
                  <p className="text-center">See full features</p>
                </div>
              </Col>
              <Col xs={12} md={3} className="first2 mb-4 mb-md-4">
                <div className="content-box  text-center pt-4">
                  <h2 style={{ fontWeight: 600, fontSize: "1.25rem" }}>
                    Organization
                  </h2>
                  <div className="price-info">
                    <p>
                      <span style={{ fontSize: "3.5rem", fontWeight: 600 }}>
                        $359
                      </span>
                      <span style={{ fontWeight: 600 }}>/mo</span>
                    </p>
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: ".875rem",
                        lineHeight: "0",
                        opacity: ".6",
                      }}
                    >
                      Billed annually
                    </p>
                  </div>
                  <p style={{ fontWeight: 400, fontSize: "1.125rem" }}>
                    Operate and grow your community
                  </p>
                  <hr className="my-4" style={{ color: "#e4e4e7" }} />
                  <div
                    className="features text-left ps-4"
                    style={{ fontSize: ".875rem", fontWeight: 400 }}
                  >
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>1</span> Community
                    </p>
                    <p className="feature">
                      {" "}
                      <span style={{ fontWeight: 600 }}>100 </span>Learning
                      Products
                    </p>
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>140 </span> Admins
                    </p>
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>200 </span> Members
                    </p>
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>290 </span>Automations
                    </p>
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>50</span> Deep Slack
                      integration
                    </p>
                  </div>
                  <hr className="my-4" />
                  <div className="text-left">
                    <p className="ms-4">
                      <strong>Everything in Pro,plus:</strong>
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        textAlign: "left",
                        lineHeight: 1.8,
                      }}
                    >
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Full Custom
                        Branding
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Powerful AI
                        Co-Pilot
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Sell
                        Memberships
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Custom
                        Profile Fields
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Multiple Zoom
                        Accounts
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Advanced
                        Analytics and Reporting
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Stripe,
                        Zapier, and Zoom integration
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Global Search
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Library
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Roles and
                        Permissions
                      </li>
                    </ul>
                  </div>
                  <button
                    className=" mt-5 ps-5 pe-5"
                    style={{
                      textAlign: "center",
                      paddingTop: ".5rem",
                      paddingBottom: ".55rem",
                      border: "1px solid #1b1b1d",
                      color: "#fff",
                      borderRadius: "10px",
                      backgroundColor: "#1b1b1d",
                      fontSize: "14px",
                      width: "280px",
                    }}
                  >
                    Start your 14-day trial
                  </button>
                  <div className="divider my-2"></div>
                  <p className="text-center">See full features</p>
                </div>
              </Col>
              <Col xs={12} md={3} className="first3 mb-4 mb-md-4">
                <div className="content-box  text-center pt-4">
                  <h2 style={{ fontWeight: 600, fontSize: "1.25rem" }}>
                    Enterprise
                  </h2>
                  <h1
                    style={{
                      fontWeight: 600,
                      fontSize: "3.25rem",
                      lineHeight: 1.2,
                    }}
                  >
                    Custom
                  </h1>
                  <p
                    style={{
                      fontWeight: 400,
                      fontSize: "1.125rem",
                      lineHeight: 1.4,
                    }}
                  >
                    Built for large enterprises
                  </p>
                  <hr className="my-4" style={{ color: "#71717a" }} />
                  <div
                    className="features text-left ps-4"
                    style={{ fontSize: ".875rem", fontWeight: 400 }}
                  >
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>Multiple</span>{" "}
                      Communities
                    </p>
                    <p className="feature">
                      {" "}
                      <span style={{ fontWeight: 600 }}> Unlimited</span>{" "}
                      Learning Products
                    </p>
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>Unlimited</span> Admins
                    </p>
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>Unlimited</span>{" "}
                      Automations
                    </p>
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>Multiple</span>{" "}
                      Communities
                    </p>
                    <p className="feature">
                      <span style={{ fontWeight: 600 }}>Unlimited</span>{" "}
                      Automations
                    </p>
                  </div>
                  <hr className="my-4" />
                  <div className="text-left">
                    <p className="ms-4">
                      <strong>All features,plus:</strong>
                    </p>
                    <ul style={{ listStyle: "none", textAlign: "left" }}>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span>
                        Dedicated Success Lead
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span>Quarterly
                        Strategy Reviews{" "}
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Deep Slack
                        integration
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Custom
                        Training, Integration Services and Support
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span>Product
                        Roadmap Shaping
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> API
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Stripe,
                        Zapier, and Zoom integration
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Global Search
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Library
                      </li>
                      <li>
                        <span style={{ fontWeight: 600 }}>✓</span> Roles and
                        Permissions
                      </li>
                    </ul>
                  </div>
                  <button
                    className="buttonforone mt-2 ps-5 pe-5"
                    style={{
                      textAlign: "center",
                      paddingTop: ".2rem",
                      paddingBottom: ".25rem",
                      border: "1px solid #e4e4e7",
                      color: "#000",
                      borderRadius: "10px",
                      backgroundColor: "white",
                      fontSize: "14px",
                      width: "280px",
                    }}
                  >
                    Get in touch
                  </button>
                  <div className="divider my-2"></div>
                  <p className="text-center">See full features</p>
                </div>
              </Col>
            </Row>
          )}
          {!showAnnually && (
             <Row className="justify-content-around">
             <Col xs={12} md={3} className="first1 mb-4 mb-md-4">
               <div className="content-box  text-center pt-4">
                 <h2 style={{ fontWeight: 600, fontSize: "1.25rem" }}>Pro</h2>
                 <div className="price-info">
                   <p>
                     <span style={{ fontSize: "3.5rem", fontWeight: 600 }}>
                       $99
                     </span>
                     <span style={{ fontWeight: 600 }}>/mo</span>
                   </p>
                   <p
                     style={{
                       fontWeight: 500,
                       fontSize: ".875rem",
                       lineHeight: "0",
                       opacity: ".6",
                     }}
                   >
                     Billed annually
                   </p>
                 </div>
                 <p style={{ fontWeight: 400, fontSize: "1.125rem" }}>
                   Launch your community
                 </p>
                 <hr className="my-4" style={{ color: "#71717a" }} />
                 <div
                   className="features text-left ps-4"
                   style={{ fontSize: ".875rem", fontWeight: 400 }}
                 >
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>1</span> Community
                   </p>
                   <p className="feature">
                     {" "}
                     <span style={{ fontWeight: 600 }}>10 </span>Learning
                     Products
                   </p>
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>14 </span> Admins
                   </p>
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>20 </span> Members
                   </p>
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>29 </span>Automations
                   </p>
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>5 </span> Deep Slack
                     integration
                   </p>
                 </div>
                 <hr className="my-4" />
                 <div className="text-left">
                   <p className="ms-4">
                     <strong>Pro includes:</strong>
                   </p>
                   <ul
                     style={{
                       listStyle: "none",
                       textAlign: "left",
                       lineHeight: 1.8,
                     }}
                   >
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Basic
                       Branding
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Channels,
                       Threads & DM’s
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Deep Slack
                       integration
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Basic
                       Analytics
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Host Events
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Member groups
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Stripe,
                       Zapier, and Zoom integration
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Global Search
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Library
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Roles and
                       Permissions
                     </li>
                   </ul>
                 </div>
                 <button
                   className=" mt-5 ps-5 pe-5"
                   style={{
                     textAlign: "center",
                     paddingTop: ".5rem",
                     paddingBottom: ".55rem",
                     border: "1px solid #e4e4e7",
                     color: "#000",
                     borderRadius: "10px",
                     backgroundColor: "white",
                     fontSize: "14px",
                     width: "280px",
                   }}
                 >
                   Start your 14-day trial
                 </button>
                 <div className="divider my-2"></div>
                 <p className="text-center">See full features</p>
               </div>
             </Col>
             <Col xs={12} md={3} className="first2 mb-4 mb-md-4">
               <div className="content-box  text-center pt-4">
                 <h2 style={{ fontWeight: 600, fontSize: "1.25rem" }}>
                   Organization
                 </h2>
                 <div className="price-info">
                   <p>
                     <span style={{ fontSize: "3.5rem", fontWeight: 600 }}>
                       $499
                     </span>
                     <span style={{ fontWeight: 600 }}>/mo</span>
                   </p>
                   <p
                     style={{
                       fontWeight: 500,
                       fontSize: ".875rem",
                       lineHeight: "0",
                       opacity: ".6",
                     }}
                   >
                     Billed annually
                   </p>
                 </div>
                 <p style={{ fontWeight: 400, fontSize: "1.125rem" }}>
                   Operate and grow your community
                 </p>
                 <hr className="my-4" style={{ color: "#e4e4e7" }} />
                 <div
                   className="features text-left ps-4"
                   style={{ fontSize: ".875rem", fontWeight: 400 }}
                 >
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>1</span> Community
                   </p>
                   <p className="feature">
                     {" "}
                     <span style={{ fontWeight: 600 }}>100 </span>Learning
                     Products
                   </p>
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>140 </span> Admins
                   </p>
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>200 </span> Members
                   </p>
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>290 </span>Automations
                   </p>
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>50</span> Deep Slack
                     integration
                   </p>
                 </div>
                 <hr className="my-4" />
                 <div className="text-left">
                   <p className="ms-4">
                     <strong>Everything in Pro,plus:</strong>
                   </p>
                   <ul
                     style={{
                       listStyle: "none",
                       textAlign: "left",
                       lineHeight: 1.8,
                     }}
                   >
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Full Custom
                       Branding
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Powerful AI
                       Co-Pilot
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Sell
                       Memberships
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Custom
                       Profile Fields
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Multiple Zoom
                       Accounts
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Advanced
                       Analytics and Reporting
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Stripe,
                       Zapier, and Zoom integration
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Global Search
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Library
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Roles and
                       Permissions
                     </li>
                   </ul>
                 </div>
                 <button
                   className=" mt-5 ps-5 pe-5"
                   style={{
                     textAlign: "center",
                     paddingTop: ".5rem",
                     paddingBottom: ".55rem",
                     border: "1px solid #1b1b1d",
                     color: "#fff",
                     borderRadius: "10px",
                     backgroundColor: "#1b1b1d",
                     fontSize: "14px",
                     width: "280px",
                   }}
                 >
                   Start your 14-day trial
                 </button>
                 <div className="divider my-2"></div>
                 <p className="text-center">See full features</p>
               </div>
             </Col>
             <Col xs={12} md={3} className="first3 mb-4 mb-md-4">
               <div className="content-box  text-center pt-4">
                 <h2 style={{ fontWeight: 600, fontSize: "1.25rem" }}>
                   Enterprise
                 </h2>
                 <h1
                   style={{
                     fontWeight: 600,
                     fontSize: "3.25rem",
                     lineHeight: 1.2,
                   }}
                 >
                   Custom
                 </h1>
                 <p
                   style={{
                     fontWeight: 400,
                     fontSize: "1.125rem",
                     lineHeight: 1.4,
                   }}
                 >
                   Built for large enterprises
                 </p>
                 <hr className="my-4" style={{ color: "#71717a" }} />
                 <div
                   className="features text-left ps-4"
                   style={{ fontSize: ".875rem", fontWeight: 400 }}
                 >
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>Multiple</span>{" "}
                     Communities
                   </p>
                   <p className="feature">
                     {" "}
                     <span style={{ fontWeight: 600 }}> Unlimited</span>{" "}
                     Learning Products
                   </p>
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>Unlimited</span> Admins
                   </p>
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>Unlimited</span>{" "}
                     Automations
                   </p>
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>Multiple</span>{" "}
                     Communities
                   </p>
                   <p className="feature">
                     <span style={{ fontWeight: 600 }}>Unlimited</span>{" "}
                     Automations
                   </p>
                 </div>
                 <hr className="my-4" />
                 <div className="text-left">
                   <p className="ms-4">
                     <strong>All features,plus:</strong>
                   </p>
                   <ul style={{ listStyle: "none", textAlign: "left" }}>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span>
                       Dedicated Success Lead
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span>Quarterly
                       Strategy Reviews{" "}
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Deep Slack
                       integration
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Custom
                       Training, Integration Services and Support
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span>Product
                       Roadmap Shaping
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> API
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Stripe,
                       Zapier, and Zoom integration
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Global Search
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Library
                     </li>
                     <li>
                       <span style={{ fontWeight: 600 }}>✓</span> Roles and
                       Permissions
                     </li>
                   </ul>
                 </div>
                 <button
                   className="buttonforone mt-2 ps-5 pe-5"
                   style={{
                     textAlign: "center",
                     paddingTop: ".2rem",
                     paddingBottom: ".25rem",
                     border: "1px solid #e4e4e7",
                     color: "#000",
                     borderRadius: "10px",
                     backgroundColor: "white",
                     fontSize: "14px",
                     width: "280px",
                   }}
                 >
                   Get in touch
                 </button>
                 <div className="divider my-2"></div>
                 <p className="text-center">See full features</p>
               </div>
             </Col>
           </Row>
          )}
        </Row>
        <div className="mt-4">
        <p style={{fontSize:".875rem",lineHeight:1.5}}>All prices are in USD with applicable taxes added at checkout.
        <p style={{fontSize:".875rem",lineHeight:1.5}}>
*Owners are Admins with the extra visibility of the account billing</p>
        </p>
        </div>
        <div className="mt-4">
        <button className="plan-features-button rounded">
      View All Plan Features  <FontAwesomeIcon style={{marginLeft:"3px"}} icon={faArrowRight} />
    </button>
        </div>
      </div>
    </Container>
  );
}
