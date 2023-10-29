const Answers = require("../models/answer.model");
module.exports.index = async(req, res) => {
    const answers = await Answers.find({}).exec();
    res.json(answers);
}

module.exports.detail = async(req, res) => {
    const id = req.params.id;

    const answers = await Answers.findOne({_id: id}).exec();
    res.json(answers);
}
module.exports.createPost = async(req, res) => {
    const answer = new Answers(req.body);
    await answer.save();
    res.json(answer)
}