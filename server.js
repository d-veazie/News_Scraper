let express = require('express');
let mongoose = require('mongoose');
let logger = require('morgan');
let axios = require('axios');
let cheerio = require('cheerio');
let db = require('./models')
let PORT = 6969;
let app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));

