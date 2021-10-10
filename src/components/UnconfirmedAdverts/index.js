import React, { useEffect, useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { toast } from 'react-toastify'
import JobAdvertService from '../../services/jobAdvertService'
import { Styles } from './style'

const UnconfirmedAdverts = () => {
  const [unConfirmedAdverts, setUnConfirmedAdverts] = useState([])

  useEffect(() => {
    let jobAdvertService = new JobAdvertService()
    jobAdvertService.getUnConfirmedAdverts().then(result => setUnConfirmedAdverts(result.data.data))
  })

  const handleOnClickConfirm = (id) => {
    let jobAdvertService = new JobAdvertService()
    jobAdvertService.setIsConfirmed(id)
    toast.success('Job advert confirmed!')
  }

  const handleOnClickRefuse = (id) => {
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
        {unConfirmedAdverts.length === 0 && <p className="no-data">NO JOB ADVERTISEMENT PENDING CONFIRM</p>}
      {
        unConfirmedAdverts.map(unConfirmedAdvert => (
          <Card className="mt-4 mb-4 ps-5 pe-5 pt-2 pb-3">
            <Container>
              <Card.Body>
                <Card.Title className="title">{unConfirmedAdvert.companyName}</Card.Title>
                <div className="divider mx-auto mt-3"/>
                <Card.Text className="city mt-3">City: {unConfirmedAdvert.cityName}</Card.Text>
                <Card.Text className="job-title mt-3">{unConfirmedAdvert.jobTitle}</Card.Text>
                <Card.Text className="description">{unConfirmedAdvert.jobDefinition}</Card.Text>
                <Card.Text className="salary me-3"><p>Min salary: <span className="money">{unConfirmedAdvert.minSalary}$</span></p></Card.Text>
                <Card.Text className="salary"><p>Max salary: <span className="money">{unConfirmedAdvert.maxSalary}$</span></p></Card.Text>
                <Card.Text className="free-position">Number of free position: <p className="free-position-no">{unConfirmedAdvert.freePositionNo}</p></Card.Text>
                <Card.Text className="work-hour">Work Hour: {unConfirmedAdvert.hourType}</Card.Text>
                {unConfirmedAdvert.isRemote && <Card.Text className="remote" style={{color:'#1bd177'}}>Yes</Card.Text>}
                {!unConfirmedAdvert.isRemote && <Card.Text className="remote" style={{color:'#FC0000'}}>No</Card.Text>}
                <Card.Text className="remote" style={{marginRight:'35px'}}>Is Job Remote: </Card.Text>
                <Card.Text className="deadline">Deadline: {unConfirmedAdvert.deadline}</Card.Text>
                <Button className="btn ms-2" style={{left:'555px'}} variant="danger" onClick={() => handleOnClickRefuse(unConfirmedAdvert.id)}>Refuse Job Advert </Button>
                <Button className="btn" variant="success" onClick={() => handleOnClickConfirm(unConfirmedAdvert.id)}>Confirm Job Advert</Button>
              </Card.Body>
            </Container>
          </Card>
        ))
      }
    </Styles>
  )
}

export default UnconfirmedAdverts
