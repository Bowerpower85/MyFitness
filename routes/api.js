const router = require('express').Router();
const Fitness = require('../models/workout.js');

//create workout
router.post('api/workouts', (req, res) => {
    Fitness.create({})
    .then (dbFitness => {
        res.json(dbFitness);
    })
    .catch(message => {
        res.json(message);
    })
})
//get last workout
router.get('api/workouts', (req, res) => {
    Fitness.find({})
    .populate('exercises')
    .then(dbFitness => {
        res.json(dbFitness);
    })
    .catch(err => {
        res.json(err);
    })
})
//Add to existing workout
router.put('api/workouts/:id', ({ body, params }, res) => [
    Fitness.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true}   
    )
    .then (dbFitness => {
        res.json(dbFitness)
    })
    .catch(err => {
        res.json(err);
    })
])

//for stats page
router.get('api/workouts/range', (req, res) => {
    Fitness.find({})
    .limit(7)
    .populate('exercises')
    .then(dbFitness => {
        res.json(dbFitness);
    })
    .catch(err => {
        res.json(err);
    })
})

module.exports = router;