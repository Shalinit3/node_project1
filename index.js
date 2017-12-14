import express from 'express';
import User from './models/userCollections';
import bodyParser from 'body-parser';
import connection from './api/user/connection.js';

const app = new express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/user' , (req, res) =>  {
    console.log(req.body);
    var myData = new User(req.body);
    myData.save()
    .then(() => res.send({
        data : req.body,
        message : "Data Saved",
    }))
    .catch((err) => res.send({
        data : false,
        message : "Error" + err,
    }))
});

app.listen(2000, () => console.log("App is listening on port 2000"));
