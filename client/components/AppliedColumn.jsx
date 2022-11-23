import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Job from "./Job";


const AppliedColumn = ({changeStats}) => {


  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then(jobs => jobs.json())
      .then((parsedJobs) => {
        setState(parsedJobs);
        let total = 0;
        parsedJobs.forEach((el) => {
          if (el.status === 'Applied') total++
        })
        changeStats('Applied', total)
      })
      .catch(err => console.log('Jobs.useEffect: get jobs: ERROR: ', err));
  }, [state])


  const elems = state.map((job, i) => {
    if (job.status === 'Applied')
      return (
        <Job
          key={i}
          info={job}
        />
      );
  });

    return (

      <div className="appliedColumn">
        <h1>Applied</h1>
        {elems}
      </div>
    )
}

export default AppliedColumn; 