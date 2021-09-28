import React from 'react'
import { Container } from 'react-bootstrap'
import CandidatesList from '../components/CandidatesList'

const Candidates = () => {
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
          className="mt-4 fw-bold">CANDIDATES</h3>
        <CandidatesList />
      </Container>
  )
}

export default Candidates
