const express = require ('express');
const logger = require ('morgan');
const mongoose = require ('mongoose');
const path = require('path')



const PORT = process.env.PORT || 3000

const app = express();
app.use(logger('dev'));
const db = require('./models')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://bowerpowewr85@gmail.com:DeadLast@fitnesscluster.cohae.mongodb.net/workout?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}); 

// connect api routes
app.use(require('./routes/api'));
app.use(require('./routes/view'));

app.listen(PORT, () => {
    console.log(`App rocking on port ${PORT}`);
});