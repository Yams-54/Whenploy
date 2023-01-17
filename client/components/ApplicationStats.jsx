import React, { useState, useEffect } from "react";
import { Link, withRouter, useLocation } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const ApplicationStats = () => {
  const {state} = useLocation();
  let total = 0;
  for (let i=0; i < Object.values(state).length; i++) {
    total += Object.values(state)[i]
  }
  const dataValues = [];
  for (let i=0; i < Object.values(state).length; i++) {
    if (total !== 0) dataValues.push(Object.values(state)[i]/total*100)
    else dataValues.push(Object.values(state)[i])
  }

  const data = {
    labels: ['Application Submitted', 'Phone Screen', 'Technical Interview', 'Final Interview', 'Offer Received', 'Application Rejected'],
    datasets: [
      {
        label: 'Percent',
        data: dataValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="appStats">
      <h1>Status of Current Applications</h1>
      <Pie data={data} height="700px" width="700px" options={{responsive: false}} />
      <Link to="/allApplications" className="backLink">
        <button type="button" className="btnSecondary">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        </button>
      </Link>
    </div>
  );
}



export default withRouter(ApplicationStats);