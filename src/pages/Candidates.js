import React from 'react'
import { Container } from 'react-bootstrap'
import CandidatesList from '../components/CandidatesList'

const Candidates = () => {
  return (
    <div>
      <Container>
      <h3 className="mt-3 fw-bold">CANDIDATES</h3>
        <CandidatesList/>
      </Container>
    </div>
  )
}

export default Candidates
