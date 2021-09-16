import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import { Styles } from './style'

const SignedOut = ({ signIn }) => {
  return (
    <Styles>
      <Nav className="mt-2">
        <Nav.Item>
          <Button className="button me-1 mb-2" onClick={signIn}>Sign In</Button>
        </Nav.Item>
        <Nav.Item>
          <Button variant="light" className="button">Sign Up</Button>
        </Nav.Item>
      </Nav>
    </Styles>

  )
}

export default SignedOut
