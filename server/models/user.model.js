const mongoose = require('mongoose');
const crypto = require("crypto")
const userSchema = new mongoose.Schema(
    {
        fullName: String,
        email: String,
        password: String,
    }, {timestamps: true});

userSchema.methods = {
    authenticate(password) {
        return this.password === this.encrytPassword(password)
    },
    encrytPassword(password) {
        if(!password) return;
        try {
            return crypto.createHmac("sha256", "123456").update(password).digest('hex')
        } catch (error) {
            console.log(error);
        }
    }
}
userSchema.pre('save', function(next){
    this.password = this.encrytPassword(this.password);
    next();
})
const Users = mongoose.model("Users", userSchema, 'users');

module.exports = Users;
