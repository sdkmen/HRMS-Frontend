import axios from "axios";
let API_URL = "http://localhost:8080"

export default class WorkHourService{
  getWorkHours(){
    return axios.get(API_URL + "/api/workhours/getAll")
  }
}