const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    }
})

const Course = mongoose.model("courses", courseSchema);

module.exports = Course;