const Job = require('../models/jobModel');

const JobController = {
  // Create a new Job in the Database
  // Their information will be sent in the request body
  // This should send the created Job
  // async createJob(req, res, next) {
  //   try {
  //     const { role, company, location, status, contact, referral, salary, note } = req.body;
  //     // could you help me understand what exactly the req.body is?
  //     // const newJob = await Job.create(req.body);
  //     console.log({ role: role, company: company, location: location, status: status, contact: contact, referral: referral, salary: salary, note:note });
  //     const newJob = new Job({ role: role, company: company, location: location, status: status, contact: contact, referral: referral, salary: salary, note:note });
  //     console.log('line before save')
  //     await newJob.save();
  //     res.locals.newJob = newJob;
  //     return next();
  //   } catch (err) {
  //     return next({
  //       log: 'Express error in jobController.createJob',
  //       status: 400,
  //       message: {
  //         err: 'An error occurred inside jobController.createJob',
  //       },
  //     });
  //   }
  // },

  async createJob(req, res, next) {

    try {
      // const { role, company, location, status, contact, referral, salary, note } = req.body;
      // console.log({ role: role, company: company, location: location, status: status, contact: contact, referral: referral, salary: salary, note:note });
      const jobs = await Job.create(req.body);
      res.locals.newJob = jobs;
      return next();
    } catch (err) {
      return next({
        log: 'Express error in JobController.getAllJobs',
        status: 400,
        message: {
          err: 'An error occured inside JobController.getAllJobs',
        },
      });
    }
  },

  // finds specific document based off of company name in params
  async getJob(req, res, next) {
    try {
      const { name } = req.params;
      const foundJob = await Job.findOne({ company: name });
      // if (!foundJob) {
      //   console.log(req.params);
      //   return res.status(400).send('No job found');
      // }
      res.locals.foundJob = foundJob;
      return next();
    } catch (err) {
      return next({
        log: 'Express error in JobController.getJob',
        status: 400,
        message: {
          err: 'An error occured inside JobController.getJob',
        },
      });
    }
  },
  async getAllJobs(req, res, next) {
    try {
      const jobs = await Job.find({}).exec();
      res.locals.jobs = jobs;
      return next();
    } catch (err) {
      return next({
        log: 'Express error in JobController.getAllJobs',
        status: 400,
        message: {
          err: 'An error occured inside JobController.getAllJobs',
        },
      });
    }
  },
  // updates status of job 
  async updateJob(req, res, next) {
    try {
      console.log('job controller  ' + req.body)
      const { name } = req.params;
      const { value } = req.body;
      const updatedJob = await Job.findOneAndUpdate(
        // find one and update - first arg is what we are looking for, second arg is updated value
        { company: name },
        { status: value },
        { new: true }
      );
      if (!updatedJob) {
        return res.status(400).send('No Job found');
      }
      res.locals.updatedJob = updatedJob;
      return next();
    } catch (err) {
      return next({
        log: 'Express error in JobController.updateJob',
        status: 400,
        message: {
          err: 'An error occured inside JobController.updateJob',
        },
      });
    }
  },
  async deleteJob(req, res, next) {
    try {
      const { name } = req.params;
      const deletedJob = await Job.findOneAndDelete({ company: name });
      if (!deletedJob) {
        return res.status(400).send('No Job found');
      }
      res.locals.deletedJob = deletedJob;
      return next();
    } catch (err) {
      return next({
        log: 'Express error in JobController.deleteJob',
        status: 400,
        message: {
          err: 'An error occured inside JobController.deleteJob',
        },
      });
    }
  }
};

module.exports = JobController;