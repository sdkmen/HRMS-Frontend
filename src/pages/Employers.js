import React from 'react'
import EmployersList from '../components/EmployersList'
import { Container } from 'react-bootstrap'

const Employers = () => {
  return (
    <Container>
      <h3
        style={{
          fontSize: "4rem",
          textAlign: "right",
          fontFamily: "'Bebas Neue', cursive",
          letterSpacing: "1rem",
          textShadow: "4px 5px #ccc",
          color: "#3a405a"
        }}
        className="mt-4 fw-bold">EMPLOYERS</h3>
      <EmployersList />
    </Container>
  )
}

export default Employers
