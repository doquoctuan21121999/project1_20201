var mongoose = require('mongoose');

var billSchema = mongoose.Schema({
    roomName:{
      type: String,
      default: 'Roomxxx'
    },
    userName: {
        type: String,
        default: 'No Name'
    },
    Electricity_bill: {
        type: Number,
        default: 0
    },
    Water_bill:{
      type: Number,
      default: 0
    },
    Room_bill:{
      type: Number,
      default: 0
    },
    total:{
      type: Number,
      default: 0
    },
    status:{
      type: String,
      default: 'Empty'
    },
    pay:{
      type: String,
      default: 'unpaid'
    }
});

module.exports = mongoose.model('bill', billSchema);
