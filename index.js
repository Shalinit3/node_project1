import express from 'express';
import bodyParser from 'body-parser';
import connection from './api/user/connection.js';
import routes from './api/user/user.routes';

const app = new express();
//converting data in request body to JSON 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);
app.listen(2000, () => console.log("App is listening on port 2000"));
