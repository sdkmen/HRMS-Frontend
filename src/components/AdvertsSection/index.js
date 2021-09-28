import React, { useState, useEffect } from 'react'
import { Styles } from './style'
import { Card, Button } from "react-bootstrap"
import JobAdvertService from '../../services/jobAdvertService'
import { Link } from 'react-router-dom'

const AdvertsSection = () => {

  const [jobAdverts, setJobAdverts] = useState([])

  useEffect(() => {
    let jobAdvertService = new JobAdvertService()
    jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data))
  })

  return (
    <Styles className="mt-4">
      <div>
        {
          jobAdverts.map(jobAdvert => (
            <Card className="mb-4">
              <Card.Body>
                <p className="d-inline-block city">{jobAdvert.cityName}</p>
                <h2 className="h2">{jobAdvert.companyName}</h2>
                <Card.Title>{jobAdvert.jobTitle}</Card.Title>
                <Card.Title>Number of Free Position: <p className="d-inline-block free-position-no">{jobAdvert.freePositionNo}</p></Card.Title>
                <Card.Text className="mt-3">{jobAdvert.jobDefinition}</Card.Text>
                <Link to={`/jobadvert/detail/${jobAdvert.id}`}>
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
