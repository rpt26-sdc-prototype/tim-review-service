const app = require('../server/app');
const supertest = require("supertest");
const request = supertest(app);
var db = require('../db');

afterAll(() => {
  db.end()
})

describe('GET REQUEST FOR VALID ROUTE', () =>{

  test('game ID 1', async (done) => {
    var reviews = await request.get('/reviews/1');
    expect(reviews.status).toBe(200);
    expect(Array.isArray(reviews.body)).toBe(true);

    var { gameID,
      userName,
      reviewText,
      creationDate,
      recommended,
      helpfulCount,
      notHelpfulCount,
      funnyCount,
      awards,
      comments,
      profilePicture,
      userTheme,
      reviewsGiven,
      playtime,
      productActivation
    } = reviews.body[0];

    expect(typeof gameID).toBe('number');
    expect(typeof userName).toBe('string');
    expect(typeof reviewText).toBe('string');
    expect(typeof creationDate).toBe('number');
    expect(typeof recommended).toBe('number');
    expect(typeof helpfulCount).toBe('number');
    expect(typeof notHelpfulCount).toBe('number');
    expect(typeof funnyCount).toBe('number');
    expect(typeof awards).toBe('number');
    expect(typeof comments).toBe('number');
    expect(typeof profilePicture).toBe('string');
    expect(typeof userTheme).toBe('number');
    expect(typeof reviewsGiven).toBe('number');
    expect(typeof playtime).toBe('number');
    expect(typeof productActivation).toBe('number');

    done();
  });
});

describe('GET REQUEST FOR INVALID ROUTE', () =>{

  test('game ID 101', async (done) => {
    var reviews = await request.get('/reviews/101');
    expect(reviews.status).toBe(404);
    done();
  });
});


