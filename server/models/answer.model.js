const mongoose = require('mongoose');
const answerSchema = new mongoose.Schema(
    {
        topicId: String,
        userId: String,
        question: String,
        answers: Array,
    }, 
    {timestamps: true});

const Answers = mongoose.model("Answers", answerSchema, "answers");
module.exports = Answers;