const User = require('../models/user.model');
const Answers = require('../models/answer.model');
const jwt = require('jsonwebtoken');

module.exports.login = async(req, res) => {
    try {
        const {email, password} = req.body;
        
        const user = await User.findOne({email: email});
        if(!user) {
            return res.status(400).json( {message:"User không tồn tại"});
        }

        if (!user.authenticate(password)) {
            return res.status(400).json({ message: "Mật khẩu không đúng" });
        }

        const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: 6000 }); //6000ms = 10 minutes
        res.json({
            token,
            user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email
            },
        });
    } 
    catch (error) {
        res.status(400).json(error)
   }
}
module.exports.register = async(req, res) => {
    try {
        const {fullName, email, password} = req.body;
        const existUser = await User.findOne({email}).exec();
    
        if(existUser) {
            return res.status(400).json({ message: "User đã tồn tại" });
        }
        const user = new User(req.body);
        await user.save()
        res.json({
            user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
            }
        })
    }
    catch(error) {
        res.status(400).json(error)
    }
}
module.exports.detail = async(req, res) => {
    const id = req.params.id;
    const user = await User.findOne({
        _id: id
    }).exec();
    const answers = await Answers.find({
        userId: id
    })
    res.json({
        user: {
            _id: user._id ,
            fullName: user.fullName,
            email: user.email,
        },
        answers: answers
    })
}
module.exports.userById = async function(req, res,next, id) {
    try {
        const user = await User.findOne({
            _id: id
        })
        if(!user){
            return res.status(400).json({message: "User không tồn tại"})
        }
        req.profile= user;
        req.profile.password = undefined;
        next();
    } catch (error) {
        console.log(error)
    }
}
