import React, { useState } from "react";
import Select from "react-dropdown-select";
import { connect } from 'react-redux';



const Job = ( { info }) => {
  //destructure info prop
  const { role, company, location, status, contact, referral, salary, note } = info;
  const [show, setShow] = useState(false);
  const [arrow, setArrow] = useState(true);

  const changeStatus = event => {
    // console.log(event.target.value);
    event.preventDefault();
    const company = event.target.id;
    const value = event.target.value;
  
      const body = {
        value: value,
      };
      fetch(`/api/${company}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
        })
        // .then(() => {
        //   props.history.push('/');
        // })
        .catch(err => console.log('saveStatusChange fetch /api/companyName: ERROR: ', err));
        // window.location.reload();
    }

    //for react drop down select
    // const options = [
    //   { label: "Applied", value: 'applied' },
    //   { label: "Phone Interview Completed", value: 'phone' },
    //   { label: "Technical Interview Completed", value: 'technical' },
    //   { label: "Final Interview Completed", value: 'final' },
    //   { label: "Offer Received", value: 'offer' },
    //   { label: "Application Rejected", value: 'rejected' },
    // ]

    const description = [];
    if (show) {
      description.push(<div><li>Location: {location}</li>
      {/* <li>Status: {status}</li> */}
      <li>Contact: {contact}</li>
      <li>Referral: {referral}</li>
      <li>Salary: {salary}</li>
      <li>Notes: {note}</li></div>)
    }

    function handleClick () {
      setShow(!show);
      setArrow(!arrow);
    }

    return (
      <div className="job">
        <div className="jobTitle">
        <ul>
          <li className="larger">{role}</li>
          <li className="larger">{company}</li>
          {description}
        </ul>
        { !arrow ? 
           <div className='expandBtn' onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
            </svg>
          </div> :
           <div className='expandBtn' onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
           <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
         </svg></div>}
        </div>
        <h3>Change application status:</h3>
        <select id={company} className="dropdown" onChange={changeStatus}>
          <option value="none">Select New Status</option>
          <option value="Applied">Applied</option>
          <option value="Phone Interview">Phone Interview</option>
          <option value="Technical Interview">Technical Interview</option>
          <option value="Final Interview">Final Interview</option>
          <option value="Offer Received">Offer Received</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    )
  };

  export default Job;