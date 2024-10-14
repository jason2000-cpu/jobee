// models/Post.js
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Title of the job
  description: { type: String, required: true }, // Job description
  company: { type: String, required: true }, // Company name
  location: { type: String, required: true }, // Job location
  salary: { type: String, required: false }, // Salary (optional)
  jobType: { type: String, required: false, enum: ['Full-time', 'Part-time', 'Contract', 'Temporary'] }, // Job type (optional)
  requirements: { type: String, required: false }, // Additional requirements (optional)
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who created the post
  createdAt: { type: Date, default: Date.now }, // Creation date
});

module.exports = mongoose.model('Post', PostSchema);

