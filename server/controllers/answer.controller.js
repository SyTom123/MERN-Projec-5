const Answers = require("../models/answer.model");
module.exports.index = async(req, res) => {
    res.send("ok");
}

module.exports.createPost = async(req, res) => {
    const answer = new Answers(req.body);
    await answer.save();
    res.json(answer)
}