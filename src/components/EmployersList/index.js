import React, { useState, useEffect } from 'react'
import EmployerService from '../../services/employerService'
import { Styles } from './style'
import { Card, Container, Row, Col } from 'react-bootstrap'

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
              <Col xl={4} md={12} lg={6} xs={12}>
                <Card className="mt-4 mb-3 mx-auto">
                  <Card.Body>
                    <Card.Title>{employer.companyName}</Card.Title>
                    <div className="divider"/>
                    <Card.Text  className="link">
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