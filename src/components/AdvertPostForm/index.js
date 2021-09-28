import React, { useEffect, useState } from 'react'
import * as Yup from "yup"
import { Formik, useFormik } from 'formik'
import JobAdvertService from '../../services/jobAdvertService'
import CityService from '../../services/cityService'
import JobTitleService from '../../services/jobTitleService'
import WorkHourService from '../../services/workHourService'
import EmployerService from '../../services/employerService'
import { Form, Button, Grid, Container, Label, Checkbox } from 'semantic-ui-react'
import { Styles } from './style'


const AdvertPostForm = () => {

  let jobAdvertService = new JobAdvertService()

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

  const postValidationSchema = Yup.object({
    cityId: Yup.string().required("City required!"),
    deadline: Yup.date().required("Deadline required!"),
    freePositionNo: Yup.number().required("Number of free position required!"),
    isActive: Yup.boolean().required("required!"),
    isRemote: Yup.boolean().required("Work type required!"),
    jobDefinition: Yup.string().required("Job definition required!"),
    jobTitleId: Yup.string().required("Job title required!"),
    workHourId: Yup.string().required("Work hour required!"),
    employerId: Yup.string().required("Company name required!"),
  })

  const formik = useFormik({
    initialValues: {
      cityId: '',
      deadline: '',
      employerId: '',
      freePositionNo: '',
      isActive: true,
      isRemote: false,
      jobDefinition: '',
      maxSalary: '',
      minSalary: '',
      jobTitleId: '',
      workHourId: '',
    },
    validationSchema: postValidationSchema,
    onSubmit: values => {
      values.isActive = true
      jobAdvertService.addJobAdvert(values)
      window.alert("Job advert added, needs confirm")
      window.location.reload()
    },
  });

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
      <Container>
        <Grid style={{ marginTop: '1rem' }}>
          <Grid.Column width={3} />
          <Grid.Column width={10}>
            <Formik>
              <Form onSubmit={formik.handleSubmit}>
                <Grid>
                  <Grid.Column width={8}>
                    <Form.Select
                      name="employerId"
                      label="Company Name"
                      placeholder="Companies"
                      options={employerOptions}
                      onChange={(event, data) => formik.setFieldValue("employerId", data.value)}
                      value={formik.values.employerId}
                    />
                    {formik.errors.employerId && formik.touched.employerId && (
                      <Label basic color='red' pointing>
                        {formik.errors.employerId}
                      </Label>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Select
                      name="cityId"
                      label="City"
                      placeholder="Cities"
                      options={cityOptions}
                      onChange={(event, data) => formik.setFieldValue("cityId", data.value)}
                      value={formik.values.cityId}
                    />
                    {formik.errors.cityId && formik.touched.cityId && (
                      <Label basic color='red' pointing>
                        {formik.errors.cityId}
                      </Label>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Select
                      name="workHourId"
                      label="Work Hour"
                      placeholder="Work Hour Types"
                      options={workHourOptions}
                      onChange={(event, data) => formik.setFieldValue("workHourId", data.value)}
                      value={formik.values.workHourId}
                    />
                    {formik.errors.workHourId && formik.touched.workHourId && (
                      <Label basic color='red' pointing>
                        {formik.errors.workHourId}
                      </Label>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Select
                      name="jobTitleId"
                      label="Job Title"
                      placeholder="Job Titles"
                      options={jobTitleOptions}
                      onChange={(event, data) => formik.setFieldValue("jobTitleId", data.value)}
                      value={formik.values.jobTitleId}
                    />
                    {formik.errors.jobTitleId && formik.touched.jobTitleId && (
                      <Label basic color='red' pointing>
                        {formik.errors.jobTitleId}
                      </Label>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Input
                      name="deadline"
                      label="Deadline"
                      placeholder="YYYY-MM-DD"
                      onChange={(event, data) => formik.setFieldValue("deadline", data.value)}
                      value={formik.values.deadline}
                    />
                    {formik.errors.deadline && formik.touched.deadline && (
                      <Label basic color='red' pointing>
                        {formik.errors.deadline}
                      </Label>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Input
                      type="number"
                      min="1"
                      name="freePositionNo"
                      label="Number of free position"
                      placeholder="Available position number"
                      onChange={(event, data) => formik.setFieldValue("freePositionNo", data.value)}
                      value={formik.values.freePositionNo}
                    />
                    {formik.errors.freePositionNo && formik.touched.freePositionNo && (
                      <Label basic color='red' pointing>
                        {formik.errors.freePositionNo}
                      </Label>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Input
                      type="number"
                      min="0"
                      name="minSalary"
                      label="Minimum salary"
                      placeholder="3000$"
                      onChange={(event, data) => formik.setFieldValue("minSalary", data.value)}
                      value={formik.values.minSalary}
                    />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form.Input
                      type="number"
                      min="0"
                      name="maxSalary"
                      label="Maximum salary"
                      placeholder="5000$"
                      onChange={(event, data) => formik.setFieldValue("maxSalary", data.value)}
                      value={formik.values.maxSalary}
                    />
                  </Grid.Column>
                  <Grid.Column width={16}>
                    <Form.TextArea
                      name="jobDefinition"
                      label="Definition of job"
                      placeholder="What are candidates going to do..."
                      onChange={(event, data) => formik.setFieldValue("jobDefinition", data.value)}
                      value={formik.values.jobDefinition}
                    />
                    {formik.errors.jobDefinition && formik.touched.jobDefinition && (
                      <Label basic color='red' pointing>
                        {formik.errors.jobDefinition}
                      </Label>
                    )}
                  </Grid.Column>
                  <Grid.Column width={16}>
                        <Checkbox
                          label="Is job remote?"
                          value={formik.values.isRemote}
                          onChange={() => formik.setFieldValue("isRemote", !formik.values.isRemote)}
                          />
                  </Grid.Column>
                  <Grid.Column width={16}>
                    <Button content="Add new advert" primary type="submit"/>
                  </Grid.Column>
                </Grid>
              </Form>
            </Formik>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid>
      </Container>
    </Styles>
  )
}

export default AdvertPostForm
