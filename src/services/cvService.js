import axios from "axios";

export default class CvService{
  getCoverLetterById(id){
    return axios.get("http://localhost:8080/api/coverletters/getByCandidateId?candidateId=" + id)
  }
  
  getEducationsById(id){
    return axios.get("http://localhost:8080/api/educations/getByCandidateId?candidateId=" + id)
  }

  getEducationsByIdSorted(id){
    return axios.get("http://localhost:8080/api/educations/getAllSortedByCandidateId?candidateId=" + id)
  }

  getJobExperiencesById(id){
    return axios.get("http://localhost:8080/api/jobexperiences/getByCandidateId?candidateId=" + id)
  }

  getJobExperiencesByIdSorted(id){
    return axios.get("http://localhost:8080/api/jobexperiences/getAllSortedByCandidateId?candidateId=" + id)
  }
  
  getKnownLanguagesById(id){
    return axios.get("http://localhost:8080/api/knownlanguages/getByCandidateId?candidateId=" + id)
  }

  getSocialLinksById(id){
    return axios.get("http://localhost:8080/api/sociallinks/getByCandidateId?candidateId=" + id)
  }

  getTechnologiesById(id){
    return axios.get("http://localhost:8080/api/technologies/getByCandidateId?candidateId=" + id)
  }
}