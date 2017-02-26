const express = require('express');
const router = express.Router();

const model = require('../models.js');

/*
GET ALL jobs
 */
router.get('/', (req, res, next) => {
  const renderObject = {
    title: 'All Jobs',
    jobs: model.getAllJobs()
  };
  res.render('jobs/jobs.html', renderObject);
});

/*
add new job form
 */
router.get('/new', (req, res, next) => {
  const renderObject = { title: 'Add Job' };
  res.render('jobs/new.html', renderObject);
});

/*
add new job
 */
router.post('/', (req, res, next) => {
  model.addJob(req.body);
  res.redirect('/jobs');
});

/*
update job form
 */
router.get('/:id/update', (req, res, next) => {
  const job = model.getJob(parseInt(req.params.id));
  const renderObject = { title: 'Update Job', job: job[0] };
  res.render('jobs/update.html', renderObject);
});

/*
update job
 */
router.post('/:id/update', (req, res, next) => {
  model.updateJob(parseInt(req.params.id), req.body);
  res.redirect('/jobs');
});

/*
delete job
 */
router.get('/:id/delete', (req, res, next) => {
  model.removeJob(parseInt(req.params.id));
  res.redirect('/jobs');
});


module.exports = router;
