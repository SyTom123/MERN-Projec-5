const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

module.exports.login = async(req, res) => {
    try {
        const {email, password} = req.body;
        
        const user = await User.findOne({email: email});
        if(!user) {
            return res.status(400).json("User không tồn tại");
        }

        if (!user.authenticate(password)) {
            return res.status(400).json({ message: "Mật khẩu không đúng" });
        }

        const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: 3600 });
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
    
   }
}
module.exports.register = async(req, res) => {
    try {
        const {fullName, email, password} = req.body;
        const existUser = await User.findOne({email}).exec();
    
        if(existUser) {
            return res.status(400).json("User đã tồn tại");
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