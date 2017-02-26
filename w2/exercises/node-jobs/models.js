const jobs = [
  {
    id: 1,
    title: 'Horse Whisperer',
    description: 'Talk to horses all day every day',
    company: 'Horse Fun',
    email: 'ed@horsefun.com',
    contacted: true
  },
  {
    id: 2,
    title: 'Full-stack Developer',
    description: 'Code all day every day',
    company: 'Node Fun',
    email: 'eddie@nodefun.com',
    contacted: false
  },
  {
    id: 3,
    title: 'Clay Dryer',
    description: 'Drying clay all day every day',
    company: 'Clay Fun',
    email: 'edward@clayfun.com',
    contacted: true
  }
];


function getAllJobs() {
  return jobs;
}

function addJob(obj) {
  const sortedJobs = jobs.sort((a, b) => {
    return (a.id - b.id);
  });
  const jobID = sortedJobs[sortedJobs.length -1].id + 1;
  obj.id = jobID;
  obj.contacted = false;
  jobs.push(obj);
  return true;
}

function getJob(id) {
  return jobs.filter((job) => {
    return job.id === id;
  });
}

function updateJob(id, obj) {
  for (let job of jobs) {
    if(job.id === id) {
      obj.id = id;
      if (obj.contacted === 'on') {
        obj.contacted = true;
      }
      else {
        obj.contacted = false;
      }
      removeJob(id);
      jobs.push(obj);
    }
  }
  return true;
}

function removeJob(id) {
  for (let job of jobs) {
    if (job.id === id) {
      const index = jobs.indexOf(job);
      if (index !== -1) jobs.splice(index, 1);
    }
  }
  return true;
}

module.exports = {
  getAllJobs,
  addJob,
  getJob,
  updateJob,
  removeJob
};
