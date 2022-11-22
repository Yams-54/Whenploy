const express = require('express');
const JobController = require('../controllers/JobController');
const app = express();
const Router = express.Router();


// app.use('/', Router);
// Create a job in the database
// http://localhost:3000/job
Router.post('/job', JobController.createJob,
  (req, res) => {
    console.log(res.locals.newJob);
    return res.status(200).json(res.locals.newJob);
  });

// Get a job from the database
// http://localhost:3000/job/"name"
Router.get('/:name', JobController.getJob,
  (req, res) => {
    return res.status(200).json(res.locals.foundJob);
  });

Router.get('/', JobController.getAllJobs,
  (req, res) => {
    return res.status(200).json(res.locals.jobs);
  });
// Change a status of job
// http://localhost:3000/job/"name"
Router.patch('/:name', JobController.updateJob,
  (req, res) => {
    return res.status(200).json(res.locals.updatedJob);
  });

// Delete a job from the database
// http://localhost:3000/job/"name"
Router.delete('/:name', JobController.deleteJob,
  (req, res) => {
    return res.status(200).json(res.locals.deletedJob);
  });

  //user api calls below
  Router.post('/signUp', (req, res) => {
    return res.status(200)
  });

  module.exports = Router;