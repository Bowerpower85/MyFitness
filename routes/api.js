const router = require('express').Router();
const Workout = require('../models/workout');

//get last workout
router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .populate('exercises')
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch(err => {
        res.json(err);
    })
})
//create workout
router.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then (dbworkout => {
        res.json(dbworkout);
    })
    .catch(message => {
        res.json(message);
    })
})

//Add to existing workout
router.put('/api/workouts/:id', ({ body, params }, res) => [
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
router.get('/api/workouts/range', (req, res) => {
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