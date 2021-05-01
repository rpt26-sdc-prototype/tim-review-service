const express = require(`express`);
const router = express.Router();
const axios = require('axios');

const { createSingleGameReview, getSingleGameReview, updateSingleGameReview, deleteSingleGameReview } = require('../db/CRUDControllers.js');


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
router.get('/singleReview/:reviewID', async (req, res) => {
  try {
    const { reviewID } = req.params;
    const result = await getSingleGameReview(reviewID);
    res.send(result);
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