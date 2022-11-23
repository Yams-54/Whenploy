import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ApplicationStats from "./ApplicationStats";
import AppliedColumn from "./AppliedColumn";
import FinalColumn from "./FinalColumn";
import OfferColumn from "./OfferColumn";
import PhoneColumn from "./PhoneColumn";
import RejectedColumn from "./RejectedColumn";
import TechnicalColumn from "./TechnicalColumn";


const AllApplications = () => {
  const [appliedStats, setApply] = useState(0)
  const [phoneStats, setPhone] = useState(0)
  const [techStats, setTech] = useState(0)
  const [finalStats, setFinal] = useState(0)
  const [offerStats, setOffer] = useState(0)
  const [rejectStats, setReject] = useState(0)

  const changeStats = (status, number) => {
    if (status === 'Applied') setApply(number)
    if (status === 'Phone Interview') setPhone(number)
    if (status === 'Technical Interview') setTech(number)
    if (status === 'Final Interview') setFinal(number)
    if (status === 'Offer Received') setOffer(number)
    if (status === 'Rejected') setReject(number)
  }

  return (
    <section className="mainSection">
      <h1>Job Application Tracker</h1>
      <div className="allAppButtons">
        <Link to={'/addApplication'}>
          <button
            type="button"
            className="linkButton">Add New Job</button>
        </Link>
        <Link to={{
          pathname: '/ApplicationStats',
          state: {
            appliedStats: appliedStats,
            phoneStats: phoneStats,
            techStats: techStats,
            finalStats: finalStats,
            offerStats: offerStats,
            rejectStats: rejectStats
          }
          }}>
          <button
            type="button"
            className="linkButton">Application Stats</button>
        </Link>
      </div>
      {/* <div className="headers">
        <h1>Application Submitted</h1>
        <h1>Phone Interview Completed</h1>
        <h1>Technical Interview Completed</h1>
        <h1>Final Interview Completed</h1>
        <h1>Offer Received</h1>
        <h1>Application Rejected</h1>
      </div> */}
      <div className="columnContainer">
        <AppliedColumn changeStats={changeStats}/>
        <PhoneColumn changeStats={changeStats}/>
        <TechnicalColumn changeStats={changeStats}/>
        <FinalColumn changeStats={changeStats}/>
        <OfferColumn changeStats={changeStats}/>
        <RejectedColumn changeStats={changeStats}/>
      </div>
    </section>
  );
}

export default AllApplications;
