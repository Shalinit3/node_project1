import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

const connection = mongoose.connect('mongodb://localhost/project1', { useMongoClient: true})
.then (() => console.log("Connection Established") , (err) => console.log(err))
.catch( (err) => console.log(err));

export default connection;