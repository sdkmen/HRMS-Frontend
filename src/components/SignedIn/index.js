import React from 'react'
import { Nav, Dropdown, Image } from 'react-bootstrap'
import { Styles } from './style'

const SignedIn = ({ signOut }) => {
  return (
    <Styles>
      <Nav className="mt-2">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
          <Image className="image me-2" src="https://pbs.twimg.com/profile_images/1422586598147899394/JhNouCwi_400x400.jpg"/>
            Seyfullah
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Profile</Dropdown.Item>
            <Dropdown.Item href="#">Settings</Dropdown.Item>
            <Dropdown.Item href="/panel/employer/postadvert">Post a job</Dropdown.Item>
            <Dropdown.Item onClick={signOut}>Sign out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Styles>
  )
}

export default SignedIn
