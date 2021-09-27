import axios from "axios"
let API_URL = "http://localhost:8080"

export default class JobAdvertService{
  getJobAdverts(){
    return axios.get(API_URL + "/api/jobadverts/getByIsActiveAndIsConfirmed")
  }

  getJobAdvertById(id){
    return axios.get(API_URL + "/api/jobadverts/getById/" + id)
  }

  getUnConfirmedAdverts(){
    return axios.get(API_URL + "/api/jobadverts/getByNotConfirmed")
  }

  setIsConfirmed(id){
    return axios.post(API_URL +"/api/jobadverts/setIsConfirmed?id=" + id)
  }

  setIsActiveToPassive(id){
    return axios.post(API_URL +"/api/jobadverts/setIsActiveToPassive/" + id)
  }

  addJobAdvert(values){
    return axios.post(API_URL + "/api/jobadverts/add",values)
  }
}