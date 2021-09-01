import React, { useState, useEffect } from 'react'
import EmployerService from '../../services/employerService'
import { Styles } from './style'
import { Card, Container, Row, Col } from 'react-bootstrap'
import SkyPic from '../../assets/sky.jpg'

const EmployersList = () => {
  const [employers, setEmployers] = useState([])

  useEffect(() => {
    let employerService = new EmployerService()
    employerService.getAllEmployers().then(result => setEmployers(result.data.data))
  })
  return (
    <Styles className="mb-5">
      <Container>
        <Row>
          {
            employers.map(employer => (
              <Col xl={3} md={6} lg={4} xs={12}>
                <Card className="mt-4 mb-3 mx-auto">
                  <Card.Img className="card-img" variant="top" src={SkyPic}/>
                  <Card.Body>
                    <Card.Title>{employer.companyName}</Card.Title>
                    <Card.Text className="link">
                      <a href={
                        employer.webAddress.includes('//') ?
                          employer.webAddress :
                          `//${employer.webAddress}`
                      } target="blank">
                        https://{employer.webAddress}
                      </a>
                    </Card.Text>
                    <Card.Text>
                      {employer.email}
                    </Card.Text>
                    <Card.Text>
                      {employer.phoneNumber}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </Styles>
  )
}

export default EmployersList