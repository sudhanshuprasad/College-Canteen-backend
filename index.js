const connectToMongo = require('./db');
const dotenv=require('dotenv').config();

connectToMongo();

const express = require('express')
const app = express()
const port = process.env.PORT||5000

const cors = require('cors');
app.use(
  cors({
    origin: "*",
    allowedHeaders: "*"
  })
)

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/fooditem', require('./routes/fooditem'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
