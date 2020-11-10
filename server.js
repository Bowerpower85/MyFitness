const express = require ('express');
const logger = require ('morgan');
const mongoose = require ('mongoose');
const path = require('path')



const PORT = process.env.PORT || 6000

const app = express();
app.use(logger('dev'));
const db = require('./models')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// connect api routes
app.use(require('./routes/api'));
app.use(require('./routes/view'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}); 

app.listen(PORT, () => {
    console.log(`App rocking on port ${PORT}`);
});