import React, { useState, useEffect } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import CandidateService from '../../services/candidateService'
import { Styles } from './style'
import { Link } from 'react-router-dom'

const CandidatesList = () => {
  const [candidates, setCandidates] = useState([])

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService.getAllCandidates().then(result => setCandidates(result.data.data))
  })
  return (
    <Styles>
      <Row>
        {
          candidates.map(candidate => (
            <Col xl={3} md={6} lg={4} xs={12}>
              <Card className="mt-4 mx-auto">
                <Card.Img className="card-img mt-3" variant="top" src={candidate.pictureUrl} />
                <Card.Body>
                  <Card.Title>
                    {candidate.firstName} {candidate.lastName}
                  </Card.Title>
                  <Card.Text className="mt-4">
                    <h6>{candidate.email}</h6>
                  </Card.Text>
                  <Card.Text>
                    <h6>Birth Year: {candidate.birthOfYear}</h6>
                  </Card.Text>
                  <Link to={`/cv/${candidate.id}`}>
                    <Button className="mt-3" variant="primary">Show CV</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Styles>
  )
}

export default CandidatesList
