import axios from 'axios'

export default class CandidateService{
  getAllCandidates(){
    return axios.get("http://localhost:8080/api/candidates/getCandidates")
  }
  getCandidateById(id){
    return axios.get("http://localhost:8080/api/candidates/getByCandidateId/" + id)
  }
}