import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Styles } from './style'
import SignedOut from '../SignedOut'
import SignedIn from '../SignedIn'
import { useHistory } from 'react-router'

const Menu = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const history = useHistory()

  function handleSignOut(params){
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn(params){
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Styles>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">HRMS</Navbar.Brand>
            <Navbar.Toggle className="navbar-toggle" aria-controls="basic-navbar-nav"/>
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
                {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </div>
  )
}
export default Menu