var fs = require('fs');
var expect = require('chai').expect;
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

