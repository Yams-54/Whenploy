import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Job from "./Job";


const OfferColumn = ({changeStats}) => {

  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then(jobs => jobs.json())
      .then((parsedJobs) => {
        console.log('hey !')
        setState(parsedJobs);
        let total = 0;
        parsedJobs.forEach((el) => {
          if (el.status === 'Offer Received') total++
        })
        changeStats('Offer Received', total)
      })
      .catch(err => console.log('Jobs.useEffect: get jobs: ERROR: ', err));
  }, [])


  const elems = state.map((job, i) => {
    if (job.status === 'Offer Received')
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
        <h1>Offer Received</h1>
      </div>
      <br />
      {elems}
    </div>
  )
}

export default OfferColumn;