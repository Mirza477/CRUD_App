const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path')

const app = express();

dotenv.config({path: 'config.env'})
const PORT  = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// Parse request to body parser
app.use(bodyparser.urlencoded({extended: true}))

// set view engine
//app.engine('html',require('ejs').renderFile);
app.set("view engine","ejs")

// loading assests
app.use('/css', express.static(path.resolve(__dirname, 'assests/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assests/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assests/js')))

app.get('/',(req,res) => {
    res.render('index');
})

app.listen(PORT,() => {console.log('Server is running on http://localhost:' + PORT)});