import React from 'react'
import AdvertSearchSide from '../components/AdvertSearchSide'
import AdvertsSection from '../components/AdvertsSection'
import { Container, Row, Col } from "react-bootstrap"

const JobAdverts = () => {
  return (
    <div>
      <h3 className="mt-3 fw-bold">JOB ADVERTS</h3>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} xl={4}>
            <AdvertSearchSide />
          </Col>
          <Col sm={12} md={12} lg={12} xl={8}>
            <AdvertsSection/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default JobAdverts

