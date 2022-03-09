const express = require('express')
const app = express();
const authRouter = require('./routes/authRoutes')
require('dotenv').config()
const env = process.env


app.use('/', authRouter)
app.listen(env.PORT || 3000, function () {
    console.log("start on port " + env.PORT);
  });