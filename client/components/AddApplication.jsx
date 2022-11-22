import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [value, onChange];
};

const AddApplication = (props) => {
  const [role, roleOnChange] = useInput('');
  const [company, companyOnChange] = useInput('');
  const [location, locationOnChange] = useInput('');
  const [status, statusOnChange] = useInput('');
  const [contact, contactOnChange] = useInput('');
  const [referral, referralOnChange] = useInput('');
  const [salary, salaryOnChange] = useInput('');
  const [note, noteOnChange] = useInput('');

  const saveApplication = () => {
    const body = {
      role,
      company,
      location,
      status,
      contact,
      referral,
      salary,
      note,
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
        props.history.push('/allApplications');
      })
      .catch((err) =>
        console.log('AddApplicaiton fetch /api/job: ERROR: ', err)
      );
  };

  return (
    <section className="mainSection createCharContainer">
      <header className="pageHeader">
        <h2>Add New Job Application</h2>
        <Link to="/allApplications" className="backLink">
          <button type="button" className="btnSecondary">
            Back to all applications
          </button>
        </Link>
      </header>
      <article className="jobCard">
        <h3>Enter your new job details</h3>
        <div className="createJobFields">
          <label htmlFor="role">Role: </label>
          <input name="role" value={role} onChange={roleOnChange} />
        </div>
        <div className="createJobFields">
          <label htmlFor="company">Company: </label>
          <input name="company" value={company} onChange={companyOnChange} />
        </div>
        <div className="createJobFields">
          <label htmlFor="location">Location: </label>
          <input name="location" value={location} onChange={locationOnChange} />
        </div>
        <div className="createJobFields">
          <label htmlFor="status">Status: </label>
          <input
            name="status"
            placeholder="applied..."
            value={status}
            onChange={statusOnChange}
          />
        </div>
        <div className="createJobFields">
          <label htmlFor="contact">Contact: </label>
          <input name="contact" value={contact} onChange={contactOnChange} />
        </div>
        <div className="createJobFields">
          <label htmlFor="referral">Referral: </label>
          <input name="referral" value={referral} onChange={referralOnChange} />
        </div>
        <div className="createJobFields">
          <label htmlFor="salary">Salary: </label>
          <input name="salary" value={salary} onChange={salaryOnChange} />
        </div>
        <div className="createJobFields">
          <label htmlFor="note">Notes: </label>
          <input name="note" value={note} onChange={noteOnChange} />
        </div>
        <div className="createJobButtonContainer">
          <Link to="/allApplications" className="backLink">
            <button type="button" className="btnSecondary">
              Cancel
            </button>
          </Link>
          <button type="button" className="btnMain" onClick={saveApplication}>
            Save
          </button>
        </div>
      </article>
    </section>
  );
};

export default withRouter(AddApplication);
