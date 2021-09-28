import React from 'react'
import AdvertSearchSide from '../components/AdvertSearchSide'
import AdvertsSection from '../components/AdvertsSection'
import { Container, Row, Col } from "react-bootstrap"

const JobAdverts = () => {
  return (
      <Container>
      <h3
        style={{
          fontSize: "4rem",
          textAlign: "right",
          fontFamily: "'Bebas Neue', cursive",
          letterSpacing: "1rem",
          textShadow: "4px 5px #ccc",
          color: "#42466e"
        }}
        className="mt-4 fw-bold">JOB ADVERTS</h3>
        <Row>
          <Col sm={12} md={12} lg={12} xl={10}>
            <AdvertsSection />
          </Col>
          <Col sm={12} md={12} lg={12} xl={2}>
            <AdvertSearchSide />
          </Col>
        </Row>
      </Container>
  )
}

export default JobAdverts

