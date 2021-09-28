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
    <Styles className="mb-5">
      <Row>
        {
          candidates.map(candidate => (
            <Col xl={2} md={4} lg={3} xs={12}>
              <Card className="mt-4 mx-auto mb-3">
                <Card.Img className="card-img mt-3" variant="top" src={candidate.pictureUrl} />
                <Card.Body>
                  <Card.Title className="mt-1">
                    {candidate.firstName} {candidate.lastName}
                  </Card.Title>
                  <Card.Text className="mt-3">
                    <p>{candidate.email}</p>
                  </Card.Text>
                  <Card.Text>
                    <p>{candidate.birthOfYear}</p>
                  </Card.Text>
                  <Link to={`/cv/${candidate.id}`}>
                    <Button className="mt-1 button" variant="primary">Show CV</Button>
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
