const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
require("dotenv").config();
const route = require("./routes/index.route");

// middle ware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

//route
route(app);

// connect database
mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connect database successfully"))
    .catch(err => console.log(err));

// connection 
const port = process.env.PORT;
app.listen(port, () => {
    console.log("App is running on port "+ port);
})
