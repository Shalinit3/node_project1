import express from 'express';
import mongoose from 'mongoose';
import user from './models/userCollections'
mongoose.Promise = require('bluebird');

const app = new express();
const router = express.Router();

mongoose.connect('mongodb://localhost/project1', { useMongoClient: true})
.then (() => console.log("Connection Established") , (err) => console.log(err))
.catch( (err) => console.log(err));

app.post('/user' , (req, res) =>  res.send("Got the response"));

app.listen(2000, () => console.log("App is listening on port 2000"));