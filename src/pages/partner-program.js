import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Head from "next/head";
import Content from "../sections/landing10/Content1";
import Pricefeatures from "../sections/landing4/price-features";
const ComingSoon = () => {
  return (
    <>
      <Head>
    <title>Partner Program | Free Billing and Accounting Software | Jafinte</title>
    <meta property="og:title" content="Free Billing and Accounting Software | Jafinte" key="title" />
  </Head>
  <PageWrapper
      headerConfig={{
        align: "right",
        button: "account", // cta, account, null
      }}
      footerConfig={{
        theme: "light",
        style: "style1", //style1, style2
      }}
    >
         <center>  <div className="inner-banner bg-default-2 pt-25 pt-lg-29">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col lg="9" xl="8">
                <div className="px-md-15 text-center mb-5 mb-lg-13">
                  <h2 className="title gr-text-2 mb-9 mb-lg-12">
                    Partner Program
                  </h2>
                  <p className="gr-text-8 mb-0">
               
                More than      1000+ Distributors are registered.
                <b>
             
                </b>
                
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      
       <center>
       
        </center>
          <Content/>
         
          </center>
          <div style={{backgroundColor: '#ffffff'}}>
          <div style={{textAlign: 'center'}}> <a href="https://724nu9b3gd2.typeform.com/to/F4Bt1XEI" data-mode="popup" style={{display: 'inline-block', textDecoration: 'none', backgroundColor: '#2ABB9B', color: 'white', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '50px', textAlign: 'center', margin: 0, height: '50px', padding: '0px 33px', borderRadius: '10px', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 'bold', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}} data-size={50} target="_blank">Get Early Access</a> </div>
  
    <div><br></br></div>
          <div><br></br></div>
          <div><br></br></div>  </div>
          <Pricefeatures/>
        </PageWrapper>
    </>
  );
};
export default ComingSoon;
