const mongoose = require("mongoose");

const schemaProps = {
  title: {
    type: String,
    required: [true, "A note must have a title"],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'A note must have a description']
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
};

const schema = new mongoose.Schema(schemaProps);

module.exports = mongoose.model('Note', schema)
