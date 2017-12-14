import express from 'express';
import mongoose from 'mongoose';

const app = new express();
const router = express.Router();

app.get('/' , (req, res) =>  res.send("Got the response"));

app.listen(2000, () => console.log("App is listening on port 2000"));