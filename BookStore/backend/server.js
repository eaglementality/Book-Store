// setting_Up server
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/routes');
const cors = require ('cors');
    require('dotenv').config();

const Port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors({
    origin:'*'
}));

//Database connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err)=>console.log(err));

//Routes
app.use(routes);


app.listen(Port,() => console.log(`Server running on port ${Port}...` ))