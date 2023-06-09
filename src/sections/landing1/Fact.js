import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

const Fact = () => (
  <>
    {/* <!-- Fact section --> */}
    <div className="fact-section bg-default-4 pt-lg-15 pb-7 pb-lg-24">
      <Container>
        <Row className="justify-content-center">
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-xl-6">
              <h3 className="title mb-7 gr-text-3">100K+</h3>
              <p className="gr-text-8 mb-0">
               Invoices generated using Jafinte in just some months of launched          </p>
            </div>
          </Col>
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-xl-6">
              <h3 className="title mb-7 gr-text-3">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={5} end={96} />
                  </span>
                  %
                </LazyLoad>
              </h3>
              <p className="gr-text-8 mb-0">
                Satisfaction rate comes from our awesome customers.
              </p>
            </div>
          </Col>
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-xl-6">
              <h3 className="title mb-7 gr-text-3">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={5} decimal="." decimals={1} end={4.9} />
                  </span>
                  /5.0
                </LazyLoad>
              </h3>
              <p className="gr-text-8 mb-0">
                Average customer ratings we have got all over internet.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Fact;
