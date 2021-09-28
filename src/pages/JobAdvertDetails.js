import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Card, Container, Button } from 'react-bootstrap'
import { Styles } from '../components/JobAdvertDetails/style';
import { splitFirstLetter } from '../utilities/util.functions';
import JobAdvertService from '../services/jobAdvertService';

const JobAdvertDetails = () => {
  const [jobAdvertDetails, setJobAdvertDetail] = useState([])
  let { id } = useParams();

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getJobAdvertById(id).then(result => setJobAdvertDetail(result.data))
  })

  return (
    <Styles>
      <Container>
        {
          jobAdvertDetails.map(jobAdvertDetail => (
            <Card className="mb-5 mt-5 mx-auto">
              <Card.Body className="ms-3">
                <Card.Title className="mt-5">{jobAdvertDetail.jobTitle}</Card.Title>
                <div className="divider-horizontal" />
                <Card.Text className="city">City: {jobAdvertDetail.cityName}</Card.Text>
                <Card.Text className="free-position">Number of Free Position: <p className="d-inline-block free-position-no">{jobAdvertDetail.freePositionNo}</p></Card.Text>
                <Card.Text className="description mt-5"><p>Job Description:</p>{jobAdvertDetail.jobDefinition}</Card.Text>
                <Card.Text className="mt-5 salary"><p>Min Salary: <span className="money">{jobAdvertDetail.minSalary}$</span></p></Card.Text>
                <Card.Text className="mt-5 ms-2 salary"><p>Max Salary: <span className="money">{jobAdvertDetail.maxSalary}$</span></p></Card.Text>
                <Card.Text className="deadline"><p>Deadline: {jobAdvertDetail.deadline}</p></Card.Text>
                <div className="company-container mx-auto">
                  <div className="first-letter">{splitFirstLetter(jobAdvertDetail.companyName)}</div>
                  <Card.Text className="mt-5 company">{jobAdvertDetail.companyName}</Card.Text>
                </div>
                <Button className="mt-3 btn" variant="success">Apply</Button>
              </Card.Body>
            </Card>
          ))
        }
      </Container>
    </Styles>
  )
}
export default JobAdvertDetails
