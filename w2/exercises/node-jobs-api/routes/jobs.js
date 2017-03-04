const express = require('express');
const router = express.Router();

const model = require('../models.js');

/*
get all jobs
 */
router.get('/', (req, res, next) => {
  res.json({
    status: 'success',
    data: model.getAllJobs()
  });
});

/*
get single job
 */
router.get('/:id', (req, res, next) => {
  res.json({
    status: 'success',
    data: model.getJob(parseInt(req.params.id))
  });
});


/*
add new job
 */
router.post('/', (req, res, next) => {
  model.addJob(req.body);
  res.json({
    status: 'success',
    data: 'Job Added!'
  });
});


/*
update job
 */
router.put('/:id', (req, res, next) => {
  model.updateJob(parseInt(req.params.id), req.body);
  res.json({
    status: 'success',
    data: 'Job Updated!'
  });
});

/*
delete job
 */
router.delete('/:id', (req, res, next) => {
  model.removeJob(parseInt(req.params.id));
  res.json({
    status: 'success',
    data: 'Job Removed!'
  });
});


module.exports = router;
