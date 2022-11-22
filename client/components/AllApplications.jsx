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

  return (
    <section className="mainSection">
      <h1>Job Application Tracker</h1>
      <div className="allAppButtons">
        <Link to={'/addApplication'}>
          <button
            type="button"
            className="linkButton">Add New Job</button>
        </Link>
        <Link to={'/ApplicationStats'}>
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
        <AppliedColumn />
        <PhoneColumn />
        <TechnicalColumn />
        <FinalColumn />
        <OfferColumn />
        <RejectedColumn />
      </div>
    </section>
  );
}

export default AllApplications;
