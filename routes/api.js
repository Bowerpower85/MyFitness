const router = require('express').Router();
const Fitness = require('../models/fitness.js');

//create workout
router.post('api/fitness', (req, res) => {
    Fitness.create({})
    .then (dbFitness => {
        res.json(dbFitness);
    })
    .catch(message => {
        res.json(message);
    })
})
//get last workout
router.get('api/fitness', (req, res) => {
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
router.put('api/fitness/:id', ({ body, params }, res) => [
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
router.get('api/fitness/range', (req, res) => {
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