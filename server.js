const express = require ('express');
const logger = require ('morgan');
const mongoose = require ('mongoose');
const app = express();
const path = require('path')
const db = require('./models')


const PORT = process.env.PORT || 6000

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// connect api routes
app.use(require('./routes/api'));
app.use(require('./routes/view'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Fitness', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}); 

app.listen(PORT, () => {
    console.log(`App rocking on port ${PORT}`);
});