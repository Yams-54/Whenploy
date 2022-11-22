import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Job from "./Job";


const FinalColumn = ({changeStats}) => {

  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then(jobs => jobs.json())
      .then((parsedJobs) => {
        setState(parsedJobs);
        let total = 0;
        parsedJobs.forEach((el) => {
          if (el.status === 'final') total++
        })
        changeStats('Final Interview', total)
      })
      .catch(err => console.log('Jobs.useEffect: get jobs: ERROR: ', err));
  }, [])



const elems = state.map((job, i) => {
  if (job.status === 'final')
  return (
    <Job
      key={i}
      info={job}
    />
  );
});
  
  
    return (
      <div className="column">
        <h1>Final Interview Completed</h1>
        {elems}
      </div>
    )
}

export default FinalColumn;