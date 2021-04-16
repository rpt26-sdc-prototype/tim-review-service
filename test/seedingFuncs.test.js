var randomMath = require('../db/randomMathGeneration');
var randomWords = require('../db/randomWordGeneration');
var UsernameGenerator = require('username-generator');

describe('Test random word generation for db filling script', ()=>{

  test('Generate a random userName', async (done) => {
    var randomUser = UsernameGenerator.generateUsername();
    expect(typeof randomUser).toBe('string');
    var stringArr = randomUser.split(' ');
    expect(stringArr).toHaveLength(1);
    done();
  });

  test('Generate random review text', async (done) => {
    var reviewText = await randomWords.lorem.generateParagraphs(5);
    expect(typeof reviewText).toBe('string');
    var stringArr = reviewText.split(' ');
    expect(stringArr).not.toHaveLength(1);
    done();
  });

});

describe('Test random number generation for db filling script', ()=>{

  test('Generate a random number between 1 and 100', (done) => {
    var randomNumber = randomMath.generateInbetweenSync(100);
    expect(typeof randomNumber).toBe('number');
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(100);
    done();
  });

  test('Generate a random number between 0 and 2', (done) => {
    var randomNumber = randomMath.threeValProb(.5, .8);
    expect(typeof randomNumber).toBe('number');
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(2);
    done();
  });

  test('Generate a random number between 0 and 1', (done) => {
    var randomNumber = randomMath.twoValProb(.5);
    expect(typeof randomNumber).toBe('number');
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(1);
    done();
  });

});