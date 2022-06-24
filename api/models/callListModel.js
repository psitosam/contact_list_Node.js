'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CallListSchema = new Schema (

    {
      "name": {
        "first": {
          type: String
        },
        "middle": {
          type: String
        },
        "last": {
          type: String
        }
      },
      "phone": {
        type: String
      }
    }

)

module.exports = mongoose.model('CallList', CallListSchema);
