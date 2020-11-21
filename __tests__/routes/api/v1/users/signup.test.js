const chai = require('chai');
const chaiHttp = require('chai-http');
const testUsers = require('./_test-users.json');
const { apiUrl, server } = require('../../../../_server');
const { should } = chai;
const userData = testUsers[0];
const signupRoute = `${apiUrl}/users`;
const forbiddedPasswords = ['Passw0rd', 'Password123'];

should();
chai.use(chaiHttp);

describe(`User Registration: POST ${signupRoute}`, () => {
  it('should return a 400 status code if firstname is missing', (done) => {
    let clonedUser = { ...userData };
    delete clonedUser.firstname;

    chai.request(server)
      .post(signupRoute)
      .send(clonedUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
    });
  });

  it('should return a 400 status code if lastname is missing', (done) => {
    let clonedUser = { ...userData };
    delete clonedUser.lastname;

    chai.request(server)
      .post(signupRoute)
      .send(clonedUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
    });
  });

  it('should return a 400 status code if username is missing', (done) => {
    let clonedUser = { ...userData };
    delete clonedUser.username;

    chai.request(server)
      .post(signupRoute)
      .send(clonedUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
    });
  });

  it('should return a 400 status code if email is missing', (done) => {
    let clonedUser = { ...userData };
    delete clonedUser.email;

    chai.request(server)
      .post(signupRoute)
      .send(clonedUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
    });
  });

  it('should return a 400 status code if password is missing', (done) => {
    let clonedUser = { ...userData };
    delete clonedUser.password;

    chai.request(server)
      .post(signupRoute)
      .send(clonedUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
    });
  });

  it('should return a 400 status code if password length is less than 6', (done) => {
    let clonedUser = { ...userData };
    clonedUser.password = 'h3Llo';

    chai.request(server)
      .post(signupRoute)
      .send(clonedUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
    });
  });

  it('should return a 400 status code if password length is greater than 20', (done) => {
    let clonedUser = { ...userData };
    clonedUser.password = 'h3Llo';

    for(let i = 0; i < 5; i++) clonedUser.password += clonedUser.password;

    chai.request(server)
      .post(signupRoute)
      .send(clonedUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
    });
  });

  it('should return a 400 status code if password does not contain a number', (done) => {
    let clonedUser = { ...userData };
    clonedUser.password = 'heLlios';

    chai.request(server)
      .post(signupRoute)
      .send(clonedUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
    });
  });

  it('should return a 400 status code if password does not contain an uppercase character', (done) => {
    let clonedUser = { ...userData };
    clonedUser.password = 'h3llios';

    chai.request(server)
      .post(signupRoute)
      .send(clonedUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
    });
  });

  it('should return a 400 status code if password does not contain a lowercase character', (done) => {
    let clonedUser = { ...userData };
    clonedUser.password = 'H3LLIOS';

    chai.request(server)
      .post(signupRoute)
      .send(clonedUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
    });
  });

  it('should return a 400 status code if password is a common word', (done) => {
    let clonedUser = { ...userData };
    const fp = forbiddedPasswords;
    clonedUser.password = fp[Math.round(Math.random() * fp.length)];

    chai.request(server)
      .post(signupRoute)
      .send(clonedUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
    });
  });

  it('should return a 400 status code if password and password confirm don\'t match', (done) => {
    let clonedUser = { ...userData };
    clonedUser.confirmPassword = 'secret';

    chai.request(server)
      .post(signupRoute)
      .send(clonedUser)
      .end((err, res) => {
        res.should.have.status(400);
        done();
    });
  });

  it('should create user and return success data if all values are valid', (done) => {
    let clonedUser = { ...userData };

    chai.request(server)
      .post(signupRoute)
      .send(clonedUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.should.have.property('user');
        done();
    });
  });
});
