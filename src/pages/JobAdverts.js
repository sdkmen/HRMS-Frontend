import React from 'react'
import AdvertSearchSide from '../components/AdvertSearchSide'
import AdvertsSection from '../components/AdvertsSection'
import { Container, Row, Col } from "react-bootstrap"

const JobAdverts = () => {
  return (
    <div>
      <h3 className="mt-3 fw-bold">JOB ADVERTS</h3>
      <Container fluid>
        <Row>
          <Col sm={12} md={5} lg={3} >
            <AdvertSearchSide />
          </Col>
          <Col sm={12} md={7} lg={9}>
            <AdvertsSection/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default JobAdverts

