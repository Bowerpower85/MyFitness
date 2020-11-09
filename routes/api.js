const router = require('express').Router();
const Workout = require('../models/workout.js');

//create workout
router.post('api/workout', (req, res) => {
    Workout.create({})
    .then (dbworkout => {
        res.json(dbworkout);
    })
    .catch(message => {
        res.json(message);
    })
})
//get last workout
router.get('api/workout', (req, res) => {
    Workout.find({})
    .populate('exercises')
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch(err => {
        res.json(err);
    })
})
//Add to existing workout
router.put('api/workout/:id', ({ body, params }, res) => [
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true}   
    )
    .then (dbworkout => {
        res.json(dbworkout)
    })
    .catch(err => {
        res.json(err);
    })
])

//for stats page
router.get('api/workout/range', (req, res) => {
    Workout.find({})
    .limit(7)
    .populate('exercises')
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch(err => {
        res.json(err);
    })
})

module.exports = router;