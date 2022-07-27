const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const User = require('./routes/User');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-hunt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use("/user",User);
app.listen(port, (res,req) => console.log(`Listening on port ${port}`)); 
