const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FitnessSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excercises: [{
        name: {
            type: String
        },
        type: {
            type: String
        },
        distance: {
            type: Number
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number
        }
    }]
},
    {
        toJSON: {
            // include virtual properties when data is requested
            virtuals: true
        }
    }
})

FitnessSchema.virtual('totalDuration').get(function () {
    let counter = 0;
    for (i=0; i<this.exercise.length; i++) {
        counter = counter+this.exercise[i]['duration']
    }
    return counter;
});

const Fitness = mongoose.model('Fitness', FitnessSchema)
module.exports = Fitness;