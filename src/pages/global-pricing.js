import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Head from "next/head";
import Link from 'next/link';
import icon1 from "../assets/image/inner/icon-preferences.svg";
import icon2 from "../assets/image/inner/icon-cart.svg";
import icon3 from "../assets/image/inner/icon-coupon.svg";
import icon4 from "../assets/image/inner/icon-layers.svg";
import icon5 from "../assets/image/inner/icon-async.svg";
import icon6 from "../assets/image/inner/icon-chartbar.svg";
import Pricefeatures from "../sections/landing4/price-features";
import Testimonial from "../sections/landing4/Testimonial";
import Form from "../components/form";
import CTA from "../sections/landing4/CTA";
import { PopupButton } from '@typeform/embed-react'
import { color } from "styled-system";
import Formtest from "../contact/main";
const PricingIn = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    
    <>
      <Head>
    <title>Pricing | Best Billing and Accounting Software | Jafinte</title>
    <meta property="og:title" content="Free Billing and Accounting Software | Jafinte" key="title" />
  </Head>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }} footerConfig={{
          theme: "light",
          style: "style1", //style1, style2
        }}
      >
        <div className="inner-banner bg-default-2 pt-25 pt-lg-29">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col lg="9" xl="8">
                <div className="px-md-15 text-center mb-5 mb-lg-13">
                  <h2 className="title gr-text-2 mb-9 mb-lg-12">
                    Pricing &amp; Plans
                  </h2>
                  <p className="gr-text-8 mb-0">
                    Jafinte comes with affordable pricing.  <b>
                  
                </b>

                  </p>
                  <p className="gr-text-8 mb-0">
                    Use   <b>
                WELCOME10 
                </b> Coupon Code to get extra 10% Discount
                
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pricing-section bg-default-2 pb-7 pb-lg-20">
          <Container>
            <div className="text-center pt-9">
              <div
                className="mb-13 d-inline-flex position-relative"
                id="pricing-dynamic-deck--head"
              >
                 <span className="period month gr-text-8 gr-text-color ">
                  Monthly
                </span>
                <a
                  href="/#"
                  className={`btn-toggle mx-3 price-deck-trigger ${
                    isMonthly ? "" : "active"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMonthly(!isMonthly);
                  }}
                >
                  <span className="round"></span>
                </a>
                <span className="period year gr-text-8 gr-text-color">
                  Yearly (Save 25%)
                </span>
                
                <span text-fontSize="1000px">
                 </span>
                
              </div>
          
        <div><br></br></div>
    
              <div className="row justify-content-center">
               <div className="col-lg-4 col-md-6 col-sm-10 mb-9">
                  <div className="pricing-card bg-white gr-hover-shadow-1 border text-left pt-9 pb-9 pr-9 pr-xl-13  pl-9 pl-xl-13 bg-white rounded-10">
                    <div className="price-content">
                      <span className="small-title gr-text-12 text-primary font-weight-bold text-uppercase">
                        Standard
                      </span>
                      <div className="d-flex align-items-end mt-11 ">
                        <span className="currency mr-2 gr-text-6 font-weight-bold line-spacing-none text-blackish-blue">
                        $
                        </span>
                        <h2 className="price-value gr-text-2 font-weight-bold line-spacing-none mb-0 text-blackish-blue">
                          {isMonthly ? "12.99" : "10.99"}
                          <span className="d-none">.</span>
                        </h2>
                        <span className="per gr-text-9 text-blackish-blue">
                          
                        </span>
                      </div>
                      <span className="price-bottom-text gr-text-11 mt-5 text-blackish-blue gr-opacity-7 d-inline-flex">
                        {" "}
                        {isMonthly ? "per month" : "per month"}
                      </span>
                      <ul className="card-list list-style-check pl-0 mt-7 mt-lg-11">
                     
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i> 200 Clients
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i> Unlimited Inventory Management
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>   Multiple User Support
                        </li>  <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>   Daily Backup
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>   99.9% Uptime
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>   Dedicated Account Manager
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>   Premium Support
                        </li>
                      </ul>      </div>
                      <div style={{textAlign: 'left'}}> <a className="typeform-share button" href="https://app.Jafinte.in/register" data-mode="popup" style={{display: 'inline-block', textDecoration: 'none', backgroundColor: '#000000', color: 'white', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '50px', textAlign: 'center', margin: 0, height: '50px', padding: '0px 33px', borderRadius: '10px', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 'bold', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}} data-size={50} target="_blank">Register for Free</a> </div>
     
            
                    <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-5">
                      No credit card required
                    </span>
                  </div>
                </div>
               <div className="col-lg-4 col-md-6 col-sm-10 mb-9">
                  <div className="pricing-card bg-white gr-hover-shadow-1 border text-left pt-9 pb-9 pr-9 pr-xl-13  pl-9 pl-xl-13 bg-white rounded-10">
                    <div className="price-content">
                      <span className="small-title gr-text-12 text-primary font-weight-bold text-uppercase">
                        Unlimited 
                      </span>
                      <div className="d-flex align-items-end mt-11 ">
                        <span className="currency mr-2 gr-text-6 font-weight-bold line-spacing-none text-blackish-blue">
                        $
                        </span>
                        <h2 className="price-value gr-text-2 font-weight-bold line-spacing-none mb-0 text-blackish-blue">
                          {isMonthly ? "19.99" : "14.99"}
                          <span className="d-none">.</span>
                        </h2>
                        <span className="per gr-text-9 text-blackish-blue">
                         
                        </span>
                      </div>
                      <span className="price-bottom-text gr-text-11 mt-5 text-blackish-blue gr-opacity-7 d-inline-flex">
                        {isMonthly ? "per month" : "per month"}
                      </span>
                      <ul className="card-list list-style-check pl-0 mt-7 mt-lg-11">
                       
                      
                      <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i> Unlimited Clients
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i> Unlimited Inventory Management
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>   Multiple User Support
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>   Daily Backup
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>   99.9% Uptime
                        </li>
                        <li className=" gr-text-9">
                          <i className="icon icon-check-simple"></i>   Dedicated Account Manager
                        </li>
                        <li className="gr-text-9">
                          <i className="icon icon-check-simple"></i>   Premium Support
                        </li>
                      </ul>
                    </div>
                    <div style={{textAlign: 'left'}}> <a className="typeform-share button" href="https://app.Jafinte.in/register" data-mode="popup" style={{display: 'inline-block', textDecoration: 'none', backgroundColor: '#000000', color: 'white', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '50px', textAlign: 'center', margin: 0, height: '50px', padding: '0px 33px', borderRadius: '10px', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 'bold', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}} data-size={50} target="_blank">Register for Free</a> </div>
     
                    <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-5">
                      No credit card required
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
          </Container>
          <div><br></br></div>
          <div><br></br></div>
          <div><br></br></div>
          <Pricefeatures/>
        </div>
        <Testimonial />
        <CTA/>
  


         {/* <!-- Hero Area --> 
        <div className="bg-default-2 pb-7 pb-lg-15">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="9">
                <div className="px-md-12 text-center mb-11 mb-lg-19">
                  <h2 className="title gr-text-3 mb-8">Check our features</h2>
                  <p className="gr-text-8 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next consultancy website within
                    few minutes.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg="4" md="6" sm="6" xs="8" className=" mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                      Quick setup process
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon2} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                      Create custom orders
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                      Multiple coupons
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon4} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                      Organize your campaigns
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon5} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                      Manage customers
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon6} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                      Track progress fast
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        */}
           
      </PageWrapper>
 
    </>
  
  
  
  
  );
};
export default PricingIn;
