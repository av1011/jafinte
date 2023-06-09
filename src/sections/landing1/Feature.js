import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import icon1 from "../../assets/image/svg/l5-feature-icon1.svg";
import icon2 from "../../assets/image/svg/l5-feature-icon2.svg";
import icon3 from "../../assets/image/svg/l5-feature-icon3.svg";
import icon4 from "../../assets/image/svg/l5-feature-icon4.svg";

const Featuresone = () => (
  <>
    {/* <!-- Feature section --> */}
    <div className="feature-section pt-14 pt-lg-25 pb-7 pb-lg-11 bg-default-2">
      <Container>
        <Row className="justify-content-center">
          <Col xl="6" lg="7" md="8">
            <div className="section-title text-center mb-13 mb-lg-23">
              <h4 className="pre-title gr-text-12 text-blue text-uppercase mb-7">
                Why choose us
              </h4>
              <h2 className="title gr-text-4">
              Companies choose us because we serve the best for everyone
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="10">
            <Row className="align-items-center justify-content-center">
              <Col
                lg="6"
                md="10"
                className="mb-11 mb-lg-19"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="feature-widget media">
                  <div className="widget-icon p-7 rounded-15 mr-9 gr-bg-blue-opacity-1">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="widget-text">
                    <h3 className="title gr-text-7 mb-6">
                      Secure
                    </h3>
                    <p className="gr-text-9 mb-0 pr-11">
                    Jafinte take security seriously and we are using industry-leading tech stacks and technologies.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg="6"
                md="10"
                className="mb-11 mb-lg-19"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <div className="feature-widget media">
                  <div className="widget-icon p-7 rounded-15 mr-9 gr-bg-green-opacity-1">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="widget-text">
                    <h3 className="title gr-text-7 mb-6">Support Team</h3>
                    <p className="gr-text-9 mb-0 pr-11">
                    We provide around-the-clock support to our customers to make their bookkeeping easy.
                    </p>
                  </div>
                </div>
              </Col>
         
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Featuresone;
