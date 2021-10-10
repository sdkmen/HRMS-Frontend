import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import JobAdvertService from '../../services/jobAdvertService'
import { Styles } from './style'

const UnconfirmedAdverts = () => {
  const [unConfirmedAdverts, setUnConfirmedAdverts] = useState([])

  useEffect(() => {
    let jobAdvertService = new JobAdvertService()
    jobAdvertService.getUnConfirmedAdverts().then(result => setUnConfirmedAdverts(result.data.data))
  },)

  const handleOnClickConfirm = (id) =>{
    let jobAdvertService = new JobAdvertService()
    jobAdvertService.setIsConfirmed(id)
    toast.success('Job advert confirmed!')
  }

  const handleOnClickRefuse = (id) =>{
    let jobAdvertService = new JobAdvertService()
    jobAdvertService.setIsActiveToPassive(id)
    toast.error("Job advert refused!")
  }

  return (
    <Styles>
      <h3
        style={{
          fontSize: "3rem",
          fontFamily: "'Bebas Neue', cursive",
          letterSpacing: "0.3rem",
          color: "#293241",
          textAlign: "center"
        }}
        className="pt-3 fw-bold">UNCONFIRMED JOB ADVERTS</h3>
        {
          unConfirmedAdverts.map(unConfirmedAdvert => (
            <Card className="mt-4 mb-4">
              <Card.Header as="h5">{unConfirmedAdvert.companyName}</Card.Header>
              <Card.Body>
                <Card.Title>{unConfirmedAdvert.jobTitle}</Card.Title>
                <Card.Text>{unConfirmedAdvert.jobDefinition}</Card.Text>
                <Card.Text>{unConfirmedAdvert.cityName}</Card.Text>
                <Card.Text>Number of free position: {unConfirmedAdvert.freePositionNo}</Card.Text>
                <Card.Text>Min salary: {unConfirmedAdvert.minSalary}</Card.Text>
                <Card.Text>Max salary: {unConfirmedAdvert.maxSalary}</Card.Text>
                <Card.Text>Work Hour: {unConfirmedAdvert.hourType}</Card.Text>
                <Card.Text>Deadline: {unConfirmedAdvert.deadline}</Card.Text>
                <Button className="btn ms-2" variant="danger" onClick={() => handleOnClickRefuse(unConfirmedAdvert.id)}>Refuse Job Advert </Button>
                <Button className="btn" variant="success" onClick={() => handleOnClickConfirm(unConfirmedAdvert.id)}>Confirm Job Advert</Button>
              </Card.Body>
            </Card>
          ))
        }
    </Styles>
  )
}

export default UnconfirmedAdverts
