const Topics = require("../models/topic.model");

module.exports.index = async (req, res) => {
    try {
        const data= await Topics.find({}).exec();
        res.json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}