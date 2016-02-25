'use strict';

var mongoose = require('mongoose');

var actorSchema = mongoose.Schema({
  uid: Number,
  login: String,
  avatar_url: String
});

var labelSchema = mongoose.Schema({
  name: String
});


var issueSchema = mongoose.Schema({
  number: Number,
  title: String,
  labels: [labelSchema],
  created: Date,
  updated: Date
});

var eventSchema = mongoose.Schema({
  actor: actorSchema,
  event: String,
  label: labelSchema,
  created: Date,
  issue: issueSchema
});

var Actor = mongoose.model('Actor', actorSchema);
var Label = mongoose.model('Label', labelSchema);
var Issue = mongoose.model('Issue', issueSchema);
var Event = mongoose.model('Event', eventSchema);

let Schema = {
  Actor,
  Label,
  Issue,
  Event
};

module.exports = Schema;