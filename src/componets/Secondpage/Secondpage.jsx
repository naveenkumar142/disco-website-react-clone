import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Secondpage.css";
import headmd from "../assets/newonw.png";
import perosn from "../assets/person.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import barn from "../assets/barn.png";

export default function Secondpage() {
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

  const toggleFeatures = () => {
    setIsFeaturesVisible(!isFeaturesVisible);
  };
  const tableData = [
    { text: 'Members', number: 1000, total: 10000 },
    { text: 'Communities', number: 1, total:1 },
    { text: 'Admins', number: 1, total: 6},
    { text: 'Products', number: 10, total: 50 },
    { text: 'Product', number: 10, total: 100 },
    { text: 'Automations', number: 60, total: 600 },
  ];
  return (
    <Container className="second-page-container">
      <Container className="content-container ps-5 pe-5 conatinerdes">
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <img
              style={{ width: "200px", height: "auto" }}
              src={headmd}
              alt="Centered Image"
              className="centered-image"
            />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs={12} className="text-center">
            <p className="content-text">
              "Disco has enabled Monitor Deloitte to foster a virtual
              environment where current practitioners and alumni can connect in
              novel ways. With its user-friendly interface, versatile features,
              and prompt support, the platform has empowered us to unleash our
              creativity in forging meaningful connections with our alumni."
            </p>
          </Col>
        </Row>
        <Row className="mt-2 justify-content-center">
  <Col xs={12} md={3} className="text-start">
  <div className='d-flex align-items-center mt-5 'style={{marginTop:"50px"}}>
            <img src={barn} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
            <div className='d-flex flex-column'>
              <span style={{fontWeight:600,color:"#000"}}>Ehsan Merati</span>
              <p style={{fontSize:".875rem",fontWeight:"400",color:"#000"}}>Consultant, Monitor Deloitte</p>
            </div>
          </div>
  </Col>
</Row>

      </Container>
      <Container fluid className="d-none d-md-block">
      <div className="desktop-only ">
        <Row className="mt-5">
          <Col xs={12} className="text-center">
            <button className="btn btn-primary " style={{borderRadius:"40px",paddingLeft:"20px",paddingRight:"20px",borderRadius:"2px solid #4467f6",backgroundColor:"#4467f6",color:"white",padding:".375rem,1.125rem",fontWeight:500,lineHeight:1.5,borderRadius:"2.5rem"}}>All Features</button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <p style={{fontWeight:600,fontSize:"2.5rem",lineHeight:1.2}}>Find a plan to suit your team</p>
          </Col>
        </Row>
      </div>
      <Row className="mt-5">
        <Col xs={4} className="text-start" style={{fontSize:"1.25rem",fontWeight:600,color:"#000000"}}>Features</Col>
        <Col xs={4} className="text-center" style={{fontSize:"1.25rem",fontWeight:600,color:"#4467f6"}}>Pro</Col>
        <Col xs={4} className="text-end " style={{fontSize:"1.25rem",fontWeight:600,color:"#4467f6"}}>Organization</Col>
      </Row>
      <Row className="mt-2">
        <Col xs={12}>
          <hr />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={6} className="text-start" style={{fontWeight:600,fontSize:"1.5rem"}}>Usage</Col>
        <Col xs={6} className="text-end">
          <button className="btn btn-link" onClick={toggleFeatures}>
            <FontAwesomeIcon style={{color:"#000000"}} icon={isFeaturesVisible ? faCaretUp : faCaretDown} />
          </button>
        </Col>
      </Row>
      {isFeaturesVisible && (
          <Row className="mt-3">
          <Col xs={12}>
            {tableData.map((row, index) => (
              <Row key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f0f0f0', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                <Col xs={4}>{row.text}</Col>
                <Col xs={4}>{row.number}</Col>
                <Col xs={4}>{row.total}</Col>
              </Row>
            ))}
          </Col>
        </Row>
      )}
      <Row className="mt-3">
        <Col xs={12}>
          <hr />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12}></Col>
      </Row>







      <Row className="mt-3">
      <Col xs={6} className="text-start" style={{fontWeight:600,fontSize:"1.5rem"}}>Member Management & Communication</Col>
        <Col xs={6} className="text-end">
          <button className="btn btn-link" onClick={toggleFeatures}>
            <FontAwesomeIcon style={{color:"#000000"}} icon={isFeaturesVisible ? faCaretUp : faCaretDown} />
          </button>
        </Col>
      </Row>
      {isFeaturesVisible && (
          <Row className="mt-3">
          <Col xs={12}>
            {tableData.map((row, index) => (
              <Row key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f0f0f0', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                <Col xs={4}>{row.text}</Col>
                <Col xs={4}>{row.number}</Col>
                <Col xs={4}>{row.total}</Col>
              </Row>
            ))}
          </Col>
        </Row>
      )}
      <Row className="mt-3">
        <Col xs={12}>
          <hr />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12}></Col>
      </Row>










      <Row className="mt-3">
      <Col xs={6} className="text-start" style={{fontWeight:600,fontSize:"1.5rem"}}>Learning & Content</Col>
        <Col xs={6} className="text-end">
          <button className="btn btn-link" onClick={toggleFeatures}>
            <FontAwesomeIcon style={{color:"#000000"}} icon={isFeaturesVisible ? faCaretUp : faCaretDown} />
          </button>
        </Col>
      </Row>
      {isFeaturesVisible && (
          <Row className="mt-3">
          <Col xs={12}>
            {tableData.map((row, index) => (
              <Row key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f0f0f0', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                <Col xs={4}>{row.text}</Col>
                <Col xs={4}>{row.number}</Col>
                <Col xs={4}>{row.total}</Col>
              </Row>
            ))}
          </Col>
        </Row>
      )}
      <Row className="mt-3">
        <Col xs={12}>
          <hr />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12}></Col>
      </Row>















      <Row className="mt-3">
      <Col xs={6} className="text-start" style={{fontWeight:600,fontSize:"1.5rem"}}>Analytics & Insights</Col>
        <Col xs={6} className="text-end">
          <button className="btn btn-link" onClick={toggleFeatures}>
            <FontAwesomeIcon style={{color:"#000000"}} icon={isFeaturesVisible ? faCaretUp : faCaretDown} />
          </button>
        </Col>
      </Row>
      {isFeaturesVisible && (
          <Row className="mt-3">
          <Col xs={12}>
            {tableData.map((row, index) => (
              <Row key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f0f0f0', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                <Col xs={4}>{row.text}</Col>
                <Col xs={4}>{row.number}</Col>
                <Col xs={4}>{row.total}</Col>
              </Row>
            ))}
          </Col>
        </Row>
      )}
      <Row className="mt-3">
        <Col xs={12}>
          <hr />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12}></Col>
      </Row>














      <Row className="mt-3">
      <Col xs={6} className="text-start" style={{fontWeight:600,fontSize:"1.5rem"}}>Operations & Programming</Col>
        <Col xs={6} className="text-end">
          <button className="btn btn-link" onClick={toggleFeatures}>
            <FontAwesomeIcon style={{color:"#000000"}} icon={isFeaturesVisible ? faCaretUp : faCaretDown} />
          </button>
        </Col>
      </Row>
      {isFeaturesVisible && (
          <Row className="mt-3">
          <Col xs={12}>
            {tableData.map((row, index) => (
              <Row key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f0f0f0', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                <Col xs={4}>{row.text}</Col>
                <Col xs={4}>{row.number}</Col>
                <Col xs={4}>{row.total}</Col>
              </Row>
            ))}
          </Col>
        </Row>
      )}
      <Row className="mt-3">
        <Col xs={12}>
          <hr />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12}></Col>
      </Row>
    </Container>
    </Container>
  );
}
