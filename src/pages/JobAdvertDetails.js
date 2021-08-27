import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap'
import { Styles } from '../components/JobAdvertDetails/style';

const JobAdvertDetails = () => {
  const [jobAdvertDetails, setJobAdvertDetail] = useState([])
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/jobadverts/getById/${id}`).then(result => setJobAdvertDetail(result.data))
  })

  return (
    <Styles>
          <div>
            {
              jobAdvertDetails.map(jobAdvertDetail => (
                <Card className="mt-5">
                  <Card.Body>
                    <Card.Title>{jobAdvertDetail.cityName}</Card.Title>
                    <Card.Text>{jobAdvertDetail.jobDefinition}</Card.Text>
                    <Card.Text>{jobAdvertDetail.jobTitle}</Card.Text>
                    <Card.Text>{jobAdvertDetail.minSalary}</Card.Text>
                    <Card.Text>{jobAdvertDetail.maxSalary}</Card.Text>
                    <Card.Text>{jobAdvertDetail.deadline}</Card.Text>
                    <Card.Text>{jobAdvertDetail.freePositionNo}</Card.Text>
                    <Card.Text>{jobAdvertDetail.companyName}</Card.Text>
                  </Card.Body>
                </Card>
              ))
            }
          </div>
    </Styles>
  )
}
export default JobAdvertDetails
