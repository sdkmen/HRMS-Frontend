import React, { useState, useEffect } from "react"
import { Card, Button, Form } from "react-bootstrap"
import { Styles } from "./style"
import JobTitleService from "../../services/jobTitleService"

const AdvertSearchSide = () => {

  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService.getJobTitles().then(result => setJobTitles(result.data.data))
  })

  return (
    <Styles>
      <div>
        <Card className="mt-4 mx-auto">
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
                <Form.Select>
                <option>Choose A Position</option>
                  {
                    jobTitles.map(jobTitle => (
                      <option key={jobTitle.id}>{jobTitle.jobTitle}</option>
                    ))
                  }
                </Form.Select>
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