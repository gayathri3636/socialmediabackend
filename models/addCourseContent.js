const mongoose = require('mongoose');

const addContent = new mongoose.Schema({
  courseContent: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const CourseContent = mongoose.model('coursescontent', addContent);

module.exports = CourseContent;
