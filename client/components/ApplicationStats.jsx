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
      <Link to="/allApplications" className="backLink">
        <button type="button" className="btnSecondary">
          Back to all applications
        </button>
      </Link>
      <Pie data={data} height="800px" width="800px" options={{responsive: false}} />
    </div>
  );
}



export default withRouter(ApplicationStats);