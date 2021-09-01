import React from 'react'
import { FooterS, FooterLeft, FooterRight } from './style'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <FooterS className="p-3">
        <Container>
          <Row>
            <Col xl={6} md={6} lg={4} xs={12}>
              <FooterLeft className="mt-3 mx-auto mb-4">
                <p className="h2 title">HRMS</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat diam lectus, ac consequat purus volutpat eget. Suspendisse ultricies, magna dignissim eleifend hendrerit, magna turpis fringilla velit, vel consequat dui magna ac neque.</p>
                <p>© HRMS 2021</p>
              </FooterLeft>
            </Col>
            <Col xl={2} md={6} lg={4} xs={12}>
              <FooterRight className="mx-auto mt-5">
                <Row>
                  <Col>
                    <Link to="/">
                      <p className="p mt-4">About Us</p>
                    </Link>
                    <Link to="/">
                      <p className="p mt-4">Contact Us</p>
                    </Link>
                    <Link to="/">
                      <p className="p">Community</p>
                    </Link>
                    <Link to="/">
                      <p className="p">Join Us!</p>
                    </Link>
                    <Link to="/">
                      <p className="p">Support</p>
                    </Link>
                    <Link to="/">
                      <p className="p">News</p>
                    </Link>
                    <Link to="/">
                      <p className="p">FAQ</p>
                    </Link>
                  </Col>
                </Row>
              </FooterRight>
            </Col>
          </Row>
        </Container>
      </FooterS>
    </div>
  )
}

export default Footer
