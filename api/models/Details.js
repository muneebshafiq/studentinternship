const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Details = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  DOB: {
    type: String
  },
  CNIC: {
    type: Number
  },
  picture: {
    type: String
  },
  skills: {
    type: String
  },
  activities: {
    type: String
  },
  achievements: {
    type: String
  },
  exprience: {
    type: String
  }
},{
    collection: 'details'
});

module.exports = mongoose.model('Details', Details);