const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const cors = require('cors');
const fetch = require("node-fetch");

const app = express()
app.use(cors())
dotenv.config({ path: './config.env' });
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
//dotenv.config();

const key = process.env.KEY;
const lang = 'en';
//let text = 'happy'
let resData = [];
app.use(express.static(__dirname +'/dist'));
console.log(resData)

app.get('/', (req,res,next) =>{

next()
})
app.post('/', async (req, res, next)=>{
  let text = req.body.text
  console.log(text)
    let url = `https://api.meaningcloud.com/sentiment-2.1?key=${key}&of=json&lang=${lang}&txt=${text}`
    console.log(url)
let response =  await fetch(url,{
  method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(resData),
})
let data = await response.json()
console.log(response)
resData.push(data)


res.json(resData)

next();
})



// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`app runing on port ${port}`);
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
app.use(express.static('dist'));
module.exports = app