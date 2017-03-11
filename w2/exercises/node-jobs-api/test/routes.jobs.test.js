const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('API Routes', () => {

  // beforeEach
  // before

  describe('GET /', () => {
    it('should return all shows', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body.length.should.equal(3);
          res.body[0].should.have.property('id');
          res.body[0].id.should.equal(1);
          res.body[0].should.have.property('title');
          res.body[0].title.should.equal('chief senior officer');
          res.body[0].should.have.property('description');
          res.body[0].description.should.equal('play all day');
          res.body[0].should.have.property('company');
          res.body[0].company.should.equal('Google');
          res.body[0].should.have.property('email');
          res.body[0].email.should.equal('boss@example.com');
          res.body[0].should.have.property('contacted');
          res.body[0].contacted.should.equal(true);
          done();
        });
    });
  });
  describe('GET /:id', () => {
    it('should return a single show with the id', (done) => {
      chai.request(server)
        .get('/2')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.id.should.equal(2);
          res.body.should.have.property('title');
          res.body.title.should.equal('lead architect');
          res.body.should.have.property('description');
          res.body.description.should.equal('work work work');
          res.body.should.have.property('company');
          res.body.company.should.equal('Microsoft');
          res.body.should.have.property('email');
          res.body.email.should.equal('manager@example.com');
          res.body.should.have.property('contacted');
          res.body.contacted.should.equal(false);
          done();
        });
    });
  });
  describe('POST /', () => {
    it('should create a new job', (done) => {
      chai.request(server)
        .post('/')
        .send({
          title: 'Senior Solutions Architect',
          description: 'Design solutions all day long',
          company: 'NodeGorge',
          email: 'manager@nodegorge.com',
          contacted: false
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.id.should.equal(4);
          res.body.should.have.property('title');
          res.body.title.should.equal('Senior Solutions Architect');
          res.body.should.have.property('description');
          res.body.description.should.equal('Design solutions all day long');
          res.body.should.have.property('company');
          res.body.company.should.equal('NodeGorge');
          res.body.should.have.property('email');
          res.body.email.should.equal('manager@nodegorge.com');
          res.body.should.have.property('contacted');
          res.body.contacted.should.equal(false);
          done();
        });
    });
    it('should NOT create a job missing a title', (done) => {
      chai.request(server)
        .post('/')
        .send({
          description: 'Design solutions all day long',
          company: 'NodeGorge',
          email: 'manager@nodegorge.com',
          contacted: false
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.error.should.equal('Please make a POST request with the required Job data');
          done();
        });
    });
  });
  describe ('PUT /:id', () => {
    it ('should update a job', (done) => {
      chai.request(server)
        .put('/2')
        .send({
          title: 'subservient architect',
          description: 'follow the lead architect',
          company: 'Microsoft',
          email: 'manager@example.com',
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.id.should.equal(2);
          res.body.should.have.property('title');
          res.body.title.should.equal('subservient architect');
          res.body.should.have.property('description');
          res.body.description.should.equal('follow the lead architect');
          done();
        });
    });
  });
  describe('DELETE /:id', () => {
    it('should delete a job', (done) => {
      chai.request(server)
        .delete('/2')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.status.should.equal('success');
        });
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.be.json;
          res.body.should.be.a('array');
          res.body.length.should.equal(3); // not sure why... but this is failing
          done();
        });
    });
  });
});
