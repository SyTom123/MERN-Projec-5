const expressjwt = require('express-jwt')

module.exports.requiredSignIn = expressjwt.expressjwt ({
    secret: "123456", //mật khẩu
    algorithms: ["HS256"], // thuật toán mã hóa
    requestProperty: "auth"
})

module.exports.isAuth = (req, res, next) => {
    if((req.profile._id != req.auth._id)){
        return res.status(400).json({
            message: "Bạn không có quyền truy cập"
        })
    }
    next();
}