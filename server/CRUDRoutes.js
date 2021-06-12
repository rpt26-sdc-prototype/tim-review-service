const express = require(`express`);
const router = express.Router();

const { createSingleGameReview, getSingleGameReview, updateSingleGameReview, deleteSingleGameReview } = require('../db/CRUDControllers.js');

const { getGameReviews } = require('../db/controllers.js');

// <-- CRUD ROUTES -->
// CREATE
router.post('/singleReview', async (req, res) => {
  try {
    const result = await createSingleGameReview(req.query);
    res.send('Created new review!');
  } catch (err) {
    res.send(err);
  }
})

// READ
router.get('/reviews/:gameID', async ({ headers: { host }, params: { gameID } }, res) => {
  try {
    const reviews = await getGameReviews(gameID, host);
    res.send(reviews);
  } catch (err) {
    res.send(err);
  }
})
// UPDATE
router.patch('/singleReview/:reviewID', async (req, res) => {
  try {
    const { reviewID } = req.params;
    const result = await updateSingleGameReview(reviewID, req.query);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
})

// DELETE
router.delete('/singleReview/:reviewID', async (req, res) => {
  try {
    const { reviewID } = req.params;
    const deleteResult = await deleteSingleGameReview(reviewID);
    res.send(deleteResult);
  } catch (err) {
    res.send(err);
  }
})

module.exports = router;