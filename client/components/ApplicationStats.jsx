import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);




const data = {
  labels: ['Application Submitted', 'Phone Screen Completed', 'Technical Interview Completed', 'Final Interview Completed', 'Offer Received', 'Application Rejected'],
  datasets: [
    {
      label: 'Percent',
      data: [5, 3, 2, 2, 1, 1],
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


const ApplicationStats = () => {

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



export default ApplicationStats;