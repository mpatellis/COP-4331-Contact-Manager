var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
      },
    
    hashPassword: {
        type: String,
        required: true
      },
    createdDate: {
        type: Date,
        default: Date.now
      }
})

userSchema.methods.authPassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
};

module.exports = mongoose.model('user', userSchema, 'user');