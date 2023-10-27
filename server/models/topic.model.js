const mongoose = require('mongoose');
const topicSchema = new mongoose.Schema(
    {
        name: String,
    }, 
    {timestamps: true});

const Topics = mongoose.model("Topics", topicSchema, "topics");
module.exports = Topics;
