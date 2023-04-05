import React from "react";
import Link from "../../../components/Link";
import { Container, Row, Col } from "react-bootstrap";

import imgHero from "../../../assets/image/l4/png/invo.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section bg-default-2 pt-lg-15 pb-13 pb-lg-24">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col sm="10" lg="7">
              <div
                className="content-img pr-9"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <img
                  src={imgHero}
                  alt=""
                  
                />
              </div>
            </Col>
            <Col sm="10" lg="5">
              <div className="content-text pt-11 pt-lg-0 ps-xl-7">
                <h2 className="gr-text-4 mb-7 heading-color">
             Professional Invoices <br className="d-none d-lg-block" />
                  
                </h2>
                <p className="gr-text-8 mb-0 text-color-opacity">
                Revolutionize your invoicing with Jafinte - the leading platform for creating professional, compliant invoices in just 5 minutes. Say goodbye to long wait times and get paid instantly with Jafinte. Try it now and see the difference!   </p>
              
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
