var expect = require('chai').expect;
const axios = require('axios').default;
var lorem = require('../db/randomWordGeneration');
var UsernameGenerator = require('username-generator');

describe('Test random word generation for db filling script', ()=>{
  var randomUser = UsernameGenerator.generateUsername();

  it('userName should be a string', (done)=>{
    expect(randomUser).to.be.a('string');
    done();
  });

  it('userName should be one word', (done)=>{
    let StringArray = randomUser.split(' ');
    expect(StringArray).to.have.lengthOf(1);
    done();
  });

  it('random text should be a string', (done)=>{
    (async () => {
      var reviewText = await lorem.lorem.generateParagraphs(5);
      expect(reviewText).to.be.a('string');
      done();
    })()
  });

  it('review should have more than one word', (done)=>{
    (async () => {
      var reviewText = await lorem.lorem.generateParagraphs(5);
      expect(reviewText).to.not.have.lengthOf(1);
      done();
    })()
  });
});

describe('Test response from server', ()=>{

  it('GET http://localhost:3001/1 should return an array of objects', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data).to.be.an('array');
      done();
    });
  });

  it('GET http://localhost:3001/1 should return a nested object with GameID', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].gameID).to.be.a('number');
      done();
    });
  });

  it('GET http://localhost:3001/1 should return a nested object with userName', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].userName).to.be.a('string');
      done();
    });
  });

  it('GET http://localhost:3001/1 should return a nested object with reviewText', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].reviewText).to.be.a('string');
      done();
    });
  });

  //creationDate
  it('GET http://localhost:3001/1 should return a nested object with creationDate', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].creationDate).to.be.a('number');
      done();
    });
  });

  //recommended
  it('GET http://localhost:3001/1 should return a nested object with recommended', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].recommended).to.be.a('number');
      done();
    });
  });

  //helpfulCount
  it('GET http://localhost:3001/1 should return a nested object with helpfulCount', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].helpfulCount).to.be.a('number');
      done();
    });
  });

  //notHelpfulCount
  it('GET http://localhost:3001/1 should return a nested object with notHelpfulCount', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].notHelpfulCount).to.be.a('number');
      done();
    });
  });

  //funnyCount
  it('GET http://localhost:3001/1 should return a nested object with funnyCount', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].funnyCount).to.be.a('number');
      done();
    });
  });

  //earlyAccess
  it('GET http://localhost:3001/1 should return a nested object with earlyAccess', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].earlyAccess).to.be.a('number');
      done();
    });
  });

  //awards
  it('GET http://localhost:3001/1 should return a nested object with awards', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].awards).to.be.a('number');
      done();
    });
  });

  //comments
  it('GET http://localhost:3001/1 should return a nested object with comments', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].comments).to.be.a('number');
      done();
    });
  });

  //profilePicture
  it('GET http://localhost:3001/1 should return a nested object with profilePicture', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].profilePicture).to.be.a('string');
      done();
    });
  });

  //userTheme
  it('GET http://localhost:3001/1 should return a nested object with userTheme', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].userTheme).to.be.a('number');
      done();
    });
  });

  //reviewsGiven
  it('GET http://localhost:3001/1 should return a nested object with reviewsGiven', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].reviewsGiven).to.be.a('number');
      done();
    });
  });

  //playtime
  it('GET http://localhost:3001/1 should return a nested object with playtime', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].playtime).to.be.a('number');
      done();
    });
  });

  //productActivation method
  it('GET http://localhost:3001/1 should return a nested object with productActivation', (done)=>{
    axios.get('http://localhost:3001/reviews/1')
    .then(reviews => {
      expect(reviews.data[0].productActivation).to.be.a('number');
      done();
    });
  });

});

