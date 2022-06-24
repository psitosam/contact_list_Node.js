'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ContactSchema = new Schema (
{
  name: {
    first: {
      type: String
    },
    middle: {
      type: String
    },
    last: {
      type: String
    }
  },
  address: {
    street: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zip: {
      type: String
    }
  },
  phone: [
    {
      number: {
        type: String
      },
      type: {
        type: String,
        enum: ['home', 'work', 'mobile']
    }
  }],
  email: {
    type: String
  }
});

module.exports = mongoose.model('Contacts', ContactSchema);
