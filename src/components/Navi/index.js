import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Styles } from './style'

const Menu = () => {
  return (
    <div>
      <Styles>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">HRMS</Navbar.Brand>
            <Navbar.Toggle className="navbar-toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Item className="mt-2">
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mt-2">
                  <Nav.Link href="/jobadverts">Job Adverts</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mt-2">
                  <Nav.Link href="/candidates">Candidates</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mt-2">
                  <Nav.Link href="/employers">Employers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/signin">
                    <Button className="button">Sign In</Button>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="signup">
                    <Button className="button">Sign Up</Button>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </div>
  )
}
export default Menu