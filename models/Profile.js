const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  height: {
    type: String
  },
  weight: {
    type: String
  },
  gender: {
    type: String
  },
  // For this field users can put a status for how they feel for the day, then look back at then be able to look back at the different statuses they've had over time (like a diary)
  status: {
    type: String
  }
});

modules.exports = Profile = mongoose.model('profile', ProfileSchema);
