import React from 'react';
import { Container, Row, Col ,Button} from 'react-bootstrap';
import deck from "./assets/onedexk.png";
import beja from "./assets/benhamin.jpg"
import logodeb from "./assets/logo-dribble-removebg-preview.png";
import mendo11 from "./assets/mendo1.png";
import simple from "./assets/simple.png";
import barn from "./assets/barn.png";
import equilar from "./assets/eqilar.png";
import baker from "./assets/baker.jpg";
import octo from "./assets/octo.png";
import perry from "./assets/perry.png";
import york1 from "./assets/york.png";
import nafees from "./assets/nafees.png";
const columnStyle = {
  padding: '10px',
  height: '420px',
  overflow: 'hidden',
};

const rowStyle = {
  marginBottom: '20px',
  marginleft:"20px"
};


export default function Scroll() {
  return (
    <Container fluid className='mt-5'>
      <h2 className='mb-5' style={{color:"#000",fontSize:"2.5rem",fontWeight:"600",textAlign:"center"}}>Why customers love Disco</h2>
      <div>
      <Row className="justify-content-center" style={rowStyle}>
      <Col sm={3} className="mb-3 ms-3 me-1 ps-4 sixdiv " style={{...columnStyle,backgroundColor:"white",borderRadius:"2.2rem",border:"2px solid lightgray"}}>
          <div className='mt-5'>
            <img src={deck} alt="Image" style={{ maxWidth: '40%' ,height:"50%"}} />
          </div>
          <div className='mt-5' style={{fontWeight:500,fontSize:"1rem",}}>
            <p className='mt-4'>“Running a program is incredibly operationally intensive. With Disco there are so many parts that can now have a much more product-guided and product-led experience than we were previously doing."</p>
          </div>
          <div className='d-flex align-items-center mt-5 'style={{marginTop:"50px"}}>
            <img src={beja} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
            <div className='d-flex flex-column'>
              <span style={{fontWeight:600,color:"#000"}}>Ben Plummer</span>
              <p style={{fontSize:".875rem",fontWeight:"400",color:"#000"}}>Sr. Learning Experience Designer</p>
            </div>
          </div>
        </Col>
        <Col sm={3} className="mb-3 ms-3 me-1 ps-4 sixdiv " style={{...columnStyle,backgroundColor:"white",borderRadius:"2.2rem",border:"2px solid lightgray"}}>
          <div className='mt-4'>
            <img src={logodeb} alt="Image" style={{ maxWidth: '40%' ,height:"50%"}} />
          </div>
          <div className='mt-4' style={{fontWeight:500,fontSize:"1rem",}}>
            <p>“Disco has allowed us to build a scalable education offering at Dribbble. The subgroups function lets us break the hundred of students who enroll in each cohort into mentorship groups, giving each student a personal, hands-on & intimate learning experience.”</p>
          </div>
          <div className='d-flex align-items-center mt-5 'style={{marginTop:"50px"}}>
            <img src={mendo11} alt="Profile" style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '10px' }} />
            <div className='d-flex flex-column'>
              <span style={{fontWeight:600,color:"#000"}}>Madeliene Sava</span>
              <p style={{fontSize:".875rem",fontWeight:"400",color:"#000"}}>Program Manager, Dribbble</p>
            </div>
          </div>
        </Col>
        <Col sm={3} className="mb-3 ms-3 me-1 ps-4 sixdiv " style={{...columnStyle,backgroundColor:"white",borderRadius:"2.2rem",border:"2px solid lightgray"}}>
          <div className='mt-4'>
            <img src={simple} alt="Image" style={{ maxWidth: '40%' ,height:"50%"}} />
          </div>
          <div className='mt-3' style={{fontWeight:500,fontSize:"1rem",}}>
            <p className='mt-4'>“Disco is the most thoughtful, creative, and well designed LMSs on the market. It is the only product we’ve found that tackles four use cases: one-off events, live cohorts, self-paced courses and community hot spot. If you need this kind of flexibility I suggest you hit the dance floor and Disco!”</p>
          </div>
          <div className='d-flex align-items-center mt-5 'style={{marginTop:"50px"}}>
            <img src={barn} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
            <div className='d-flex flex-column'>
              <span style={{fontWeight:600,color:"#000"}}>Ryan Goble</span>
              <p style={{fontSize:".875rem",fontWeight:"400",color:"#000"}}>Chief Learning Officer, Irrational Labs</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center" style={rowStyle}>
      <Col sm={3} className="mb-3 ms-3 me-1 ps-4 sixdiv " style={{...columnStyle,backgroundColor:"white",borderRadius:"2.2rem",border:"2px solid lightgray"}}>
          <div className='mt-5'>
            <img src={equilar} alt="Image" style={{ maxWidth: '40%' ,height:"50%"}} />
          </div>
          <div className='mt-5' style={{fontWeight:500,fontSize:"1rem",}}>
            <p className='mt-4'>“It was hard to find a platform for our learning community that aligned with our goals of live interactive learning AND kept us. It is easy to say that we would not have been able to grow as fast as a school if it weren’t for Disco.”</p>
          </div>
          <div className='d-flex align-items-center mt-5 'style={{marginTop:"50px"}}>
            <img src={baker} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
            <div className='d-flex flex-column'>
              <span style={{fontWeight:600,color:"#000"}}>Hannah Baker</span>
              <p style={{fontSize:".875rem",fontWeight:"400",color:"#000"}}>Co-Founder, The Fountain Institute</p>
            </div>
          </div>
        </Col>

        <Col sm={3} className="mb-3 ms-3 me-1 ps-4 sixdiv " style={{...columnStyle,backgroundColor:"white",borderRadius:"2.2rem",border:"2px solid lightgray"}}>
          <div className='mt-4'>
            <img src={octo} alt="Image" style={{ maxWidth: '40%' ,height:"50%"}} />
          </div>
          <div className='mt-4' style={{fontWeight:500,fontSize:"1rem",}}>
            <p>“Disco allows our creative and nonlinear thinking to be available for everyone. It looks awesome, it inspires like a pop artist, and it dances straight into the lives of our members. We also love the innovation that is happening at Disco, new elements and solutions are constantly presented to us.”</p>
          </div>
          <div className='d-flex align-items-center mt-5 'style={{marginTop:"50px"}}>
            <img src={perry} alt="Profile" style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '10px' }} />
            <div className='d-flex flex-column'>
              <span style={{fontWeight:600,color:"#000"}}>Perry Knoppert</span>
              <p style={{fontSize:".875rem",fontWeight:"400",color:"#000"}}>Founder, The Octopus Movement</p>
            </div>
          </div>
        </Col>
        <Col sm={3} className="mb-3 ms-3 me-1 ps-4 sixdiv " style={{...columnStyle,backgroundColor:"white",borderRadius:"2.2rem",border:"2px solid lightgray"}}>
          <div className='mt-4'>
            <img src={york1} alt="Image" style={{ maxWidth: '50%' ,height:"50%"}} />
          </div>
          <div className='mt-3' style={{fontWeight:500,fontSize:"1rem",}}>
            <p className='mt-4'>“Disco is the most thoughtful, creative, and well designed LMSs on the market. It is the only product we’ve found that tackles four use cases: one-off events, live cohorts, self-paced courses and community hot spot. If you need this kind of flexibility I suggest you hit the dance floor and Disco!”</p>
          </div>
          <div className='d-flex align-items-center mt-5 'style={{marginTop:"50px"}}>
            <img src={nafees} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
            <div className='d-flex flex-column'>
              <span style={{fontWeight:600,color:"#000"}}>Nafis Ahmed</span>
              <p style={{fontSize:".875rem",fontWeight:"400",color:"#000"}}>Entrepreneruship Manager, YSpace</p>
            </div>
          </div>
        </Col>
      </Row>
      </div>
      <div className="text-center" style={{backgroundColor:"#292424",borderRadius:"1rem"}}>
            <div style={{color:"#fff",fontWeight:600,fontSize:"3rem",lineHeight:1.2}} className='pt-5'>
              <p >Ready to start building your</p>
              <p>community?</p>
            </div>
            <div style={{ height: '3rem' }}></div> {/* 3 line space */}
            <div style={{color:"#fff",fontSize:"1rem",fontWeight:400}}>
              <p>Experience the transformative power of Disco’s comprehensive community platform.</p>
            </div>
            <div style={{ height: '3rem' }}></div> {/* 3 line space */}
            <div className='pb-5'>
              <Button variant="primary" style={{border:"1px solid #4467f6",backgroundColor:"#4467f6",color:"#fff",borderRadius:".75rem",fontSize:"1rem",fontWeight:500,padding:".625rem 1.5rem"}}>Start free 14-day trial</Button>
            </div>
          </div>
    </Container>
  );
}
