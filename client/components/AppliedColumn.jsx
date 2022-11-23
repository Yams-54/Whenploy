import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Job from "./Job";


const AppliedColumn = () => {


  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then(jobs => jobs.json())
      .then((parsedJobs) => {

        setState(parsedJobs);
      })
      .catch(err => console.log('Jobs.useEffect: get jobs: ERROR: ', err));
  }, [])


  const elems = state.map((job, i) => {
    if (job.status === 'applied')
      return (
        <Job
          key={i}
          info={job}
        />
      );
  });


  
  
    return (

      <div className="column">
        <h1>Application Submitted</h1>
        <br/>
        {elems}
      </div>
    )
}

export default AppliedColumn; //update={}''update