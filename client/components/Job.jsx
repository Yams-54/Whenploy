import React, { Fragment, useState, useRef } from "react";
import { reforwardRef } from "react-chartjs-2/dist/utils";
import { useDrag, useDrop } from "react-dnd";
import Select from "react-dropdown-select";
import { connect } from 'react-redux';
import ITEM_TYPE from "../data/types";


// ------- in order to move the items, included item, index, moveItem, and status ----- //
const Job = ({ info, index, moveItem, item, appStatus }) => {
  //destructure info prop
  const { role, company, location, status, contact, referral, salary, note } = info;

  const ref = useRef(null);
  
  // ----- drop action ------ //
  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor){
      if (!ref.current){
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex){
        return;
      }
      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoveredRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  // ------ drag action ------ //
  const [{ isDragging }, drag] = useDrag({
    item: {type: ITEM_TYPE, ...item, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  // ------ if you want to include a popup window modal ------ //

  const [show, setShow] = useState(false);
  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);

  drag(drop(ref));

  // ------- OLD CODE ----- //

  const changeStatus = event => {
    // console.log(event.target.value);
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


    return (
      <div className="job">
        <ul>
          <li className="larger">{role}</li>
          <li className="larger">{company}</li>
          <li>Location: {location}</li>
          {/* <li>Status: {status}</li> */}
          <li>Contact: {contact}</li>
          <li>Referral: {referral}</li>
          <li>Salary: {salary}</li>
          <li>Notes: {note}</li>
        </ul>
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