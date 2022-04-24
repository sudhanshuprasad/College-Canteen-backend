const http=require('http');
const connectToMongo = require('./db');
const dotenv=require('dotenv').config();

connectToMongo();

const express = require('express')
const app = express()
const port = process.env.PORT||5000

const cors = require('cors');
const res = require('express/lib/response');
const { contentType, json } = require('express/lib/response');
const { application } = require('express');
app.use(
  cors({
    origin: "*",
    allowedHeaders: "*"
  })
)

app.use(express.json());

const server= http.createServer((res, req)=>{
  res.statusCode=200;
  res.setHeader('content-Type','text/plain');
  res.end('hello')
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/fooditem', require('./routes/fooditem'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
