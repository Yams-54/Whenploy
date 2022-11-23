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
          if (el.status === 'Rejected') total++
        })
        changeStats('Rejected', total)
      })
      .catch(err => console.log('Jobs.useEffect: get jobs: ERROR: ', err));
  }, [state])

  const elems = state.map((job, i) => {
    if (job.status === 'Rejected')
      return (
        <Job
          key={i}
          info={job}
        />
      );
  });


  return (
    <div className="rejectColumn">
      <div className="columnHeader">
        <h1>Rejected</h1>
      </div>
      {elems}
    </div>
  )
}

export default RejectedColumn;