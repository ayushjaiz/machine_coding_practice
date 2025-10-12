const dotenv = require("dotenv")
dotenv.config();

const express = require('express');
const app = express()


const {connectToDb} = require('./config/db')

const port = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.send('Hello World!')
})

// Auth Routes


app.listen(port, async() => {
  console.log(`Example app listening on port ${port}`)
  await connectToDb();
})
