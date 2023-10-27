const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema(
    {
        topicId: String,
        question: String,
        answers: Array,
        correctAnswer: Number
    }, 
    {timestamps: true});

const Questions = mongoose.model("Question", questionSchema, "questions");
module.exports = Questions;