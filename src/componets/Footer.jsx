import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css";

export default function Footer() {
  return (
    <Container fluid >
    <div style={{backgroundColor:"black",color:"#fff",borderRadius:"8px"}} className='pt-5 ps-3'>
    <hr style={{ width: '100%', borderWidth: '2px', borderColor: '#fff',marginTop:"20px" }} />
    <Row className='justify-content-evenly'>
        <Col md={2}>
        <h4>Get Started</h4>
            <ul className="list-unstyled">
              <li>Pricing</li>
              <li>Platform Tour</li>
              <li>Book a Live Demo</li>
              <li>Start Free Trial</li>
              <li>Log In</li>
            </ul>
          </Col>
          <Col md={2}>
            <h4>Resources</h4>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Community</li>
              <li>Learning Hub</li>
              <li>Events</li>
              <li>Learning Community Directory</li>
              <li>Customer Stories</li>
              <li>Product Updates</li>
              <li>Encyclopedia</li>
              <li>Partner with Us</li>
            </ul>
          </Col>
          <Col md={2}>
            <h4>Comparison</h4>
            <ul className="list-unstyled">
            <li>Disco Alternatives</li>
              <li>Disco vs Circle</li>
              <li>Disco vs Mighty Networks</li>
              <li>Disco vs Kajabi</li>
              <li>Disco vs Thinkific</li>
              <li>Disco vs Teachable</li>
              <li>Disco vs Skool</li>
            </ul>
          </Col>
          <Col md={2}>
            <h4>Features</h4>
            <ul className="list-unstyled">
              <li>Disco AI</li>
              <li>Cohort-Based Courses</li>
              <li>Slack Integration</li>
              <li>Learning Products</li>
              <li>Automations & Productivity</li>
              <li>Insights & Analytics</li>
              <li>Advanced Integrations</li>
              <li>Comparison</li>
            
            </ul>
          </Col>
          <Col md={2}>
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Our Manifesto</li>
              <li>Careers</li>
              <li>Company News</li>
              <li>Contact Us</li>
            </ul>
          </Col>
        </Row>
        <hr style={{ width: '100%', borderWidth: '2px', borderColor:"#fff" }} /> 
        <Container fluid className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-left">
        <div style={{ color: '#a1a1aa', fontSize: '.75rem' }}>
          Made with ❤️ remotely 
          <p>© 2020-2024 Disco Inc.</p>
        </div>
        <div className="d-flex align-items-center justify-content-evenly" style={{ fontSize: '.75rem', fontWeight: '400', color: '#a1a1aa' }}>
          <span className="mr-md-2 me-3">Privacy Policy</span>
          <span className="ml-md-2">Terms of Service</span>
        </div>
      </Container>
    </div>
    </Container>
  );
}
