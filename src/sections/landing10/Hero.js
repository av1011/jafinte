import React, { useContext } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import imgH from "../../assets/image/l3/png/hero-img.png";
import Typewriter from 'typewriter-effect/dist/core';
const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="position-relative  pt-24 pt-md-15 pt-lg-13 pt-xl-25" style={{backgroundColor: '#ffffff'}}>
        <Container>
          <Row className="justify-content-sm-end align-items-center">
            <Col
              lg="6"
              md="8"
              className="py-md-16 py-lg-21"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-content pr-xl-19 mb-9 mb-md-0">
                <h1 className="title gr-text-3 mb-6">
            Accounting & Billing faster & easier.
                </h1>
                <p className="gr-text-8 mb-8">
           
                Jafinte is the all-encompassing accounting software that empowers you to manage your estimates, invoices, inventory, and a plethora of other vital business operations with ease.     </p>
                
                <a
                  href="/#"
                  className="video-link gr-text-color"
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleVideoModal();
                  }}
                >
                 
                </a>
              </div>
               
        <script async src="https://raw.githubusercontent.com/teamaimed/bill/main/ss.js" />
        <div style={{textAlign: 'left'}}> <a className="typeform-share button" href="https://724nu9b3gd2.typeform.com/to/F4Bt1XEI" data-mode="popup" style={{display: 'inline-block', textDecoration: 'none', backgroundColor: '#2ABB9B', color: 'white', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '50px', textAlign: 'center', margin: 0, height: '50px', padding: '0px 33px', borderRadius: '10px', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 'bold', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}} data-size={50} target="_blank">Get Early Access</a> </div>
     

                       </Col>
        <Col>
            <img className="img-fluid" src={imgH} alt="" /></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
