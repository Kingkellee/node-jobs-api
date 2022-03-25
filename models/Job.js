const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please Provide a Company Name'],
      maxlength: 50,
    },

    position: {
      type: String,
      required: [true, 'Pleae input a Position'],
      maxlength: 100,
    },

    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'please provide a User'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema);
