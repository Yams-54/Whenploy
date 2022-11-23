import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Job from "./Job";


const FinalColumn = ({changeStats}) => {

  const [newValue, setValue] = useState(0);
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then(jobs => jobs.json())
      .then((parsedJobs) => {
        setState(parsedJobs);
        let total = 0;
        parsedJobs.forEach((el) => {
          if (el.status === 'Final Interview') total++
        })
        changeStats('Final Interview', total)
      })
      .catch(err => console.log('Jobs.useEffect: get jobs: ERROR: ', err));
  }, [state])

const elems = state.map((job, i) => {
  if (job.status === 'Final Interview')
  return (
    <Job
      key={i}
      info={job}
    />
  );
});
  
  
    return (
      <div className="finalColumn">
        <h1>Final Interview</h1>
        {elems}
      </div>
    )
}

export default FinalColumn;