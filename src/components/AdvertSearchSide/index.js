import React, { useState, useEffect } from "react"
import { Styles } from "./style"
import JobTitleService from "../../services/jobTitleService"
import WorkHourService from '../../services/workHourService'
import EmployerService from '../../services/employerService'
import CityService from '../../services/cityService'
import { Button, Form } from "semantic-ui-react"

const AdvertSearchSide = () => {

  const [cities, setCities] = useState([])
  const [jobTitles, setJobTitles] = useState([])
  const [workHours, setWorkHours] = useState([])
  const [employers, setEmployers] = useState([])

  useEffect(() => {
    let cityService = new CityService()
    let jobTitleService = new JobTitleService()
    let workHourService = new WorkHourService()
    let employerService = new EmployerService()

    cityService.getCities().then((result) => setCities(result.data.data))
    jobTitleService.getJobTitles().then((result) => setJobTitles(result.data.data))
    workHourService.getWorkHours().then((result) => setWorkHours(result.data.data))
    employerService.getAllEmployers().then((result) => setEmployers(result.data.data))
  }, [])

  const cityOptions = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id
  }))

  const employerOptions = employers.map((employer, index) => ({
    key: index,
    text: employer.companyName,
    value: employer.id
  }))

  const jobTitleOptions = jobTitles.map((jobTitle, index) => ({
    key: index,
    text: jobTitle.jobTitle,
    value: jobTitle.id
  }))

  const workHourOptions = workHours.map((workHour, index) => ({
    key: index,
    text: workHour.hourType,
    value: workHour.id
  }))

  return (
    <Styles>
      <div className="form-container">
            <Form>
              <Form.Field>
              <Form.Select
              label="Job Title"
              placeholder="Available Positions"
              options={jobTitleOptions}
              />
              </Form.Field>
              <Form.Field>
              <Form.Select
              label="City"
              placeholder="Cities"
              options={cityOptions}
              />
              </Form.Field>
              <Form.Field>
              <Form.Select
              label="Work Hour"
              placeholder="Work Hour Types"
              options={workHourOptions}
              />
              </Form.Field>
              <Form.Field>
              <Form.Select
              label="Employer"
              placeholder="Companies"
              options={employerOptions}
              />
              </Form.Field>
              <Button type="submit" content="Filter"/> 
            </Form>
      </div>
    </Styles>
  )
}

export default AdvertSearchSide