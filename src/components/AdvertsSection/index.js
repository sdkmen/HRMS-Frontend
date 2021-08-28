import React, { useState, useEffect } from 'react'
import { Styles } from './style'
import { Card, Button } from "react-bootstrap"
import JobAdvertService from '../../services/jobAdvertService'
import { Link } from 'react-router-dom'

const AdvertsSection = () => {

  const [jobAdverts, setJobAdverts] = useState([])

  useEffect(() => {
    let jobAdvertService = new JobAdvertService()
    jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data))
  })

  return (
    <Styles className="mt-4">
      <div>
        {
          jobAdverts.map(jobAdvert => (
            <Card className="mb-3">
              <Card.Body>
                <h2 className="h2">{jobAdvert.companyName}</h2>
                <Card.Title>{jobAdvert.jobTitle}</Card.Title>
                <Card.Text>{jobAdvert.jobDefinition}</Card.Text>
                <Link to={`/jobadvertdetail/${jobAdvert.id}`}>
                  <Button className="button">Show Details</Button>
                </Link>
                <Card.Text className="deadline d-inline">Deadline: {jobAdvert.deadline}</Card.Text>
              </Card.Body>
            </Card>
          ))
        }

      </div>
    </Styles>
  )
}

export default AdvertsSection
