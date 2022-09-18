// const fetch = require('node-fetch');

const http=require('http');
const connectToMongo = require('./db');
const dotenv=require('dotenv').config();
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const passport = require("passport");

connectToMongo();

const express = require('express')
const app = express();
const port = process.env.PORT||5000

const cors = require('cors');
const res = require('express/lib/response');
const { contentType, json } = require('express/lib/response');
const { application } = require('express');
const { hostname } = require('os');
app.use(
  cors({
    origin: "*",
    allowedHeaders: "*"
  })
  )
  
  // app.use(
  //   cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
  // );

app.use(express.json());
// app.use(passport.initialize());
// app.use(passport.session());

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World');
});

app.get('/',(req,res)=>{
  res.send("backend is working")
})

app.use('/api/auth', require('./routes/auth'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/fooditem', require('./routes/fooditem'));
app.use('/api/order', require('./routes/order'));
app.use('/api/passport-auth', require('./routes/passport-auth'));

app.listen(port,() => {
  console.log(`Canteen app listening on port ${port}`)
})

// testing fetch
// const url = `https://college-canteen-backend.herokuapp.com/api/fooditem/getFood`;
//         fetch(url)
//             .then(response => {
//                 return response.json()
//             })
//             .then(data => {
//                 console.log(data);
//             });