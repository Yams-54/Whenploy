import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const AddApplication = (props) => {
  const saveApplication = (event) => {
    event.preventDefault();
    const body = {
      role: event.target.role.value,
      company: event.target.company.value,
      location: event.target.location.value,
      status: event.target.status.value,
      contact: event.target.contact.value,
      referral: event.target.referral.value,
      salary: event.target.salary.value,
      note: event.target.note.value,
    };
    fetch('/api/job', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        props.history.push('/');
      })
      .catch((err) =>
        console.log('AddApplicaiton fetch /api/job: ERROR: ', err)
      );
  };

  return (
    <section className="mainSection createCharContainer">
      <header className="pageHeader">
        <h2>Add New Job Application</h2>
        <Link to="/" className="backLink">
          <button type="button" className="btnSecondary">
            Back to all applications
          </button>
        </Link>
      </header>
      <form className="jobCard" onSubmit={saveApplication}>
        <h3>Enter your new job details</h3>
        <div className="createJobFields">
          <label htmlFor="role">Role: </label>
          <input name="role"/>
        </div>
        <div className="createJobFields">
          <label htmlFor="company">Company: </label>
          <input name="company"/>
        </div>
        <div className="createJobFields">
          <label htmlFor="location">Location: </label>
          <input name="location"/>
        </div>
        <div className="createJobFields">
          {/* <label htmlFor="status">Status: </label>
          <input
            name="status"
            placeholder="applied..."
            value={status}
            onChange={statusOnChange}
          /> */}
          <label htmlFor="status">Status: </label>
          <select name="status">
            <option name="applied">Applied</option>
            <option name="phoneInt">Phone Interview</option>
            <option name="techInt">Technical Interview</option>
            <option name="final">Final Interview</option>
            <option name="offer">Offer Received</option>
            <option name="rejected">Rejected</option>
          </select>
        </div>
        <div className="createJobFields">
          <label htmlFor="contact">Contact: </label>
          <input name="contact" />
        </div>
        <div className="createJobFields">
          <label htmlFor="referral">Referral: </label>
          <input name="referral"/>
        </div>
        <div className="createJobFields">
          <label htmlFor="salary">Salary: </label>
          <input name="salary"/>
        </div>
        <div className="createJobFields">
          <label htmlFor="note">Notes: </label>
          <input name="note"/>
        </div>
        <div className="createJobButtonContainer">
          <Link to="/" className="backLink">
            <button type="button" className="btnSecondary">
              Cancel
            </button>
          </Link>
          <button type="submit" className="btnMain">
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default withRouter(AddApplication);
