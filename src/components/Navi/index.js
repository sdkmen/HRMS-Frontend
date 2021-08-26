import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Styles } from './style'

const Menu = () => {
  return (
    <div>
      <Styles>
        <Navbar>
          <Container>
            <Navbar.Brand href="/">HRMS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/jobadverts">Job Adverts</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/candidates">Candidates</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/employers">Employers</Nav.Link></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </div>
  )
}
export default Menu