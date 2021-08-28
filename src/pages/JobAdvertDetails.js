import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap'
import { Styles } from '../components/JobAdvertDetails/style';
import JobAdvertService from '../services/jobAdvertService';

const JobAdvertDetails = () => {
  const [jobAdvertDetails, setJobAdvertDetail] = useState([])
  let { id } = useParams();

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getJobAdvertById(id).then(result => setJobAdvertDetail(result.data))
  })

  return (
    <Container>
      <Styles>
        <div>
          {
            jobAdvertDetails.map(jobAdvertDetail => (
              <Card className="mb-4">
                <Card.Body className="ms-3">
                  <Card.Title style={{ float: 'left' }} className="mt-3"><h1>{jobAdvertDetail.companyName}</h1></Card.Title>
                  <Card.Text className="city"><h5>City: {jobAdvertDetail.cityName}</h5></Card.Text>
                  <Card.Text className="mt-5"><h5>Hiring Position: {jobAdvertDetail.jobTitle}</h5></Card.Text>
                  <Card.Text><h5>Number of Free Position: {jobAdvertDetail.freePositionNo}</h5></Card.Text>
                  <Card.Text className="description mt-4"><h5>Job Description:</h5>{jobAdvertDetail.jobDefinition}</Card.Text>
                  <Card.Text style={{ textAlign: 'right' }} className="mt-4"><h5>Salary Range: {jobAdvertDetail.minSalary} - {jobAdvertDetail.maxSalary}</h5></Card.Text>
                  <Card.Text style={{ textAlign: 'right' }} className="mt-4"><h5>Deadline: {jobAdvertDetail.deadline}</h5></Card.Text>
                </Card.Body>
              </Card>
            ))
          }
        </div>
      </Styles>
    </Container>
  )
}
export default JobAdvertDetails
