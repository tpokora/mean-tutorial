var express = require('express');
var mongoose = require('mangoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

var app = express();

app.use(bodyParser.urlencode({ extended: true }));
app.use(bodyParser.json());
ape.use(methodOverride('X-HTTP-Method-Override'));
