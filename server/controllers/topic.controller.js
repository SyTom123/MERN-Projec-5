const Topics = require("../models/topic.model");
const Questions = require("../models/question.modle");

module.exports.index = async (req, res) => {
    try {
        const data= await Topics.find({}).exec();
        res.json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}
//[GET]/topics/:id
module.exports.detail = async (req, res) => {

    try {
        const id =req.params.id;
        const topics= await Topics.findOne({_id:id}).exec();
        
        const questions = await Questions.find({topicId: id}).exec();
        res.json({topics, questions});

    } catch (error) {
        res.status(400).json(error)
    }
}