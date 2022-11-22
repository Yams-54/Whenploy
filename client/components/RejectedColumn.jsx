import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Job from "./Job";


const RejectedColumn = ({changeStats}) => {

  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then(jobs => jobs.json())
      .then((parsedJobs) => {
        setState(parsedJobs);
        let total = 0;
        parsedJobs.forEach((el) => {
          if (el.status === 'rejected') total++
        })
        changeStats('Rejected', total)
      })
      .catch(err => console.log('Jobs.useEffect: get jobs: ERROR: ', err));
  }, [])

  const elems = state.map((job, i) => {
    if (job.status === 'rejected')
      return (
        <Job
          key={i}
          info={job}
        />
      );
  });


  return (
    <div className="column">
      <div className="columnHeader">
        <h1>Application Rejected</h1>
      </div>
    <br />
      {elems}
    </div>
  )
}

export default RejectedColumn;