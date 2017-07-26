const mongoose = require('mongoose');

const styleSchema = new mongoose.Schema({
  style: {
    type: String,
    required: [true, 'The yoga style is required']
  },
//   name: {
//     type: String,
//     required: [true, 'The phone name is required']
//   },
//   image: {
//     type: String, default: ''
//   },
//   specs: {
//     type: Array,
//     default: []
//   }
});

const Style = mongoose.model('Style', styleSchema);

module.exports = Style;
