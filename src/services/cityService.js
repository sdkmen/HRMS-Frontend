import axios from "axios";
let API_URL = "http://localhost:8080"

export default class CityService{
  getCities(){
    return axios.get(API_URL + "/api/cities/getAll")
  }
}