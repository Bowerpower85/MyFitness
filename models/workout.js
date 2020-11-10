const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
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

    });

WorkoutSchema.virtual('totalDuration').get(function () {
    let counter = 0;
    for (i = 0; i < this.exercises.length; i++) {
        counter = counter + this.exercises[i]['duration']
    }
    return counter;
});

const Workout = mongoose.model('workout', WorkoutSchema)
module.exports = Workout;