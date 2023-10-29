const Questions = require("../models/question.modle");

module.exports.index = async (req, res) => {

    try {
        const data= await Questions.find({}).exec();
        res.json(data);
    } catch (error) {
        res.status(400).json(error)
    }
}

