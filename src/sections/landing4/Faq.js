import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const Faq = () => {
  return (
    <>
      {/* <!-- Faq Area --> */}
      <div className="faq-section pb-12 pb-lg-24 " style={{backgroundColor: '#ffffff'}}>
        <Container>
          <Row>
            <Col md="6" className="mb-9 pr-xl-12 mb-lg-15">
              <div className="single-faq media">
                <div className="count circle-xs bg-blue mr-8">
                  <i className="fas fa-question text-white"></i>
                </div>
                <div className="faq-text">
                  <h3 className="faq-title mb-7 gr-text-7 gr-text-color">
                    Can I use for free?
                  </h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                    Yes you can use Jafinte for free as we provide 14 days free trial period.
                  </p>
                  <Link href="/pricing">
                    <a className="btn-link with-icon mt-6 text-blue h6">
                      Click to learn more{" "}
                      <i className="fas fa-arrow-right gr-text-12"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md="6" className="mb-9 pr-xl-12 mb-lg-15">
              <div className="single-faq media">
                <div className="count circle-xs bg-blue mr-8">
                  <i className="fas fa-question text-white"></i>
                </div>
                <div className="faq-text">
                  <h3 className="faq-title mb-7 gr-text-7 gr-text-color">
                    Can we pay offline?
                  </h3>
                  <p className="gr-text-9 gr-text-color-opacity">
               Currently Jafinte only accept payment through online mode. We use Stripe for the payment gateway system.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6" className="mb-9 pr-xl-12 mb-lg-15">
              <div className="single-faq media">
                <div className="count circle-xs bg-blue mr-8">
                  <i className="fas fa-question text-white"></i>
                </div>
                <div className="faq-text">
                  <h3 className="faq-title mb-7 gr-text-7 gr-text-color">
                    Do I get free updates?
                  </h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                   Jafinte team is working hard to enure you will get the best features in the market to manage your companies need. Jafinte provide updates on regularly basis.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6" className="mb-9 pr-xl-12 mb-lg-15">
              <div className="single-faq media">
                <div className="count circle-xs bg-blue mr-8">
                  <i className="fas fa-question text-white"></i>
                </div>
                <div className="faq-text">
                  <h3 className="faq-title mb-7 gr-text-7 gr-text-color">
                   Can I change my subscription plan later?
                  </h3>
                  <p className="gr-text-9 gr-text-color-opacity">
                   Yes, you can upgrade or downgrade your subscription plans at any time you want.
                      </p>
                </div>
              </div>
            </Col>
            <div className="col-12 text-center mt-3 ">
              <p className="more-support gr-text-9 gr-text-color">
                Haven’t got your answer?{" "}
                <Link href="/contact">
                  <a className="support-link text-blue">
                    Contact our support now
                  </a>
                </Link>
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Faq;
