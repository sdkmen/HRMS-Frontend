import React from "react"
import { Jumbo, Title, ButtonGroup } from './style'
import { Container, Button } from "react-bootstrap"
import {
  Link
} from "react-router-dom"

const Jumbotron = () => {
  return (
    <Jumbo>
      <div>
        <Title>
          <Container>
            <h1 className="text-center align-center fw-bold">Welcome to Human Resources Management System</h1>
            <p className="text-center fw-light mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat diam lectus, ac consequat purus volutpat eget. Suspendisse ultricies, magna dignissim eleifend hendrerit, magna turpis fringilla velit, vel consequat dui magna ac neque. Cras interdum ligula vitae lacus mattis sodales vel interdum purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat diam lectus, ac consequat purus volutpat eget.
            </p>
          </Container>
        </Title>
        <ButtonGroup className="mt-5">
          <Link to="/jobadverts">
            <Button className="m-3 button" variant="light">Job Adverts</Button>
          </Link>
          <Link to="/candidates">
            <Button className="m-3 button" variant="light">Candidates</Button>
          </Link>
          <Link to="/employers">
            <Button className="m-3 button" variant="light">Employers</Button>
          </Link>
        </ButtonGroup>
      </div>
    </Jumbo>
  )
}

export default Jumbotron