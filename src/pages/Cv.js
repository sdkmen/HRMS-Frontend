import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CandidateService from '../services/candidateService';

const Cv = () => {
  const [candidates, setCandidates] = useState([])
  let { id } = useParams();

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService.getCandidateById(id).then(result => setCandidates(result.data))
  })
  return (
    <div>
      {
        candidates.map(candidate=>(
          <h3>CV Page: {candidate.firstName} {candidate.lastName}</h3>
        ))
      }
    </div>
  )
}

export default Cv
