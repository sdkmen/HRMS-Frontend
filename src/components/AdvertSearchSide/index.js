import React from "react"
import { Card, Button, Form } from "react-bootstrap"
import { Styles } from "./style"

const AdvertSearchSide = () => {
  return (
    <Styles>
      <div>
        <Card fixed="left" className="mt-4 ms-4">
          <Card.Body>
            <Card.Title><h4>Search Job Advert</h4></Card.Title>
            <Form>
              <Form.Group className="mb-3 mt-4" controlId="minSalary">
                <Form.Control min="0" type="number" placeholder="Min Salary" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="maxSalary">
                <Form.Control min="0" type="number" placeholder="Max Salary" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="jobTitle">
                <Form.Control type="text" placeholder="Job Title" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="companyName">
                <Form.Control type="text" placeholder="Company Name" />
              </Form.Group>
              <Button className="button" type="submit">Search</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Styles>
  )
}

export default AdvertSearchSide